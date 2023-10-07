import React, { createContext } from "react";
import "./Partners.scss";
import { data } from "jquery";
import Circle from "../../components/Circle";

export const DataContext = createContext();

export default function Partners() {
  data = [
    {
      nameP: "FPT Software",
      image: "https://i.postimg.cc/MHzjdMrX/fpt.png",
      link: "https://fptsoftware.com/",
    },
    {
      nameP: "Viettel Hightech",
      image: "https://i.postimg.cc/hjWmQ3LL/viettel.jpg",
      link: "https://viettelhightech.vn/",
    },
    {
      nameP: "Trường Quốc tế",
      image: "https://i.postimg.cc/1R0GwPYf/internationalSchool.jpg",
      link: "https://www.is.vnu.edu.vn/",
    },
    {
      nameP: "Hitachi",
      image: "https://i.postimg.cc/Pq8Zxkwf/hitachi.jpg",
      link: "https://www.hitachi.asia/vn/",
    },
    {
      nameP: "Momo",
      image: "https://i.postimg.cc/8PP6vv60/momo.png",
      link: "https://momo.vn/",
    },
    {
      nameP: "Mobion",
      image: "https://i.postimg.cc/8zYMNCsn/mobieon.png",
      link: "http://mobion.vn/",
    },
    {
      nameP: "Junction Vietnam",
      image: "https://i.postimg.cc/cHRnRMhV/junction.jpg",
      link: "https://hanoi.hackjunction.com/",
    },
    {
      nameP: "Postive Thinking",
      image: "https://i.postimg.cc/8PtLX4GG/positive-Thinking.png",
      link: "https://positivethinking.tech/",
    },
    {
      nameP: "AIESEC",
      image: "https://i.postimg.cc/8zcM2vk6/aiesec.png",
      link: "https://aiesec.org/",
    },
  ];

  const renderData = () => {
    return data.map((item, index) => {
      return <Circle data={item} partner key={index} />;
    });
  };

  return (
    <div className="container partners">
      <div className="partners-header">
        <div className="content-heading">
          <h1>Đối tác</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
      </div>

      <div className="partners-list">{renderData()}</div>
    </div>
  );
}
