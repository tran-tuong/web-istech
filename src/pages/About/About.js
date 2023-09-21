import React from "react";
import "./About.scss";
import data from "../../Data/About.json";
import images from "../../assets/images";
export default function About() {
    const iconCard = [images.star, images.circle, images.star2];

    return (
        <div className="about">
            <div className="container">
                <div class="row heading-div">
                    <div
                        className="col-12 content-heading"
                        data-aos="fade-up"
                        data-aos-delay="70"
                    >
                        <h1>About us</h1>
                        <p>
                            ISTECH Club aims to become the leading academic club
                            in the field of Science and Technology at the
                            International School - Vietnam National University,
                            Hanoi.
                        </p>
                        <p>
                            We aim to internationalize activities related to
                            cooperation and development in the above period by
                            building long-term relationships with individuals
                            and organizations. Thereby helping students develop
                            and train themselves to meet the needs of current
                            and future businesses.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h2
                    className="text-center ab_value_heading"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Our value
                </h2>
                <div className="container">
                    <div className="row">
                        {data.map((item, index) => {
                            return (
                                <div
                                    className="col-4 ab-value-content"
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                >
                                    <div className="ab_item_content">
                                        <div className="d-flex justify-content-center flex-column align-items-center">
                                            <img
                                                src={iconCard[index]}
                                                alt={item.slogan}
                                            />
                                            <h3 className="minisub-ab-heading">
                                                {item.slogan}
                                            </h3>
                                            <span className="minisub-ab-content">
                                                {item.content}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="container ab-mission">
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <h2
                            className="text-center ab_value_heading"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            Vision of development
                        </h2>
                        <div
                            className="ab-mission-content"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="ab-mission-subcontent">
                                <p>
                                    ISTECH Club always wants to build a strong
                                    community for students who love information
                                    technology, those who are pioneers and always
                                    keep up with the constantly changing trends of
                                    the mentioned field so that we can all learn and
                                    develop together. From there, we hope to bring
                                    positive values to the student community of the
                                    International School.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
