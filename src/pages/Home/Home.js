import React, { useState, useEffect, useRef } from "react";
import "./Home.scss";
import images from "../../assets/images";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Button from "../../components/Button";

export default function Home() {
  const [Counter, setCounter] = useState(false);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }

    const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

    let mouseDown = false;
    window.addEventListener("mousedown", () => {
        mouseDown = true;
    })

    window.addEventListener("mouseup", () => {
        mouseDown = false;
    })

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        init()
    })

    class Particle {
      constructor(x, y, radius, color) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.color = color;
      }
  
      draw() {
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          c.shadowColor = this.color;
          c.shadowBlur = 15;
          c.fillStyle = this.color;
          c.fill();
          c.closePath();
      }
  
      update() {
          this.draw();
      }
    }

    let particles;
    function init() {
        particles = [];

        for (let i = 0; i < 1500; i++) {
            const canvasWidth = canvas.width + 1000;
            const canvasHeight = canvas.height + 2000;

            const x = Math.random() * canvasWidth - canvasWidth / 2;
            const y = Math.random() * canvasHeight - canvasHeight / 2;
            const radius = 2 * Math.random();

            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push(new Particle(x, y, radius, color));
        }
    }

    let radians = 0;
    let alpha = 1;

    function animate() {
        requestAnimationFrame(animate);

        c.fillStyle = `rgba(10, 10, 10, ${alpha})`;

        c.fillRect(0, 0, canvas.width, canvas.height);

        c.save();

        c.translate(canvas.width / 2, canvas.height / 2);

        c.rotate(radians);

        particles.forEach(particle => {
            particle.update();
        })

        c.restore();

        radians += 0.006;

        if(mouseDown && alpha >= 0.03) {
            alpha -= 0.02;
        } else if (!mouseDown && alpha < 1) {
            alpha += 0.02;
        }
    }

    init();
    animate();
  }, [])

  return (
    <div>
      <section className="position-relative">
        <div className="position-absolute canvas-background">
          <canvas ref={canvasRef}></canvas>
        </div>
        <section className="position-relative banner-section home-content">
          <div className="parrentBanner">
            <div className="banner"></div>
          </div>
        </section>
      </section>
      <div className="container-fluid">
        <div className="About container">
          <div className="row AboutFlex">
            <div className="col-12 col-md-7 AboutLeft">
              <h1>ISTECH</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <Button>MORE ABOUT ISTECH</Button>
            </div>
            <div className="col-12 col-md-4 AboutRight">
              <div className="About_img">
                <img className="img-fluid" src={images.sliderImg} alt="ảnh"></img>
              </div>
            </div>
          </div>
        </div>
  
        <div className="Playground">
          <ScrollTrigger
            onEnter={() => setCounter(true)}
            onExit={() => setCounter(false)}
          >
            <div className="Playground_content">
              <h1 className="Playground_heading">
                A NEW PLAYGROUND IN THE TECHNOLOGY ERA
              </h1>
              <div className="Playground_count row">
                <div className="col-4 Playground_item">
                  <p className="playground_number">
                    {" "}
                    {Counter && <CountUp end={2} start={0} duration={2} />}{" "}
                    <span>+</span>{" "}
                  </p>
                  <p>YEARS</p>
                </div>
                <div className="col-4 Playground_item">
                  <p className="playground_number">
                    {" "}
                    {Counter && <CountUp end={40} start={0} duration={2} />}
                    <span>+</span>{" "}
                  </p>
                  <p>MEMBERS</p>
                </div>
                <div className="col-4 Playground_item">
                  <p className="playground_number">
                    {" "}
                    {Counter && <CountUp end={15} start={0} duration={2} />}{" "}
                    <span>+</span>{" "}
                  </p>
                  <p>EVENTS</p>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
  
        <div className="LearnMore">
          <div className="container LearnMore_Content">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-12 col-md-5 LearnMore_Slider">
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
                        src={images.sliderImg}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={images.sliderImg}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={images.sliderImg}
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
  
                <p>Lorem</p>
              </div>
  
              <div className="col-12 col-md-7 LearnMore_Button">
                <h1>LEARN MORE</h1>
                <div>
                  <Button className="btn-learn-more">Our Members</Button>
                  <Button className="btn-learn-more">Our Events</Button>
                </div>
                <div>
                  <Button className="btn-learn-more">Our Partners</Button>
                  <Button className="btn-learn-more">Our News</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="JoinUsToDay">
          <h1>JOIN US TODAY</h1>
  
          <div>
            <Button className="btn-join-us-today">REGISTER</Button>
            <Button className="btn-join-us-today">CONTACT US</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
