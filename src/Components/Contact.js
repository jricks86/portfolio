import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  });
  const [notification, setNotification] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nlrds0q', 'template_y1eyox9', form.current, 'tnOBjFwXIVyP0xAOO')
          .then((result) => {
            console.log(result.text);
            setNotification("Message sent!");
            setFormData({
            full_name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          }); 
      },
      (error) => {
        console.log(error.text);
        setNotification("Error sending message");
        }
    );
};

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>

        <form ref={form} onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
        {notification && <p className="notification">{notification}</p>}

      </section>
    </>
  );
};

export default Contact;
