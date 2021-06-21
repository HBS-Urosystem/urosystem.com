---
id: contact
folder: index
fallback: en
components:
  - type: form
    title: 聯繫我們
    anchor: contact
    text: >-
      <fieldset>
        <label>Name <input type="text" name="name" required /></label>   
        <label>Email <input type="email" name="email" autocomplete="email" required /></label>
      </fieldset>

      <fieldset>
        <label>Subject <input type="text" name="subject" required /></label>
      </fieldset>

      <fieldset>
        <label>Message <textarea name="message" rows="4" required></textarea></label>
      </fieldset>

      <div>
        <!--label><input type="checkbox" name="newsletter" /> I want to subscribe to the newsletter</label><br><br-->
        <label><input type="checkbox" name="privacy" required /> I've read and accepted the <a href="en/legal/privacy-policy" target="_blank">privacy policy</a>.</label><br><br>
      </div>

      <section>
        <button type="submit">Send</button>
        <p>Please note that in most cases we will response in English.</p>
      </section>
    name: contact
    netlify: true
    action: /thankyou
---
