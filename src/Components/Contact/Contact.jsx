import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import './Contact.css'

const Contact = () => { 
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "176c1352-5049-4ba5-ae27-f547f197eb4a");
    // formData.append("access_key", "fa324ca0-2023-4a8c-8a84-0f748fb1bf7a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json,
      mode: 'no-cors'
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };


  return (
    <div id="contact" className="contact">
      <h1 className="contact-header">Contact</h1>
      <div className="contact-container">
      <div className="contact-left">
        <h2>Hey, Let's Connect!!!</h2>
        <p>I'm currently available for all opportunities.</p>
        <div className="contact-details">
          <div className="contact-detail">
            {" "}
            <IoCallOutline />{" "}
            <p>
              <a href="tel:+919875270497">+91-987-527-0497</a>
            </p>
          </div>
          <div className="contact-detail">
            <CiMail /> <p><a href="mailto:amanshukla30704@gmail.com">amanshukla30704@gmail.com</a></p>
          </div>
          <div className="contact-detail">
            <IoLocationOutline /> <p>Nikol, Ahmedabad-382350, Gujarat, India</p>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <form onSubmit={onSubmit} className="contact-form">
            <label htmlFor="">Your Name :</label>
            <input type="text" name="name" placeholder="Enter Your Name" />
            <label htmlFor="">Your Email :</label>
            <input type="email" name="email" placeholder="Enter Your Email" />
            <label htmlFor="">Your Message :</label>
            <textarea name="message" rows="10" placeholder="Enter Your Message"></textarea>
            <button type="submit" className="contact-submit">Send Message</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
