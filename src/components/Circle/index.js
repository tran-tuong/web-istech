import "./Circle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Circle({ border, data, partner }) {
  return border ? (
    <>
      <div className="rectangle">
        <div className="circle-content">
          <div className="circle-content-image">
            <img src={data.image} alt="Avatar" />
          </div>
          <h3 className="circle-content-title">{data.name}</h3>
          {data.class_id && <p className="circle-content-desc">ICE2021A</p>}
          {partner && (
            <div className="partner">
              <FontAwesomeIcon icon={faGlobe} className="icon-globe" />
              <span className="partner-name">{data.nameP}</span>
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="circle-content">
        <div className="circle-content-image">
          <img src={data.img} alt="Avatar" />
          {data.job === "Leader" && (
            <span className="circle-content-role">Leader</span>
          )}
        </div>
        <h3 className="circle-content-title">{data.name}</h3>
        <p className="circle-content-desc">{data.class}</p>
      </div>
    </>
  );
}

export default Circle;
