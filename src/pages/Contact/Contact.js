import React from "react";
import { Form } from "../../components/ValidateForm/Form";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <div className="container" style={{ marginBottom: '150px'}}>
            <div className="row">
                <div className="col-12 heading-div">
                    <section className="content-heading">
                        <h1>Contact Us</h1>
                    </section>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-10">
                    <div className="contact-wrapper">
                        <div className="contact-list-info">
                            <section className="contact-image">
                                <img
                                    src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/306155551_514550010678054_5787662117059003930_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=rs2cbqeSrrMAX8RmaOF&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCOroZpW2nRO7Q4R_ev6_H09XqGrN5QJsE7Ax6hU-F7Tg&oe=650621B9"
                                    alt="Contact"
                                />
                            </section>
                            <div className="contact-info">
                                <div className="contact-info-wrapper">
                                    <FontAwesomeIcon
                                        icon={faPhoneVolume}
                                        style={{ color: "#ffffff", width: '22px', height: '22px' }}
                                    />
                                    <a href="tel:+8404993243">0904 993 243</a>
                                </div>
                                <div className="contact-info-wrapper">
                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        style={{ color: "#ffffff", width: '22px', height: '22px' }}
                                    />
                                    <p href="">
                                        79 Nguy Nhu Kon Tum <br />
                                        Nhan Chinh, Thanh Xuan, Hanoi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
