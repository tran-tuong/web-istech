import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fullstack } from "../../assets/images/svg";
import "./Slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function PrevArrow({ onClick }) {
    return (
        <div onClick={onClick} className="btn-control btn-prev">
            <FontAwesomeIcon className="icon-control" icon={faChevronLeft} />
        </div>
    );
}

function NextArrow({ onClick }) {
    return (
        <div onClick={onClick} className="btn-control btn-next">
            <FontAwesomeIcon className="icon-control" icon={faChevronRight} />
        </div>
    );
}

function SliderCompo({ skills }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        // autoplay: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true,
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
    };
    return (
        <div className="skills">
            <Slider {...settings}>
                {/* <div className="skill-item">
                    <img src={fullstack[0].path} alt={fullstack[0].title} />
                </div>
                <div className="skill-item">
                    <img src={fullstack[1].path} alt={fullstack[0].title} />
                </div>
                <div className="skill-item">
                    <img src={fullstack[2].path} alt={fullstack[0].title} />
                </div>
                <div className="skill-item">
                    <img src={fullstack[3].path} alt={fullstack[0].title} />
                </div>
                <div className="skill-item">
                    <img src={fullstack[4].path} alt={fullstack[0].title} />
                </div>
                <div className="skill-item">
                    <img src={fullstack[5].path} alt={fullstack[0].title} />
                </div> */}
                {skills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <img src={skill.path} alt={skill.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderCompo;
