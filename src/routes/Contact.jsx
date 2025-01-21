import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <p>Contact Page</p>
      <Link to="/contact/1">Forma de Contato 1 </Link>
      <Link to="/contact/2">Forma de Contato 2 </Link>
      <Link to="/contact/3">Forma de Contato 3 </Link>
    </div>
  );
}
export default Contact;
