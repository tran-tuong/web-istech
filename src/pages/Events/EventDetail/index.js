import React from "react";
import "./EventDetail.scss";
import { Link, useParams } from "react-router-dom";
import EventGallery from "../../../components/Slider/Gallery/Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function EventDetail() {
    const param = useParams();
    const slug = param.eventName;

    return (
        <main className="" style={{ marginBottom: '150px'}}>
            <div className="container">
                <nav className="col-6 breadcrumb mt-5">
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
                                Events
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="event-banner">
                <img
                    src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/368385633_782578657208520_4212804473864769217_n.png?_nc_cat=101&ccb=1-7&_nc_sid=52f669&_nc_ohc=Ond22MMKJz0AX9dkzeJ&_nc_ht=scontent.fhan15-1.fna&oh=00_AfDZDge3y8rKpqkTtk2qaliQIn1dFahYH6CBOa4HTx0Waw&oe=6507399D"
                    className="img-fluid"
                    alt="Event Banner"
                />
            </div>
            <div className="event-info">
                <div className="container-fluid d-flex event-info-wrapper">
                    <div className="event-about d-flex justify-content-center align-items-center">
                        <section className="col-10">
                            <h2>About</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Quis ipsum sus-pendisse
                                ultrices gravida. Risus commodo viverra maecenas
                                accumsan lacus vel
                            </p>
                        </section>
                    </div>
                    <div className="event-image">
                            <img 
                                src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/311593005_538613991604989_3142021122758759088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=VyP3PX4rGJYAX-Xn6N3&_nc_ht=scontent.fhan5-9.fna&oh=00_AfB9wBHlobHAEsqDUa2IcT8oBI8QQHhYfs-hvmbITGseiA&oe=650880B0"
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
                    <EventGallery />
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
