import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import './Contact.css'
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify";
const Contact = () => { 

  // const [user_name,setContactData] = useState([{user_name:'',user_email:'',message:''}])
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [message,setMessage] = useState('')


  const onSubmit = async(event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templeteId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publickey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   

    const templeteParams ={
      user_name:name,
      user_email:email,
      message:message,
      to_name: 'Aman Shukla'
    }

    emailjs.send(serviceId,templeteId,templeteParams,publickey)
    .then((res)=>{
      setEmail('');
      setName('');
      setMessage('');
      toast.success("Email sent successfully!")
    })
    .catch((err)=>{
      setEmail('');
      setName('');
      setMessage('');
      console.log('caught err',err);
    })
    
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
            <input type="text" value={name} name="name" placeholder="Enter Your Name" required onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor="">Your Email :</label>
            <input type="email" value={email} name="email" placeholder="Enter Your Email"  required  onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="">Your Message :</label>
            <textarea name="message" value={message} rows="10" placeholder="Enter Your Message" required  onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <button type="submit" className="contact-submit">Send Message</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
