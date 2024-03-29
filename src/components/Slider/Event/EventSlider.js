import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventSlider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from '../../Button';

function PrevArrow({ onClick }) {
    return (
        <div onClick={onClick} className="btn-control position-relative event-btn-prev">
            <FontAwesomeIcon className="icon-control" icon={faChevronLeft} />
        </div>
    );
}

function NextArrow({ onClick }) {
    return (
        <div onClick={onClick} className="btn-control position-relative event-btn-next">
            <FontAwesomeIcon className="icon-control" icon={faChevronRight} />
        </div>
    );
}

function EventSlider({ data }) {
    var settings = {
        className: "d-flex justify-content-center align-items-center",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: data.length > 4 ? 4 : data.length,
        autoplay: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: data.length < 2 ? 1 : 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
    };

    return (
        <div className="event-list-wrapper">
            <Slider {...settings}>
                {/* <a href="/events/webinars/abc" class="card">
                    <section className="card-image-wrap">
                        <img src="https://th.bing.com/th/id/OIP.DgnrLsh4IRnSzhryYeTMWQHaJM?pid=ImgDet&rs=1" class="card-img-top" alt="Event" />
                    </section>
                    <div class="card-body">
                        <section className="card-info ">
                            <h3 class="card-title">Web building made simple</h3>
                        </section>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <Button className="btn-read-more" to="">Read more</Button>
                    </div>
                </a>
                <a href="/events/webinars/abc" class="card">
                    <section className="card-image-wrap">
                        <img src="https://th.bing.com/th/id/OIP.DgnrLsh4IRnSzhryYeTMWQHaJM?pid=ImgDet&rs=1" class="card-img-top" alt="Event" />
                    </section>
                    <div class="card-body">
                        <section className="card-info ">
                            <h3 class="card-title">Web building made simple</h3>
                        </section>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <Button className="btn-read-more" to="">Read more</Button>
                    </div>
                </a>
                <a href="/events/webinars/abc" class="card">
                    <section className="card-image-wrap">
                        <img src="https://th.bing.com/th/id/OIP.DgnrLsh4IRnSzhryYeTMWQHaJM?pid=ImgDet&rs=1" class="card-img-top" alt="Event" />
                    </section>
                    <div class="card-body">
                        <section className="card-info ">
                            <h3 class="card-title">Web building made simple</h3>
                        </section>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <Button className="btn-read-more" to="">Read more</Button>
                    </div>
                </a>
                <a href="/events/webinars/abc" class="card">
                    <section className="card-image-wrap">
                        <img src="https://th.bing.com/th/id/OIP.DgnrLsh4IRnSzhryYeTMWQHaJM?pid=ImgDet&rs=1" class="card-img-top" alt="Event" />
                    </section>
                    <div class="card-body">
                        <section className="card-info ">
                            <h3 class="card-title">Web building made simple</h3>
                        </section>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <Button className="btn-read-more" to="">Read more</Button>
                    </div>
                </a>
                <a href="/events/webinars/abc" class="card">
                    <section className="card-image-wrap">
                        <img src="https://th.bing.com/th/id/OIP.DgnrLsh4IRnSzhryYeTMWQHaJM?pid=ImgDet&rs=1" class="card-img-top" alt="Event" />
                    </section>
                    <div class="card-body">
                        <section className="card-info ">
                            <h3 class="card-title">Web building made simple</h3>
                        </section>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <Button className="btn-read-more" to="">Read more</Button>
                    </div>
                </a> */}
                {data.map((item, index) => (
                    <a key={index} href={`/events/${item.type}/${item.slug}`} class="card">
                        <section className="card-image-wrap">
                            <img src={item.banner1} class="card-img-top" alt="Event" />
                        </section>
                        <div class="card-body">
                            <section className="card-info ">
                                <h3 class="card-title">{item.event_name}</h3>
                            </section>
                            <p class="card-text">
                                {item.summary}
                            </p>
                            <Button className="btn-read-more" to={`/events/${item.type}/${item.slug}`}>Read more</Button>
                        </div>
                    </a>
                ))}
            </Slider>
        </div>
    );
}

export default EventSlider;
