import React, { createContext } from 'react'
import './Department.scss';
import { useParams } from 'react-router-dom';
import { data } from 'jquery';
import Circle from '../../components/Circle';

export const DataContext = createContext();

export default function Department() {
    // const param = useParams();

    // console.log(param);
    // const id = param.id 
    data = [
      {
        name: "Trung",
        class_id: "ICE2021A",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        name: "Trung 1",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        name: "Trung 2",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        name: "Trung 3",
        class_id: "ICE2021A",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
    ];

    const renderData = () => {
      return data.map((item, index) => (
        <Circle data={item} border key={index} />
      ))
    }
    
    return (
      <div className='container department'>
          <div className='department-header'>
            <div className='content-heading'>
              <h1>Departments</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
          </div>
          
          <div className='department-list'>
              {renderData()}
          </div>
      </div>
    )
}
