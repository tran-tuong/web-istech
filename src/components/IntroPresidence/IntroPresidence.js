import React from "react";
import images from "../../assets/images";

export default function IntroPresidence(props) {
    let Info = props.data
  return (
    <div>
      <div className="row mb-5 res-img">
        <div className="col-12 col-md-4 img-content">
          <img className="img-fluid mem-img" src={images.sliderImg}></img>
          <h2 className="sub-content-img">{Info.job}</h2>
        </div>
        <div className="col-12 col-md-8">
          <h2 className="p-info">{Info.name}</h2>
          <p className="p-info-des">{Info.description}
          </p>
          <div>
            <p className="p-info-des">Phone: {Info.phone}</p>
            <p className="p-info-des">Email: {Info.email}</p>
            <p className="p-info-des">LinkedIn: {Info.linkedin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}