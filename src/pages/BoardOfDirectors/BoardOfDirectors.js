import React from "react";
import "./BoardOfDirectors.scss";
import images from "../../assets/images";
export default function BoardOfDirectors() {
  return (
    <div>
      <div className="heading-div container">
        <div className="content-heading">
          <h1>Board of Directors</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
      </div>

      <div className="presidence container">
        <div className="presidence-header">
          <h2>2022 - 2023 Academic Year</h2>
        </div>
        <div className="row">
          <div className="col-1 ">
            <div className="div-linear"></div>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12 col-md-3">
                
                    <img className="img-fluid mem-img" src={images.sliderImg}></img>
                <h2>Presidence</h2>
              </div>
              <div className="col-12 col-md-9">
                <h2>Công Châu Anh</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div>
                  <p>Phone: </p>
                  <p>Email: </p>
                  <p>LinkedIn: </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
