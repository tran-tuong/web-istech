import React, { createContext } from 'react'
import './Partners.scss';
import { data } from 'jquery';
import Circle from '../../components/Circle';

export const DataContext = createContext();

export default function Partners() {
    data = [
      {
        nameP: "Partner 1",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        nameP: "Partner 2",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        nameP: "Partner 3",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        nameP: "Partner 4",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        nameP: "Partner 5",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        nameP: "Partner 6",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
    ];

    const renderData = () => {
      return data.map((item, index) => (
        <Circle data={item} border partner key={index} />
      ))
    }
    
    return (
      <div className='container department'>
          <div className='department-header'>
            <div className='content-heading'>
              <h1>Partners</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
          </div>
          
          <div className='department-list'>
              {renderData()}
          </div>
      </div>
    )
}
