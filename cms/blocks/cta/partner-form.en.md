---
id: partner-form
folder: cta
fallback: ""
components:
  - type: form
    title: Discuss a strategic partnership
    anchor: partner-inquiry
    text: >-
      <input type="hidden" name="subject" value="Strategic Partnership Inquiry" />

      <p class="hint">Share your company profile and partnership goals. Our team
      will follow up with next steps. We do not collect tax or billing
      identifiers on this form.</p>

      <fieldset>
        <label>Company <input type="text" name="account" required /></label>
        <label>Your role / title <input type="text" name="role" required /></label>
      </fieldset>

      <fieldset>
        <label>Country <input type="text" name="country" required /></label>
        <label>Region of focus <input type="text" name="region" required /></label>
      </fieldset>

      <fieldset class="option-group">
        <legend>Partnership type</legend>
        <label><input type="radio" name="partnership_type" value="OEM" required /> OEM</label>
        <label><input type="radio" name="partnership_type" value="License" /> License</label>
        <label><input type="radio" name="partnership_type" value="Multi-country corporate alliance" /> Multi-country corporate alliance</label>
        <label><input type="radio" name="partnership_type" value="Other" /> Other</label>
      </fieldset>

      <fieldset>
        <label>Annual relevant revenue band
          <select name="revenue_band" required>
            <option value="">Select</option>
            <option value="Under $1M">Under $1M</option>
            <option value="$1M–$10M">$1M–$10M</option>
            <option value="$10M–$50M">$10M–$50M</option>
            <option value="$50M+">$50M+</option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <label>Contact name <input type="text" name="name" required /></label>
        <label>Email <input type="email" name="email" autocomplete="email" required /></label>
      </fieldset>

      <fieldset>
        <label>Brief description <textarea name="message" rows="4" required></textarea></label>
      </fieldset>

      <div class="fieldset">
        <label><input type="checkbox" class="checkbox checkbox-primary" name="privacy" required /> I've read and accept the <a href="/privacy-policy" target="_blank">privacy policy</a>.</label>
      </div>

      <section>
        <button type="submit">Submit partnership inquiry</button>
      </section>
    name: Partner
    action: /thankyou
    netlify: true
    pipedrive: true
    always: true
---
