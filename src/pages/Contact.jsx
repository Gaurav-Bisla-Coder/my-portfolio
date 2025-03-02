import React from "react";

const Contact = () => {
  return (
    <div className="container text-center mt-5 pt-5">
      <h2>Contact Me</h2>
      <p>Email: <link to="mailto:gaurav.bisla1@gmail.com" className="text-white text-decoration contact-link">gaurav.bisla1@gmail.com</link></p>
      <p>Phone: <link to="tel:+919069000752" className="text-white text-decoration contact-link">+91 9069000752</link></p>
      <p>WhatsApp: <link to="https://wa.me/919069000752" target="_blank" className="text-white text-decoration contact-link">Chat on WhatsApp</link></p>
    </div>
  );
};

export default Contact;