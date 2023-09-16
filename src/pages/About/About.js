import React from "react";
import "./About.scss";
import data from "../../Data/About.json";
export default function About() {
  console.log(window.innerWidth);
  console.log(data);
  return (
    <div className="about">
      <div className="container">
        <div class="row heading-div d-flex justify-content-center">
          <div className="col-12 content-heading" data-aos="fade-up" data-aos-delay="70">
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center ab_value_heading" data-aos="fade-up"  data-aos-delay="150">
          Các <a className="ab_value">giá trị</a> mà chúng tôi theo đuổi
        </h2>
        <div className="container">
          <div className="row" >
         {data.map((item, index)=> {
          return      <div className="col-4 ab-value-content" data-aos="fade-up" data-aos-delay="250">
          <div className="ab_item_content">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <img src={item.logo} alt={item.slogan}></img>
              <h3 className="minisub-ab-heading">{item.slogan}</h3>
              <p className="minisub-ab-content">
                {item.content}
              </p>
            </div>
          </div>
        </div>
         })}

           
          </div>
        </div>
      </div>
      <div className="ab-mission container">
        <h2 className="text-center ab_value_heading" data-aos="fade-up" data-aos-delay="150">
          <a className="ab_value">Sứ mệnh</a> của chúng tôi
        </h2>
        <div className="ab-mission-content" data-aos="fade-up" data-aos-delay="200">
          <div className="row">
            <div className="col-1 fix-resolution">
              <div
                class="div-linear aos-init aos-animate"
                data-aos="fade-up"
              ></div>
            </div>
            <div className="col-11 ab-mission-subcontent">
              <h3>Chúng tôi tồn tại vì</h3>
              <p>
                Với niềm tin ở “Hòa bình và sự hoàn thiện tiềm năng của con
                người”, đích đến mà AIESEC luôn theo đuổi chính là xây dựng một
                cộng đồng người trẻ Việt có ý thức và hiểu biết về “hòa bình”,
                đồng thời biết hành động vì một thế giới tốt đẹp hơn. Không chỉ
                vậy, AIESEC luôn nỗ lực để xây dựng một thế giới với mỗi ai
                trong chúng ta đều có thể là phiên bản tốt nhất của chính mình.
              </p>
              <h3>Chúng tôi làm gì để thực hiện sứ mệnh của mình</h3>
              <p>
                AIESEC tin rằng “leadership - khả năng lãnh đạo” chính là giải
                pháp cơ bản có thể được phát triển ở bất kỳ ai và ở bất kỳ đâu.
                Với niềm tin ấy, chúng tôi giới thiệu người trẻ đến đa dạng
                những loại trải nghiệm khác nhau. Trong đó, một số trải nghiệm
                sẽ giúp người trẻ kết nối với AIESEC, và một số trải nghiệm khác
                sẽ trực tiếp giúp họ trở thành những nhà lãnh đạo có tác động
                tích cực đến thế giới xung quanh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
