---
id: sample
folder: index
background:
  # - type: image
  #   posx: 50
  #   posy: 50
  #   src: /uploads/medical-physician-doctor-man_web.jpg
  - type: gradient
    name: radial-light
components:
  - type: form
    # title: Clinician Sample Request
    anchor: contact
    text: >-
      <input type="hidden" name="subject" value="Clinician Sample Request (USA)" />

      <h3>Clinical Context</h3>

      <fieldset class="option-group">
        <legend>Which intravesical therapies do you currently administer?</legend>
        <label><input type="checkbox" name="current_therapies" value="Hyaluronic Acid / GAG therapy" required /> Hyaluronic Acid / GAG therapy</label>
        <label><input type="checkbox" name="current_therapies" value="DMSO" /> DMSO</label>
        <label><input type="checkbox" name="current_therapies" value="Antibiotics" /> Antibiotics</label>
        <label><input type="checkbox" name="current_therapies" value="Lidocaine" /> Lidocaine</label>
        <label><input type="checkbox" name="current_therapies" value="Heparin" /> Heparin</label>
        <label><input type="checkbox" name="current_therapies" value="Botox" /> Botox</label>
        <label><input type="checkbox" name="current_therapies" value="Chemotherapy (Mitomycin / Gemcitabine)" /> Chemotherapy (Mitomycin / Gemcitabine)</label>
        <label><input type="checkbox" name="current_therapies" value="Other" /> Other</label>
      </fieldset>

      <fieldset class="option-group">
        <legend>What is your current primary method for instillation?</legend>
        <label><input type="radio" name="current_method" value="Intermittent catheterization" required /> Intermittent catheterization</label>
        <!--<label><input type="radio" name="current_method" value="Foley catheter" /> Foley catheter</label>-->
        <!--label><input type="radio" name="current_method" value="Other device" /> Other device</label-->
        <label><span class="free-text">
          <input type="radio" name="current_method" value="Other method" /> Other
          <small>(please specify)</small></span>
        <input type="text" name="current_method_other" /></label>
      </fieldset>

      <fieldset class="option-group">
        <legend>Which patient types do you treat most frequently?</legend>
        <label><input type="checkbox" name="patient_types" value="Interstitial Cystitis / BPS" required /> Interstitial Cystitis / BPS</label>
        <label><input type="checkbox" name="patient_types" value="Recurrent UTI" /> Recurrent UTI</label>
        <label><input type="checkbox" name="patient_types" value="Post-TURBT chemotherapy" /> Post-TURBT chemotherapy</label>
        <label><input type="checkbox" name="patient_types" value="Neurogenic bladder" /> Neurogenic bladder</label>
        <label><input type="checkbox" name="patient_types" value="Other" /> Other</label>
      </fieldset>

      <fieldset class="option-group">
        <legend>What interests you most about evaluating UroDapter®?</legend>
        <label><input type="checkbox" name="primary_interest" value="Reducing catheterization" /> Reducing catheterization</label>
        <label><input type="checkbox" name="primary_interest" value="Improving patient comfort" /> Improving patient comfort</label>
        <label><input type="checkbox" name="primary_interest" value="Reducing infection risk" /> Reducing infection risk</label>
        <label><input type="checkbox" name="primary_interest" value="Faster clinic workflow" /> Faster clinic workflow</label>
        <label><input type="checkbox" name="primary_interest" value="Patient self-administration potential" /> Patient self-administration potential</label>
        <label><input type="checkbox" name="primary_interest" value="Research interest" /> Research interest</label>
      </fieldset>

      <h3>Professional Profile</h3>

      <fieldset>
        <label>First Name <input type="text" name="first_name" required /></label>
        <label>Last Name <input type="text" name="last_name" required /></label>
      </fieldset>

      <fieldset>
        <label>Professional Title
          <select name="professional_title" required>
            <option value="">Select</option>
            <option value="MD">MD</option>
            <option value="DO">DO</option>
            <option value="NP">NP</option>
            <option value="PA">PA</option>
            <option value="RN">RN</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>Specialty
          <select name="specialty" required>
            <option value="">Select</option>
            <option value="Urology">Urology</option>
            <option value="Urogynecology">Urogynecology</option>
            <option value="Pelvic Floor">Pelvic Floor</option>
            <option value="Continence Specialist">Continence Specialist</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <label>Practice / Hospital Name <input type="text" name="practice_name" required /></label>
        <label>Department <input type="text" name="department" /></label>
      </fieldset>

      <fieldset>
        <label>Practice Type
          <select name="practice_type" required>
            <option value="">Select</option>
            <option value="Academic Medical Center">Academic Medical Center</option>
            <option value="Hospital">Hospital</option>
            <option value="Private Urology Clinic">Private Urology Clinic</option>
            <option value="Urogynecology Clinic">Urogynecology Clinic</option>
            <option value="Outpatient Procedure Center">Outpatient Procedure Center</option>
          </select>
        </label>
        <label>Approximate bladder instillations per month
          <select name="monthly_volume" required>
            <option value="">Select</option>
            <option value="1-10">1-10</option>
            <option value="10-25">10-25</option>
            <option value="25-50">25-50</option>
            <option value="50+">50+</option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <label>NPI Number <small class="hint">Required for U.S. Sunshine Act compliance</small>
        <input type="text" name="npi_number" required /></label>
        <label>State Medical License Number <input type="text" name="state_license_number" /></label>
      </fieldset>

      <!--h3>Sample Selection</h3>

      <fieldset>
        <label class="" title="Choose the quantity that best matches your expected evaluation volume">Sample pack size requested
          <select name="sample_pack_size" required>
            <option value="">Select</option>
            <option value="Evaluation Pack (10 units)">Evaluation Pack (10 units)</option>
            <option value="Clinic Trial Pack (20 units)">Clinic Trial Pack (20 units)</option>
          </select>
        </label>
        <label>Estimated timeframe for evaluation
          <select name="evaluation_timeline" required>
            <option value="">Select</option>
            <option value="Immediate">Immediate</option>
            <option value="Within 1-3 months">Within 1-3 months</option>
            <option value="Future interest">Future interest</option>
          </select>
        </label>
      </fieldset-->

      <!--<fieldset class="option-group">
        <legend>Would you be interested in participating in future clinical evaluations or studies?</legend>
        <label><input type="radio" name="future_research_interest" value="Yes" required /> Yes</label>
        <label><input type="radio" name="future_research_interest" value="Maybe" /> Maybe</label>
        <label><input type="radio" name="future_research_interest" value="No" /> No</label>
      </fieldset>-->

      <h3>Shipping Information</h3>

      <fieldset>
        <label>Shipping Contact Name <input type="text" name="shipping_contact_name" required /></label>
        <label>Shipping Email Address <input type="email" name="email" autocomplete="email" required /></label>
      </fieldset>

      <fieldset>
        <label>Country <input type="text" name="country" value="USA" required readonly /></label>
        <label>State <input type="text" name="state" required /></label>
      </fieldset>

      <fieldset>
        <label>City <input type="text" name="city" required /></label>
        <label>Zip Code <input type="text" name="zip_code" required /></label>
      </fieldset>

      <fieldset>
        <label>Shipping Address Line 1 <input type="text" name="shipping_address_line1" required /></label>
        <label>Shipping Address Line 2 <input type="text" name="shipping_address_line2" placeholder="(optional)" /></label>
      </fieldset>

      <fieldset>
        <label>How did you hear about UroDapter®?
          <select name="referral_source" required>
            <option value="">Select</option>
            <option value="Conference">Conference</option>
            <option value="Colleague">Colleague</option>
            <option value="Distributor">Distributor</option>
            <option value="Journal">Journal</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Direct mail">Direct mail</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label></label>
      </fieldset>
      
      <div class="fieldset">
        <label>
          <input type="checkbox" name="larger_quantity" value="Yes" /> If you are interested in conducting a product trial and would like a larger quantity of free samples, please check this box, and add details in the additional notes.
        </label>
      </div>

      <fieldset>
        <label>Additional Notes <textarea name="message" rows="4"></textarea></label>
      </fieldset>

      <div class="fieldset">
        <label><input type="checkbox" name="compliance_statement" required /> I confirm that I am a licensed healthcare professional and that samples are requested for clinical evaluation purposes only.</label>
        <label><input type="checkbox" class="checkbox checkbox-primary" name="privacy" required /> I've read and accept the <a href="/privacy-policy" target="_blank">privacy policy</a>.</label>
      </div>

      <section>
        <button type="submit">Request Sample Pack</button>
      </section>
    name: Sample
    action: /thankyou
    netlify: true
    pipedrive: true
    always: true
---
