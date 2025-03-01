import React from 'react'
import './Contact.css';
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import arrow_2 from '../../assets/white-arrow.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a6966d4-7d40-4308-bab4-f1785a7d6ad1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
    <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="msg-icon" /></h3>
        <p>
        Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
            <li><img src= {mail_icon} alt="mail-icon" />Contact@edusity.dev</li>
            <li><img src={phone_icon} alt="phone-icon" /> +1 1234567890</li>
            <li> <img src={location_icon} alt="location-icon" /> 77 Massachusetts Ave , Cambridge <br /> MA 02139, United State</li>
        </ul>
    </div>

    <div className="contact-col">
          
          <form onSubmit={onSubmit}>
             <label>Enter Your Name</label>
             <input type="text" name='name' placeholder='Enter your name' required />
             <label>Phone Number</label>
             <input type="tel" name="phone" placeholder='Enter your Phone number' required />
             <label>Write Your Message </label>
             <textarea name="message" rows="6" placeholder='Write your message here' required></textarea>
             <button type='submit' className='btn drk-btn'>Submit Now <img src={arrow_2} alt="w-arr" /></button>
          </form>
          <span>{result}</span>

    </div>
    </div>
  )
}
import './Contact.css';

export default Contact
