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
        image: "https://i.pinimg.com/564x/48/99/1f/48991f90e9a0eed6f972f7c310bdd3e0.jpg"
      },
      {
        path: "media-events",
        name: "Media & Events",
        image: "https://i.pinimg.com/474x/83/f3/22/83f322ad7f8a3122b56d49afe20b1400.jpg"
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
              <p>We are aim to develop 4 field of Software Engineering</p>
            </div>
          </div>
          
          <div className='department-list'>
              {renderData()}
          </div>
      </div>
    )
}
