import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

const PIPEDRIVE_BASE = 'https://api.pipedrive.com/v1';

async function pipedrivePost(path, body) {
	const res = await fetch(`${PIPEDRIVE_BASE}${path}?api_token=${env.PIPEDRIVE_API_TOKEN}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
	return res.json();
}

function buildNote(fd) {
	const getAll = (name) => fd.getAll(name).filter(Boolean).join(', ');
	const get = (name) => fd.get(name) || '';

	const sections = [];

	sections.push('<h3>Clinical Context</h3>');
	sections.push(`<p><b>Current therapies:</b> ${getAll('current_therapies')}</p>`);
	const method = get('current_method');
	const methodOther = get('current_method_other');
	sections.push(`<p><b>Current method:</b> ${method}${methodOther ? ` — ${methodOther}` : ''}</p>`);
	sections.push(`<p><b>Patient types:</b> ${getAll('patient_types')}</p>`);
	sections.push(`<p><b>Primary interest:</b> ${getAll('primary_interest')}</p>`);

	sections.push('<h3>Professional Profile</h3>');
	sections.push(`<p><b>Title:</b> ${get('professional_title')}</p>`);
	sections.push(`<p><b>Specialty:</b> ${get('specialty')}</p>`);
	sections.push(`<p><b>Practice:</b> ${get('practice_name')} (${get('practice_type')})</p>`);
	if (get('department')) sections.push(`<p><b>Department:</b> ${get('department')}</p>`);
	sections.push(`<p><b>Monthly instillations:</b> ${get('monthly_volume')}</p>`);
	sections.push(`<p><b>NPI:</b> ${get('npi_number')}</p>`);
	if (get('state_license_number')) sections.push(`<p><b>State license:</b> ${get('state_license_number')}</p>`);

	sections.push('<h3>Shipping</h3>');
	sections.push(`<p><b>Contact:</b> ${get('shipping_contact_name')}</p>`);
	sections.push(`<p><b>Email:</b> ${get('email')}</p>`);
	const addr2 = get('shipping_address_line2');
	sections.push(`<p><b>Address:</b> ${get('shipping_address_line1')}${addr2 ? `, ${addr2}` : ''}</p>`);
	sections.push(`<p>${get('city')}, ${get('state')} ${get('zip_code')}, USA</p>`);

	sections.push('<h3>Other</h3>');
	sections.push(`<p><b>Referral source:</b> ${get('referral_source')}</p>`);
	if (get('larger_quantity')) sections.push(`<p><b>Larger quantity interest:</b> Yes</p>`);
	if (get('message')) sections.push(`<p><b>Additional notes:</b> ${get('message')}</p>`);

	return sections.join('\n');
}

export async function POST({ request }) {
	if (!env.PIPEDRIVE_API_TOKEN) {
		console.error('PIPEDRIVE_API_TOKEN is not set in environment');
		return json({ error: 'Pipedrive API token not configured' }, { status: 500 });
	}

	console.log('Pipedrive: creating lead…');

	try {
		const fd = await request.formData();

		const firstName = fd.get('first_name') || '';
		const lastName = fd.get('last_name') || '';
		const email = fd.get('email') || '';
		const practiceName = fd.get('practice_name') || '';

		const address = [
			fd.get('shipping_address_line1'),
			fd.get('shipping_address_line2'),
			fd.get('city'),
			fd.get('state'),
			fd.get('zip_code'),
			'USA'
		].filter(Boolean).join(', ');

		const org = await pipedrivePost('/organizations', {
			name: practiceName,
			address
		});

		const person = await pipedrivePost('/persons', {
			name: `${firstName} ${lastName}`.trim(),
			email: [{ value: email, primary: true, label: 'work' }],
			org_id: org?.data?.id
		});

		const LABELS = {
			hot:  '9c3b5f25-e433-49c1-bd57-c65b1864fa9c',
			warm: 'fb2bd4b8-a11e-42c7-ae7b-a97ec86e1fe9',
			cold: 'dba5971d-4291-4993-9912-593a187183f7'
		};

		const volume = fd.get('monthly_volume') || '';
		const wantsLargerQuantity = !!fd.get('larger_quantity');
		let label_ids = [];

		if (volume === '50+' && wantsLargerQuantity) label_ids = [LABELS.hot];
		else if (volume === '50+') label_ids = [LABELS.warm];
		else if (volume === '25-50') label_ids = [LABELS.cold];

		const lead = await pipedrivePost('/leads', {
			title: `Clinician Sample Request — ${firstName} ${lastName}`,
			person_id: person?.data?.id,
			organization_id: org?.data?.id,
			...(label_ids.length && { label_ids })
		});

		if (!lead?.success) {
			console.error('Pipedrive lead creation failed:', lead);
			return json({ error: 'Failed to create lead' }, { status: 500 });
		}

		await pipedrivePost('/notes', {
			content: buildNote(fd),
			lead_id: lead.data.id
		});

		return json({ success: true, lead_id: lead.data.id });
	} catch (err) {
		console.error('Pipedrive API error:', err);
		return json({ error: 'Internal error' }, { status: 500 });
	}
}
