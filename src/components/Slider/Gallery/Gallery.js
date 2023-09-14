import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronLeft, faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function PrevArrow({ onClick }) {
    return (
        <div onClick={onClick} className="btn-control gallery-btn-up">
            <FontAwesomeIcon className="icon-control" icon={faChevronUp} />
        </div>
    );
}

function NextArrow({ onClick }) {
    return (
        <div onClick={onClick} className="btn-control gallery-btn-down">
            <FontAwesomeIcon className="icon-control" icon={faChevronDown} />
        </div>
    );
}

function PrevArrowLeft({ onClick }) {
    return (
        <div onClick={onClick} className="btn-control gallery-btn-prev">
            <FontAwesomeIcon className="icon-control" icon={faChevronLeft} />
        </div>
    );
}

function NextArrowRight({ onClick }) {
    return (
        <div onClick={onClick} className="btn-control gallery-btn-next">
            <FontAwesomeIcon className="icon-control" icon={faChevronRight} />
        </div>
    );
}

export default function EventGallery() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    let settingsNav1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    vertical: false,
                    verticalSwiping: false,
                    prevArrow: <PrevArrowLeft />,
                    nextArrow: <NextArrowRight />,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                    prevArrow: <PrevArrowLeft />,
                    nextArrow: <NextArrowRight />,
                },
            },
        ],
    };

    return (
        <div className="row g-0 gallery-wrapper">
            <div className="col-md-4 gallery-list-image">
                <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    {...settingsNav1}
                >
                    <div className="event-image-item">
                        <img
                            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Item"
                        />
                    </div>
                    <div className="event-image-item">
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Item"
                        />
                    </div>
                    <div className="event-image-item">
                        <img
                            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Item"
                        />
                    </div>
                    <div className="event-image-item">
                        <img
                            src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Item"
                        />
                    </div>
                    <div className="event-image-item">
                        <img
                            src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1873&q=80"
                            alt="Item"
                        />
                    </div>
                    <div className="event-image-item">
                        <img
                            src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/307486181_514537487345973_4285472953388788248_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=9nDdpslf_BwAX_gvZqF&_nc_oc=AQn0N4fX9qg2ugmyJ59-cZIuED_lo2obJzwjkv_o0HE4rgqBSqBSKY6UpnnERT_EnILu_N-JgBW0sfveWCchW750&_nc_ht=scontent.fhan15-2.fna&oh=00_AfD-WePXiTiOdWhLrbzG0ja_Y2-ecS5fhbkAkstibMfu_A&oe=6502E966"
                            alt="Item"
                        />
                    </div>
                </Slider>
            </div>
            <div className="col-md-8 gallery-main-image">
                <Slider
                    autoplay={true}
                    speed={500}
                    arrows={false}
                    dots={false}
                    asNavFor={nav2}
                    ref={(slider1) => setNav1(slider1)}
                >
                    <div className="event-image-main">
                        <img
                            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Item"
                        />
                    </div>
                    <div className="event-image-main">
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Item"
                        />
                    </div>
                    <div className="event-image-main">
                        <img
                            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Item"
                        />
                    </div>
                    <div className="event-image-main">
                        <img
                            src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Item"
                        />
                    </div>
                    <div className="event-image-main">
                        <img
                            src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1873&q=80"
                            alt="Item"
                        />
                    </div>
                    <div className="event-image-main">
                        <img
                            src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/307486181_514537487345973_4285472953388788248_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=9nDdpslf_BwAX_gvZqF&_nc_oc=AQn0N4fX9qg2ugmyJ59-cZIuED_lo2obJzwjkv_o0HE4rgqBSqBSKY6UpnnERT_EnILu_N-JgBW0sfveWCchW750&_nc_ht=scontent.fhan15-2.fna&oh=00_AfD-WePXiTiOdWhLrbzG0ja_Y2-ecS5fhbkAkstibMfu_A&oe=6502E966"
                            alt="Item"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
}
