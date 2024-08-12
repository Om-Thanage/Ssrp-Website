import { useEffect, useState } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const sanitizeInput = (input) => {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export default function Contact() {
  const [result, setResult] = useState("");
  const [textareaRows, setTextareaRows] = useState(1);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "92c28c76-5418-4583-b23c-c91031fa23c1");

    // Sanitize formData before sending
    const sanitizedFormData = new FormData();
    for (const [key, value] of formData.entries()) {
      sanitizedFormData.append(key, sanitizeInput(value));
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: sanitizedFormData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", sanitizedFormData);
      setResult(data.message);
    }
  };

  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  const handleTextareaChange = (event) => {
    const textareaLineHeight = 16; 
    const rows = Math.ceil(event.target.scrollHeight / textareaLineHeight);
    setTextareaRows(rows);
  };

  const handleNumberInputChange = (event) => {
    const value = event.target.value;
    if (value.length > 10) {
      event.target.value = value.slice(0, 10);
    }
  };

  return (
    <div className='contact-container' id='contact'>
              <div className="contact-end-title">
          <h2 className='gradient-text' data-aos="fade-down" >Ignite the stellar exchange</h2>
          <hr />
        </div>
    <div className="contact-grid">
      <div className="contact-start">
        <div className="contact-start-content" data-aos="fade-right">
          <div className="icon" ><img src='/assets/location.svg' alt='location icon' />Location </div>
          <div className='detail'>
          KJ Somaiya College of Engineering,<br /> Vidyanagar, Vidya Vihar East, Vidyavihar, <br />Mumbai, Maharashtra 400077
          </div>

        </div>
        <div className="contact-start-content" data-aos="fade-right">
          <div className="icon" ><img src='/assets/mail.svg' alt='mail icon' />Mail</div>
          <div className='detail'>
          <a href="mailto:ssrp.somaiya.edu" style={{ color: 'white' }}>ssrp.somaiya.edu</a>
          </div>
          
        </div>
        <div className="contact-start-content" data-aos="fade-right">
          <div className="icon" ><img src='/assets/phone.svg' alt='phone icon' />Call</div>
          <div className='detail'>
          Rishikesh Bhintade:<br /> +917056103520
          </div>
          
        </div>
      </div>
      <div className="contact-middle" data-aos="zoom-in">
      <iframe width="120%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="SSRP" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=KJ%20Somaiya%20College%20of%20Engineering%20Vidyanagar,%20Vidya%20Vihar%20East,%20Vidyavihar,%20Mumbai,%20Maharashtra%20400077+(SSRP)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
      </div>
      <form onSubmit={onSubmit} className="contact-end" >
        <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required data-aos="fade-left"  />
        <input 
          type="text" 
          name="number" 
          placeholder="Your Mobile No" 
          className="contact-inputs" 
          required 
          data-aos="fade-left" 
          inputMode="numeric" 
          pattern="\d{10}" 
          maxLength={10}
          onInput={handleNumberInputChange}
          
        />
        <input type="email" name="email" placeholder="Your Email Id" className="contact-inputs" required data-aos="fade-left"  />
       
        <textarea
          name="message"
          placeholder="Your Purpose of Contact"
          className="contact-inputs"
          required
          rows={textareaRows}
          onChange={handleTextareaChange}
          data-aos="fade-left"
          
         />
        <button type="submit" data-aos="fade-left" className='submit-button' >Submit 🡲</button>
      </form>
      <span className='verification'>{result}</span>
      </div>

    </div>
  );
}

