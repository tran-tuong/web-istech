import React from "react";
import IntroPresidence from "../IntroPresidence/IntroPresidence";

export default function Presidence(props) {
    const RenderIntroPresidence = () => {
        return props.data.listPresidence.map((item, index) => {
            return <IntroPresidence data = {item} key={index}/>
        })
    }
  return (
    <div>
      <div className="presidence container">
        <div className="presidence-header">
          <h2 className="sub-p-content">{props.data.Year}</h2>
        </div>
        <div className="row">
          <div className="col-1 fix-resolution">
            <div className="div-linear"></div>
          </div>
          <div className="col-11 p-content">
            {RenderIntroPresidence()}
          </div>
        </div>
      </div>
    </div>
  );
}
