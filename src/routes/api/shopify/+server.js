import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import { createHmac } from 'node:crypto';

function shopifyWebhookSecret() {
	return process.env['SHOPIFY_WEBHOOK_SECRET'] || env.SHOPIFY_WEBHOOK_SECRET;
}

function verifyHmac(rawBody, headerHmac) {
	const digest = createHmac('sha256', shopifyWebhookSecret())
		.update(rawBody)
		.digest('base64');
	return digest === headerHmac;
}

export async function POST({ request }) {
	if (!shopifyWebhookSecret()) {
		console.error('SHOPIFY_WEBHOOK_SECRET is not set in environment');
		return json({ error: 'Webhook secret not configured' }, { status: 500 });
	}

	const hmac = request.headers.get('x-shopify-hmac-sha256');
	if (!hmac) {
		return json({ error: 'Missing HMAC header' }, { status: 401 });
	}

	const rawBody = await request.text();

	if (!verifyHmac(rawBody, hmac)) {
		console.warn('Shopify webhook HMAC verification failed');
		return json({ error: 'HMAC verification failed' }, { status: 401 });
	}

	const topic = request.headers.get('x-shopify-topic') || 'unknown';
	const webhookId = request.headers.get('x-shopify-webhook-id');
	const shop = request.headers.get('x-shopify-shop-domain');

	let payload;
	try {
		payload = JSON.parse(rawBody);
	} catch {
		payload = rawBody;
	}

	console.log('───── Shopify Webhook ─────');
	console.log('Topic:', topic);
	console.log('Shop:', shop);
	console.log('Webhook ID:', webhookId);
	console.log('Payload:', JSON.stringify(payload, null, 2));
	console.log('───────────────────────────');

	return json({ received: true }, { status: 200 });
}
