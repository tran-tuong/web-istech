import React, { createContext } from 'react'
import './Department.scss';
import { Link } from 'react-router-dom';
import { data } from 'jquery';
import Circle from '../../components/Circle';

export const DataContext = createContext();

export default function Department() {
    data = [
      {
        path: "fullstack",
        name: "Fullstack Dev",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        path: "data-science",
        name: "Data Science",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        path: "game",
        name: "Game Dev",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
      {
        path: "media-events",
        name: "Media & Events",
        image: "https://we25.vn/media2018/Img_News/2022/05/10/tommy-shelby-cuoi-cung-co-nen-chet-trong-peaky-blinders_20220510084617.jpeg"
      },
    ];

    const renderData = () => {
      return data.map((item, index) => (
        <Link to={`/departments/${item.path}`}><Circle data={item} border key={index} /></Link>
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
