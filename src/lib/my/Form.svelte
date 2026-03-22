<script context="module">
  import { gateway } from '$lib/stores'
  //import { enhance } from '$app/forms'
</script>
<script>
import { dev } from '$app/environment'
import { page } from '$app/stores'
import { get } from 'svelte/store'
import { onMount, tick } from 'svelte'

export let comp
let submitting = false
let formEl

function _setCheckboxByValue(form, name, value) {
  for (const input of form.querySelectorAll(`input[name="${name}"]`)) {
    if (input.type === 'checkbox' && input.value === value) {
      input.checked = true
      return
    }
  }
}

function _setRadioByValue(form, name, value) {
  for (const input of form.querySelectorAll(`input[name="${name}"]`)) {
    if (input.type === 'radio' && input.value === value) {
      input.checked = true
      return
    }
  }
}

function _prefillClinician(form) {
  const text = {
    first_name: 'John',
    last_name: 'Doe',
    practice_name: 'Doe Medical Practice',
    department: 'Urology',
    npi_number: '1234567890',
    shipping_contact_name: 'John Doe',
    email: 'john.doe@example.com',
    state: 'CA',
    city: 'San Francisco',
    zip_code: '94102',
    shipping_address_line1: '123 Main St',
  }
  for (const [name, val] of Object.entries(text)) {
    const el = form.querySelector(`[name="${name}"]`)
    if (el && !el.disabled) el.value = val
  }

  for (const [name, val] of Object.entries({
    professional_title: 'MD',
    specialty: 'Urology',
    practice_type: 'Private Urology Clinic',
    monthly_volume: '10-25',
    referral_source: 'Colleague',
  })) {
    const sel = form.querySelector(`select[name="${name}"]`)
    if (sel) sel.value = val
  }

  _setRadioByValue(form, 'current_method', 'Intermittent catheterization')
  _setCheckboxByValue(form, 'current_therapies', 'Hyaluronic Acid / GAG therapy')
  _setCheckboxByValue(form, 'patient_types', 'Interstitial Cystitis / BPS')
  _setCheckboxByValue(form, 'primary_interest', 'Reducing catheterization')

  for (const name of ['compliance_statement', 'privacy']) {
    const el = form.querySelector(`input[name="${name}"][type="checkbox"]`)
    if (el) el.checked = true
  }
}

onMount(async () => {
  const url = get(page).url
  if (!(dev || url.searchParams.has('prefill'))) return
  if (comp.name !== 'Clinician') return
  await tick()
  if (formEl) _prefillClinician(formEl)
})

async function _submit(e) {
  if (comp.always !== true) $gateway[comp.name] = true

  if (comp.pipedrive) {
    e.preventDefault()
    const form = e.target
    const btn = form.querySelector('button[type="submit"]')
    if (btn) { btn.disabled = true; btn.textContent = 'Submitting…' }
    submitting = true

    try {
      const res = await fetch('/api/pipedrive', { method: 'POST', body: new FormData(form) })
      const data = await res.json()
      if (!res.ok) console.error('Pipedrive API error:', res.status, data)
      else console.log('Pipedrive lead created:', data)
    } catch (err) {
      console.error('Pipedrive submission failed:', err)
    }

    form.submit()
    return
  }

  if (!comp.action) e.preventDefault()
}
</script>

<!--{#if !$gateway[comp.name]}-->
<article hidden={$gateway[comp.name]} id="{comp.anchor}" style="{comp.background ? comp.background : ``}">
  {#if !!comp.title}<h2>{comp.title}</h2>{/if}
  {#if !!comp.subhead}<h3>{comp.subhead}</h3>{/if}
  <div>
    <form bind:this={formEl} id={comp.anchor} name="{comp.name}" method={!!comp.netlify ? "POST" : ''} data-remove-prefix action={(!!comp.action ? comp.action : '')} on:submit="{_submit}" data-netlify={comp.netlify}>
      <input type="hidden" name="form-name" value={comp.name}>
      {#if !!comp.text}{@html comp.text}{/if}
      <!--{#if !!comp.netlify}
      <input type="text" name="country">
      {/if}-->
      {#if !!comp.action}
        <a href="/{comp.lang}{comp.action}" hidden aria-hidden="true"></a>
      {/if}
    </form>
  </div>
</article>
<!--{/if}-->

<style>
  h3 {
    text-align: center;
  }
  a[hidden] { display:none; }

  form :global([type='text']), 
  form :global([type='email']), 
  form :global([type='url']), 
  form :global([type='password']), 
  form :global([type='number']), 
  form :global([type='date']), 
  form :global([type='datetime-local']), 
  form :global([type='month']), 
  form :global([type='search']), 
  form :global([type='tel']), 
  form :global([type='time']), 
  form :global([type='week']), 
  form :global([multiple]), 
  form :global(select), 
  form :global(textarea) {
    background-color: hsla(0, 0%, 100%, 0.25) !important;
  }
  form :global(fieldset.option-group label), form :global(label small), form :global(input), form :global(select), form :global(textarea) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    box-shadow: none;
    &:focus {
      box-shadow: none;
    }
  }

  form :global(fieldset:not(.option-group)) {
    align-items: flex-end!important;
  }

  form :global(fieldset > label) {
    flex: 1 0 20ch;
    padding-top: 1em;
    /*margin: 0 var(--rem) 1em 0;*/
    margin: 0 0 1em;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    height: min-content;
  }
  form :global(fieldset > label:not(:empty)) {
    border-bottom: 2px solid var(--white);
  }
  form :global(fieldset > legend) {
    width: 100%;
    font-size: 1.25rem;
    margin-bottom: 1em;
    text-align: left;
  }
  form :global(fieldset) {
    gap: 0.75rem 2rem;
    margin-bottom: 3em;
  }
  form :global(fieldset.option-group > label) {
    margin: 0;
    padding-top: 0;
    /* flex: 1 0 18ch; */
    gap: 0.5rem;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
  }
  form :global(fieldset.option-group > label:not(:has(.free-text))) {
    border-bottom: none;
    flex-direction: row;
  }
  form :global(fieldset.option-group > label:has(.free-text)) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    /* padding-top: 0.5rem; */
    /* border-bottom: 1px solid var(--white); */
  }
  form :global(div.fieldset) { 
    display: flex;
    flex-direction: column;
    gap: 0.75rem 2rem;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    margin-bottom: 3em;
  }
  form :global(div.fieldset > label > input) { 
    margin-top: .125rem;
  }
  form :global(span.free-text), form :global(div.fieldset > label) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
  }
  form :global(.free-text small) {
    margin-top: .125rem;
  }
  form :global(select) {
    background-image: var(--marker-down);
    background-size: 1.25em;
    background-position: right 0.5em center;
    background-repeat: no-repeat;
    padding-right: 2em;
    /* font-size: 75%; */
  }
  form :global(.hint) {
    /* display: block;
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
    font-size: 0.85em; */
    opacity: 0.9;
    text-align: left;
    /* cursor: help; */
  }
  input[name="country"] {
    display: none;
  }

  /*button {
    margin-block: 0;
  }*/
  div {
    text-align: center;
    /*margin-bottom: 3.75em;
    margin-top: 2.5rem;*/
  }
  a {
    text-decoration: none;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    display: block;
  }
  
</style>
