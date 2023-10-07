import React from "react";
import "./About.scss";
import data from "../../Data/About.json";
import images from "../../assets/images";
export default function About() {
  const iconCard = [images.star, images.circle, images.star2];

  return (
    <div className="about">
      <div className="container">
        <div class="row heading-div">
          <div
            className="col-12 content-heading"
            data-aos="fade-up"
            data-aos-delay="70"
          >
            <h1>Về ISTECH</h1>
            <p>
              Thành lập từ năm 2020, ISTECH là câu lạc bộ học thuật hàng đầu của
              Trường Quốc tế - ĐHQGHN, giúp các bạn trẻ đam mê công nghệ phát
              triển, định hướng tương lai trong kỷ nguyên công nghệ mới.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2
          className="text-center ab_value_heading"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Giá trị ISTECH hướng tới
        </h2>
        <div className="container">
          <div className="row">
            {data.map((item, index) => {
              return (
                <div
                  className="col-4 ab-value-content"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <div className="ab_item_content">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                      <img src={iconCard[index]} alt={item.slogan} />
                      <h3 className="minisub-ab-heading">{item.slogan}</h3>
                      <span className="minisub-ab-content">{item.content}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container ab-mission">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <h2
              className="text-center ab_value_heading"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Sứ mệnh mà chúng tớ theo đuổi
            </h2>
            <div
              className="ab-mission-content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="ab-mission-subcontent">
                <p>
                  ISTECH luôn mong muốn xây dựng một cộng đồng vững mạnh dành
                  cho tất cả các bạn sinh viên đam mê công nghệ thông tin. Từ
                  đó, chúng tớ sẽ giúp bạn sẽ có một nền tảng vững chắc để bước
                  vào kỷ nguyên công nghệ mới như hiện nay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
