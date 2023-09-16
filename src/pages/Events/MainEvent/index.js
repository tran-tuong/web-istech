import React from "react";
import "./MainEvent.scss";
import { useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function EventType() {
    const param = useParams();
    const type = param.type;

    return (
        <div className="container" style={{ marginBottom: '150px'}}>
            <div className="row d-flex justify-content-end">
                <section className="col-6 btn-see-all-event">
                    <Button to="/all-events">See all events </Button>
                </section>
            </div>
            <div className="row event-type-wrapper">
                <div className="col-12 col-md-7">
                    <a href="/events/webinars/abc" className="event-main">
                        <img
                            src="https://images.unsplash.com/photo-1593349480506-8433634cdcbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            className="img-fluid"
                            alt="Event Image"
                        />
                        <section className="event-info">
                            <span className="event-type">Webinar</span>
                            <span className="separate"></span>
                            <span className="event-time">
                                <FontAwesomeIcon className="icon-clock" icon={faClock} />
                                25/04/2023
                            </span>
                        </section>
                        <h3 className="event-title">
                            Title dài dài dài dài dài
                        </h3>
                        <p className="event-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                        </p>
                    </a>
                </div>
                <div className="col-12 col-md-5">
                    <div className="event-type-list">
                        <a href="/events/webinars/abc" className="event-type-item">
                            <div className="event-banner-wrapper">
                                <img 
                                    src="https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/305995478_512409504225438_7778181653633472663_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=_r49qOvIaKkAX9PIBVx&_nc_oc=AQlaJgKd7RQRYlE-Ltii8GI6p-zF774q_lyKIs0RTpkSElEPr70BEQBowDzgo9Nsw8BoxmA2_M56ujWR_ECgE6Pq&_nc_ht=scontent-xsp1-3.xx&oh=00_AfAm0xzHuikU3HRx3pcWLcC_9Qkx6Jz6O-qsD8udUoNmvg&oe=6502D886"
                                    
                                    alt="Event Image"
                                />
                            </div>
                            <div className="event-type-info">
                                <div className="info">
                                    <span className="type">Webinar</span>
                                    <span className="separate"></span>
                                    <span className="time">
                                        <FontAwesomeIcon className="icon-clock" icon={faClock} />
                                        10/02/2023
                                    </span>
                                </div>
                                <h4 className="title">Title dài dài dài dài dài</h4>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, con
                                    sectetur adipiscing elit, sed do
                                </p>
                            </div>
                        </a>
                        <a href="/events/webinars/abc" className="event-type-item">
                            <div className="event-banner-wrapper">
                                <img 
                                    src="https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/240206191_373792967631072_4066500059924291816_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=k0yeUkPExM0AX_ivnqI&_nc_ht=scontent.fhan5-1.fna&oh=00_AfCWS4zGfNkIfBUfy5QwsJyKVpIwFTVD5frdYzjBEzJkIg&oe=65035699"
                                    
                                    alt="Event Image"
                                />
                            </div>
                            <div className="event-type-info">
                                <div className="info">
                                    <span className="type">Webinar</span>
                                    <span className="separate"></span>
                                    <span className="time">
                                        <FontAwesomeIcon className="icon-clock" icon={faClock} />
                                        10/02/2023
                                    </span>
                                </div>
                                <h4 className="title">Title dài dài dài dài dài</h4>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, con
                                    sectetur adipiscing elit, sed do
                                </p>
                            </div>
                        </a>
                        <a href="/events/webinars/abc" className="event-type-item">
                            <div className="event-banner-wrapper">
                                <img 
                                    src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.6435-9/201757786_319900456353657_7271286392903478611_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=Cj0EVCSzAQkAX8ju3-_&_nc_ht=scontent.fhan5-10.fna&oh=00_AfDY-TAyAnnrA_F9mQbgrQCfFSraTy7RSuMcYORqIxLHRA&oe=65253C8F"
                                    
                                    alt="Event Image"
                                />
                            </div>
                            <div className="event-type-info">
                                <div className="info">
                                    <span className="type">Webinar</span>
                                    <span className="separate"></span>
                                    <span className="time">
                                        <FontAwesomeIcon className="icon-clock" icon={faClock} />
                                        10/02/2023
                                    </span>
                                </div>
                                <h4 className="title">Title dài dài dài dài dài</h4>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, con
                                    sectetur adipiscing elit, sed do
                                </p>
                            </div>
                        </a>
                        <a href="/events/webinars/abc" className="event-type-item">
                            <div className="event-banner-wrapper">
                                <img 
                                    src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/122291432_181014896908881_5205360498073420828_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=sRzxeSwtGvkAX9sbHQr&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCqM9YFy4TTZRwPtdzlbJCGfK_NHr5FqdEuAOwZR9mLWw&oe=65256D03"
                                    alt="Event Image"
                                />
                            </div>
                            <div className="event-type-info">
                                <div className="info">
                                    <span className="type">Webinar</span>
                                    <span className="separate"></span>
                                    <span className="time">
                                        <FontAwesomeIcon className="icon-clock" icon={faClock} />
                                        10/02/2023
                                    </span>
                                </div>
                                <h4 className="title">Title dài dài dài dài dài</h4>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, con
                                    sectetur adipiscing elit, sed do
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
