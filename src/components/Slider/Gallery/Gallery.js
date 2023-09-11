import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";


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
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
            <div className="row g-0 gallery-wrapper">
                <div className="col-4 gallery-list-image">
                    <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        {...settingsNav1}
                    >
                        <div
                            className="event-image-item"
                        >
                            <img
                                src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/341423638_785966919293595_6183288895225873534_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=N2idZCXZIC4AX9AughF&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCFyXURMFZYOlBpyeidImzWBsn5_I7cUY4AJ8A5zYFJkA&oe=65025FAB"
                                alt="Item"
                            />
                        </div>
                        <div
                            className="event-image-item"
                        >
                            <img
                                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/340771471_3053873568240722_7506277565019315117_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=ZF4fLvegq0MAX8C2ciS&_nc_ht=scontent.fhan15-2.fna&oh=00_AfAY4Ldi406sOdE8IpURLgEs0eZWKlvsa26TeIm-Cpj-Iw&oe=65017FFA"
                                alt="Item"
                            />
                        </div>
                        <div
                            className="event-image-item"
                        >
                            <img
                                src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/307665151_514530107346711_1117882958418455062_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=VJB8TkkkE5wAX8oxxdw&_nc_ht=scontent.fhan5-9.fna&oh=00_AfCiIzVNsO20KYeGWyDYmWgdRuh8Jui1BOLCTeGsqSb-RQ&oe=650258EE"
                                alt="Item"
                            />
                        </div>
                        <div
                            className="event-image-item"
                        >
                            <img
                                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/307486181_514537487345973_4285472953388788248_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=9nDdpslf_BwAX_gvZqF&_nc_oc=AQn0N4fX9qg2ugmyJ59-cZIuED_lo2obJzwjkv_o0HE4rgqBSqBSKY6UpnnERT_EnILu_N-JgBW0sfveWCchW750&_nc_ht=scontent.fhan15-2.fna&oh=00_AfD-WePXiTiOdWhLrbzG0ja_Y2-ecS5fhbkAkstibMfu_A&oe=6502E966"
                                alt="Item"
                            />
                        </div>
                        <div
                            className="event-image-item"
                        >
                            <img
                                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/307486181_514537487345973_4285472953388788248_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=9nDdpslf_BwAX_gvZqF&_nc_oc=AQn0N4fX9qg2ugmyJ59-cZIuED_lo2obJzwjkv_o0HE4rgqBSqBSKY6UpnnERT_EnILu_N-JgBW0sfveWCchW750&_nc_ht=scontent.fhan15-2.fna&oh=00_AfD-WePXiTiOdWhLrbzG0ja_Y2-ecS5fhbkAkstibMfu_A&oe=6502E966"
                                alt="Item"
                            />
                        </div>
                        <div
                            className="event-image-item"
                        >
                            <img
                                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/307486181_514537487345973_4285472953388788248_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=9nDdpslf_BwAX_gvZqF&_nc_oc=AQn0N4fX9qg2ugmyJ59-cZIuED_lo2obJzwjkv_o0HE4rgqBSqBSKY6UpnnERT_EnILu_N-JgBW0sfveWCchW750&_nc_ht=scontent.fhan15-2.fna&oh=00_AfD-WePXiTiOdWhLrbzG0ja_Y2-ecS5fhbkAkstibMfu_A&oe=6502E966"
                                alt="Item"
                            />
                        </div>
                    </Slider>
                </div>
                <div className="col-8 gallery-main-image">
                    <Slider 
                        autoplay={true}
                        speed={500}
                        arrows={false}
                        asNavFor={nav2} 
                        ref={(slider1) => setNav1(slider1)}
                    >
                        <div
                            className="event-image-main"
                        >
                            <img
                                src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/341423638_785966919293595_6183288895225873534_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=N2idZCXZIC4AX9AughF&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCFyXURMFZYOlBpyeidImzWBsn5_I7cUY4AJ8A5zYFJkA&oe=65025FAB"
                                alt="Item"
                            />
                        </div>
                        <div
                            className="event-image-main"
                        >
                            <img
                                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/340771471_3053873568240722_7506277565019315117_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=ZF4fLvegq0MAX8C2ciS&_nc_ht=scontent.fhan15-2.fna&oh=00_AfAY4Ldi406sOdE8IpURLgEs0eZWKlvsa26TeIm-Cpj-Iw&oe=65017FFA"
                                alt="Item"
                            />
                        </div>
                        <div
                            className="event-image-main"
                        >
                            <img
                                src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/307665151_514530107346711_1117882958418455062_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=VJB8TkkkE5wAX8oxxdw&_nc_ht=scontent.fhan5-9.fna&oh=00_AfCiIzVNsO20KYeGWyDYmWgdRuh8Jui1BOLCTeGsqSb-RQ&oe=650258EE"
                                alt="Item"
                            />
                        </div>
                        <div
                            className="event-image-main"
                        >
                            <img
                                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/307486181_514537487345973_4285472953388788248_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=9nDdpslf_BwAX_gvZqF&_nc_oc=AQn0N4fX9qg2ugmyJ59-cZIuED_lo2obJzwjkv_o0HE4rgqBSqBSKY6UpnnERT_EnILu_N-JgBW0sfveWCchW750&_nc_ht=scontent.fhan15-2.fna&oh=00_AfD-WePXiTiOdWhLrbzG0ja_Y2-ecS5fhbkAkstibMfu_A&oe=6502E966"
                                alt="Item"
                            />
                        </div>
                        <div
                            className="event-image-main"
                        >
                            <img
                                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/307486181_514537487345973_4285472953388788248_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=9nDdpslf_BwAX_gvZqF&_nc_oc=AQn0N4fX9qg2ugmyJ59-cZIuED_lo2obJzwjkv_o0HE4rgqBSqBSKY6UpnnERT_EnILu_N-JgBW0sfveWCchW750&_nc_ht=scontent.fhan15-2.fna&oh=00_AfD-WePXiTiOdWhLrbzG0ja_Y2-ecS5fhbkAkstibMfu_A&oe=6502E966"
                                alt="Item"
                            />
                        </div>
                        <div
                            className="event-image-main"
                        >
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
