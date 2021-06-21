---
id: contact
folder: index
fallback: en
components:
  - type: form
    title: Связаться с нами
    anchor: contact
    text: >-
      <fieldset>
        <label>Имя <input type="text" name="name" required /></label>   
        <label>Email <input type="email" name="email" autocomplete="email" required /></label>
      </fieldset>

      <fieldset>
        <label>Тема <input type="text" name="subject" required /></label>
      </fieldset>

      <fieldset>
        <label>Сообщение <textarea name="message" rows="4" required></textarea></label>
      </fieldset>

      <div>
        <!--label><input type="checkbox" name="newsletter" /> Я хочу подписаться на рассылку новостей</label><br><br-->
        <label><input type="checkbox" name="privacy" required /> Я прочитал и принимаю <a href="en/legal/privacy-policy" target="_blank">политику конфиденциальности</a>.</label><br><br>
      </div>

      <section>
        <button type="submit">Отправлять</button>
      </section>
    name: Связаться
    netlify: true
    action: /thankyou
---