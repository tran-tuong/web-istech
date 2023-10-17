import React, { useEffect, useState } from "react";
import "./Home.scss";
import images from "../../assets/images";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Button from "../../components/Button";
import Typewriter from "typewriter-effect";
import { tab } from "@testing-library/user-event/dist/tab";

export default function Home() {
  const [Counter, setCounter] = useState(false);

  return (
    <div className="bg-main">
      <div className="container-fluid home-content">
        <section className="position-relative banner-section">
          <div className="parrentBanner">
            <div className="banner"></div>
          </div>
        </section>

        <div className="About container">
          <div className="row AboutFlex">
            <div className="col-12 col-md-7 AboutLeft" data-aos="fade-up">
              <h1>ISTECH</h1>
              <p className="is-hiiiii">Hi !</p>
              <div className="txt-animation">
                <p className="stactic-animation">Chúng mình </p>
                <p className="animation-of-txt">
                  <Typewriter
                    options={{
                      strings: ["đau lưng", "mỏi gối", "tê tay", "tăng động"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </p>
              </div>
              <Button to="/about" className="btn-more-about">
                Thông tin về chúng mình
              </Button>
            </div>
            <div className="col-12 col-md-5 AboutRight">
              <div className="About_img">
                <img className="" src={images.homeAbout} alt="ảnh"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="Playground">
          <ScrollTrigger
            onEnter={() => setCounter(true)}
            onExit={() => setCounter(false)}
          >
            <div className="Playground_content" data-aos="fade-up">
              <div className="row g-0 d-flex justify-content-center">
                <section className="col-12 col-sm-8">
                  <h1 className="Playground_heading">
                    SÂN CHƠI MỚI TRONG THỜI ĐẠI CÔNG NGHỆ
                  </h1>
                </section>
              </div>
              <div className="Playground_count flex-ground">
                <div className="Playground_item">
                  <p className="playground_number">
                    {" "}
                    {Counter && <CountUp end={3} start={0} duration={2} />}{" "}
                    <span>+</span>{" "}
                  </p>
                  <p>NĂM HOẠT ĐỘNG</p>
                </div>
                <div className="Playground_item">
                  <p className="playground_number">
                    {" "}
                    {Counter && <CountUp end={40} start={0} duration={2} />}
                    <span>+</span>{" "}
                  </p>
                  <p>THÀNH VIÊN</p>
                </div>
                <div className="Playground_item">
                  <p className="playground_number">
                    {" "}
                    {Counter && <CountUp end={15} start={0} duration={2} />}
                    <span>+</span>{" "}
                  </p>
                  <p>SỰ KIỆN</p>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>

        <div className="LearnMore">
          <div className="container LearnMore_Content">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-12 col-lg-6 col-sm-7 LearnMore_Slider">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={images.homeSlider1}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={images.homeSlider2}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={images.homeSlider3}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                <p className="figure">Lorem</p>
              </div>

              <div
                className="col-12 col-lg-6 col-sm-5 LearnMore_Button"
                data-aos="fade-up"
              >
                <h1>VỀ ISTECH</h1>
                <div className="btn-group">
                  <Button to="/departments" className="btn-learn-more">
                    Thành viên
                  </Button>
                  <Button to="/events" className="btn-learn-more">
                    Sự kiện
                  </Button>
                </div>
                <div className="btn-group">
                  <Button to="/partners" className="btn-learn-more">
                    Đối tác
                  </Button>
                  <Button to="/internal-activities" className="btn-learn-more">
                    Hoạt động nội bộ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="JoinUsToDay">
          <div data-aos="fade-up">
            <h1>JOIN ISTECH</h1>

            <div className="btn-join-us-today">
              <Button
                href="https://bit.ly/istech-recruitment-2023"
                className="btn-register"
              >
                ĐĂNG KÍ NGAY THÔI
              </Button>
              <Button to="/contact" className="btn-contact">
                LIÊN HỆ CHÚNG TỚ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
