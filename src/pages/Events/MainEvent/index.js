import React from "react";
import "./MainEvent.scss";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function EventType() {
    const param = useParams();
    const type = param.type;

    return (
        <div className="container" style={{ marginBottom: '150px'}}>
            <div className="row d-flex justify-content-between align-items-center main-event-header">
                <nav className="col-6 breadcrumb">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="item-link" to="/">
                                <FontAwesomeIcon icon={faHouse} />
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link className="item-link event-active" to="/events">
                                Events
                            </Link>
                        </li>
                    </ul>
                </nav>
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
                            alt="Event"
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
                                    src="https://images.unsplash.com/photo-1555617778-02518510b9fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    
                                    alt="Event"
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
                                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    
                                    alt="Event"
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
                                    src="https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1953&q=80"
                                    
                                    alt="Event"
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
                                    src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80"
                                    alt="Event"
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
