import "./Circle.scss";
import images from "../../assets/images";

function Circle({ border, data, partner }) {
  if (border) {
    return (
      <>
        <div className="rectangle" data-aos="fade-up">
          <div className="circle-content">
            <div className="circle-content-image">
              <img src={data.image} alt="Avatar" loading="lazy" />
            </div>
            <h3 className="circle-content-title">{data.name}</h3>
            {data.class_id && <p className="circle-content-desc">ICE2021A</p>}
          </div>
        </div>
      </>
    );
  } else if (partner) {
    return (
      <>
        <div className="rectangle-p">
          <div className="circle-content">
            <div className="circle-content-image circle-content-image-p">
              <img src={data.image} alt="Avatar" loading="lazy" />
            </div>
            {partner && (
              <div className="partner">
                <img
                  src={images.globe}
                  alt="Globe icon"
                  className="icon-globe"
                />
                <a href={data.link} className="partner-name">
                  {data.nameP}
                </a>
              </div>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="circle-content circle-member">
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
}

export default Circle;
