import React from "react";
import "./MainEvent.scss";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHouse } from "@fortawesome/free-solid-svg-icons";
import Data from '../../../Data/Events.json';

export default function EventType() {
    const param = useParams();
    const type = param.type;

    const [newEvent, ...events] = Data;

    const renderData = () => {
        return events.map((item, index) => (
            <a href={`/events/${item.type}/${item.slug}`} className="event-type-item" key={index}>
                <div className="event-banner-wrapper">
                    <img 
                        src={item.banner1}
                        alt={item.event_name}
                    />
                </div>
                <div className="event-type-info">
                    <div className="info">
                        <span className="type">{item.type}</span>
                        <span className="separate"></span>
                        <span className="time">
                            <FontAwesomeIcon className="icon-clock" icon={faClock} />
                            {item.time}
                        </span>
                    </div>
                    <h4 className="title">{item.event_name}</h4>
                    <p className="desc">
                        {item.summary}
                    </p>
                </div>
            </a>
        ))
    }

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
                    <a href={`/events/${newEvent.type}/${newEvent.slug}`} className="event-main">
                        <img
                            src={newEvent.banner1}
                            className="img-fluid"
                            alt={newEvent.event_name}
                        />
                        <section className="event-info">
                            <span className="event-type">{newEvent.type}</span>
                            <span className="separate"></span>
                            <span className="event-time">
                                <FontAwesomeIcon className="icon-clock" icon={faClock} />
                                {newEvent.time}
                            </span>
                        </section>
                        <h3 className="event-title">
                            {newEvent.event_name}
                        </h3>
                        <p className="event-desc">
                            {newEvent.summary}
                        </p>
                    </a>
                </div>
                <div className="col-12 col-md-5">
                    <div className="event-type-list">
                        {renderData()}
                    </div>
                </div>
            </div>
        </div>
    );
}
