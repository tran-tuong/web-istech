import React from "react";


export default function IntroPresidence(props) {
    let Info = props.data
  return (
    <div data-aos="fade-up">
      <div className="row mb-5 res-img">
        <div className="col-12 col-md-4 img-content">
          <img className="img-fluid mem-img" src={Info.img}></img>
          <h2 className="sub-content-img">{Info.job}</h2>
        </div>
        <div className="col-12 col-md-8 info">
          <h2 className="p-info">{Info.name}</h2>
          <p className="p-info-des">{Info.description}
          </p>
          <div className="p-info-ct">
            <p className="p-info-des">Phone: {Info.phone}</p>
            <p className="p-info-des">Email: {Info.email}</p>
            <p className="p-info-des">LinkedIn: {Info.linkedin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
