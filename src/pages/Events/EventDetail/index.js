import React from "react";
import "./EventDetail.scss";
import { Link, useParams } from "react-router-dom";
import EventGallery from "../../../components/Slider/Gallery/Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Data from '../../../Data/Events.json';

export default function EventDetail() {
    const param = useParams();
    const slug = param.eventName;

    const eventDetail = Data.find(item => item.slug === slug);

    return (
        <main className="" style={{ marginBottom: '150px'}}>
            <div className="container">
                <nav className="col-12 breadcrumb mt-5">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="item-link" to="/">
                                <FontAwesomeIcon icon={faHouse} />
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link className="item-link" to="/events">
                                Events
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link className="item-link event-active" to="/events">
                                {eventDetail.event_name}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="event-banner">
                <img
                    src={eventDetail.banner2}
                    className="img-fluid"
                    alt={eventDetail.event_name}
                />
            </div>
            <div className="event-info">
                <div className="container-fluid d-flex event-info-wrapper">
                    <div className="event-about d-flex justify-content-center align-items-center">
                        <section className="col-10">
                            <h2>About</h2>
                            <p>
                                {eventDetail.content}
                            </p>
                        </section>
                    </div>
                    <div className="event-image">
                            <img 
                                src={eventDetail.feature}
                                alt="Feature"
                            />
                    </div>
                </div>
            </div>
            <div className="event-gallery">
                <section className="container">
                    <h2 className="">Gallery</h2>
                </section>
                <div className="container-fluid">
                    <EventGallery event_image={eventDetail.images} />
                </div>
            </div>
            <div className="event-record">
                <div className="container">
                    <div className="row d-flex record-wrapper">
                        <section className="col-md-7 col-12 record">
                            <img 
                                src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                                className="img-fluid"
                                alt="record-lock"
                            />
                        </section>
                        <section className="col-md-5 col-12 sign-in d-flex flex-column justify-content-center align-items-center">
                            <span className="btn-sign-in-wrapper"><Link className="sign-in-link" to="/login">Sign In</Link></span>
                            <span>to watch the record</span>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}