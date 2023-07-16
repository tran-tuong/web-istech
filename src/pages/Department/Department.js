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
        image: "https://cdn.dribbble.com/users/763363/screenshots/3557947/attachments/791767/fullstack-logo-light.png?compress=1&resize=400x300&vertical=center"
      },
      {
        path: "data-science",
        name: "Data Science",
        image: "https://previews.123rf.com/images/essaphear/essaphear1709/essaphear170900001/86808937-data-science-logo-icon-design-vector.jpg"
      },
      {
        path: "game",
        name: "Game Dev",
        image: "https://kenh14cdn.com/thumb_w/660/2019/8/26/photo-1-1566826524824600913081.jpg"
      },
      {
        path: "media-events",
        name: "Media & Events",
        image: "https://kenh14cdn.com/thumb_w/660/2019/8/26/photo-1-1566826524824600913081.jpg"
      },
    ];

    const renderData = () => {
      return data.map((item, index) => (
        <Link to={`/departments/${item.path}`} className='department-link' key={index}><Circle data={item} border /></Link>
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
