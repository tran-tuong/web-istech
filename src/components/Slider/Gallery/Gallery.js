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

export default function EventGallery({ event_image }) {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    let settingsNav1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        // autoplay: true,
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
                    prevArrow: false,
                    nextArrow: false,
                },
            },
        ],
    };

    const gallery_images = (type) => {
        return event_image.map((item, index) => {
            return type === 'main' ? (
                    <div className="event-image-main" key={index}>
                        <img
                            src={item.image}
                            alt="Item"
                        />
                    </div>
                ) : (
                    <div className="event-image-item" key={index}>
                        <img
                            src={item.image}
                            alt="Item"
                        />
                    </div>
                )
            } 
        );
    }

    return (
        <div className="row g-0 gallery-wrapper">
            <div className="col-md-4 gallery-list-image">
                <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    {...settingsNav1}
                >
                    {gallery_images('aside')}
                </Slider>
            </div>
            <div className="col-md-8 gallery-main-image">
                <Slider
                    // autoplay={true}
                    speed={500}
                    arrows={false}
                    dots={false}
                    asNavFor={nav2}
                    ref={(slider1) => setNav1(slider1)}
                >
                    {gallery_images('main')}
                </Slider>
            </div>
        </div>
    );
}
