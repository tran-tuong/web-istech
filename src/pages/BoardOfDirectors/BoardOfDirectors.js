import React from "react";
import "./BoardOfDirectors.scss";
import Data from "../../Data/BoardOfDirectors.json";
import Presidence from "../../components/Presidence/Presidence";

export default function BoardOfDirectors() {
  const RenderPresidence = () => {
    return Data.map((item, index) => {
      return <Presidence data={item} key={index} />;
    });
  };
  return (
    <div style={{ marginBottom: "10rem" }}>
      <div className="heading-div container" data-aos="fade-up">
        <div className="content-heading">
          <h1>Ban chủ nhiệm</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
      </div>

      {RenderPresidence()}
    </div>
  );
}
