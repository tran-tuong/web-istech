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
                    loading="lazy"
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
        </main>
    );
}