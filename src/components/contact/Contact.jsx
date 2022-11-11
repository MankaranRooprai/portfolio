import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_r06nvn9', 'template_ku32ifd', form.current, 'IK-kag2H2823g1tCM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Email" name="from_email" />
          <input type="text" placeholder="Name" name="from_name" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}