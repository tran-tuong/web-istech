import React, { useState } from "react";
import "./EventDetail.scss";
import { Link, useParams } from "react-router-dom";
import EventGallery from "../../../components/Slider/Gallery/Gallery";

export default function EventDetail() {
    const param = useParams();
    const slug = param.eventName;

    // console.log(currentImage);


    return (
        <main className="" style={{ margin: '150px 0'}}>
            <div className="event-banner">
                <img
                    src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/368385633_782578657208520_4212804473864769217_n.png?_nc_cat=101&ccb=1-7&_nc_sid=52f669&_nc_ohc=j3gSq5vNXHMAX_9YAM-&_nc_ht=scontent.fhan15-1.fna&oh=00_AfBQOZJfF9QUBNxkfsNthAkjLVOGaav_3AQ81MIihZol1A&oe=65014ADD"
                    className="img-fluid"
                    alt="Banner"
                />
            </div>
            <div className="event-info">
                <div className="container-fluid d-flex">
                    <div className="event-about d-flex justify-content-center align-items-center">
                        <section className="col-8" style={{ paddingLeft: '7.5px'}}>
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
                                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/311213937_538613711605017_6614133368395128061_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=-Xb8PaV2z9MAX_zIc4c&_nc_ht=scontent.fhan15-2.fna&oh=00_AfBZ8BGHZo58xDvacC19wjjFLSZ2RW9WGYePc36bOUf7vg&oe=65014A9C"
                                alt="Image"
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
                <div className="container d-flex justify-content-between align-items-center gap-5">
                    <section className="record">
                        <img 
                            src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/207535015_322325812777788_5497701254932609870_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=Yr_OhuNevUMAX9wZO2r&_nc_ht=scontent.fhan15-1.fna&oh=00_AfB8Sa0tt6oiaY188VL7YIHuN4jpcloX7Y-mLH8icM6kYQ&oe=652447E0"
                            className="img-fluid"
                            alt="record-lock"
                        />
                    </section>
                    <section className="sign-in d-flex flex-column justify-content-center align-items-center">
                        <Link className="btn-sign-in" to="#">Sign In</Link>
                        <span>to watch the record</span>
                    </section>
                </div>
            </div>
        </main>
    );
}