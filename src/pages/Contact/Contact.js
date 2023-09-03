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
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <Form />
        </div>
      </div>
    </div>
   </div>
  );
}
