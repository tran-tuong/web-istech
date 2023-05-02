import React from "react";
import { Form } from '../../components/ValidateForm/Form'
import "./Contact.scss";

export default function Contact() {
  
  return (
   <div className="contact-container">
    <div className='container contact'>
          <div className='contact-header'>
            <div className='content-heading'>
              <h1>Contact</h1>
            </div>
          </div>
     </div>     
    <Form />
   </div>
  );
}
