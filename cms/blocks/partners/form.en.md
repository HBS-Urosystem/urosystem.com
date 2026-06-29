---
id: form
folder: partners
fallback: ""
components:
  - type: form
    title: Partner inquiry
    anchor: partner-form
    text: >-
      <input type="hidden" name="subject" value="Partner Inquiry (UroDapter)" />

      <p class="hint">Tell us about your territory and portfolio. We do not collect
      tax or billing identifiers on this form.</p>

      <fieldset>
        <label>Company <input type="text" name="account" required /></label>
        <label>Country <input type="text" name="country" required /></label>
      </fieldset>

      <fieldset>
        <label>Region / territory focus <input type="text" name="region" required /></label>
        <label>Estimated annual relevant unit volume
          <select name="annual_volume" required>
            <option value="">Select</option>
            <option value="Under 1,000">Under 1,000</option>
            <option value="1,000–5,000">1,000–5,000</option>
            <option value="5,000–20,000">5,000–20,000</option>
            <option value="20,000+">20,000+</option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <label>Target therapy areas <input type="text" name="therapy_areas" placeholder="e.g. IC/BPS, rUTI, oncology" required /></label>
        <label>Current portfolio (brief) <input type="text" name="current_portfolio" required /></label>
      </fieldset>

      <fieldset>
        <label>Contact name <input type="text" name="name" required /></label>
        <label>Email <input type="email" name="email" autocomplete="email" required /></label>
      </fieldset>

      <fieldset>
        <label>Message <textarea name="message" rows="4"></textarea></label>
      </fieldset>

      <div class="fieldset">
        <label><input type="checkbox" class="checkbox checkbox-primary" name="privacy" required /> I've read and accept the <a href="/privacy-policy" target="_blank">privacy policy</a>.</label>
      </div>

      <section>
        <button type="submit">Submit partner inquiry</button>
      </section>
    name: Partner
    action: /thankyou
    netlify: true
    pipedrive: true
    always: true
---
