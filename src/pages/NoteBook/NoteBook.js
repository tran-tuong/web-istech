import React from 'react'
import "./NoteBook.scss"
import { NavLink } from 'react-router-dom'

import data from "../../Data/NoteBook.json"
export default function NoteBook() {

    console.log(data);

  return (
    <div className='container'>
        <div className='row headnotebook' style={{
            paddingTop:"50px"
        }}>
            <div className='col-9'>
            <h1>
            Những điều sinh viên cần biết
            </h1>
            </div>
            <div className='col-3'>
<div className="input-group ">
  <input type="text" className="form-control p-3" placeholder="search" />
 
</div>

            </div>



        </div>

        <div className='notebook_content'style={{
            paddingTop:"50px"
        }}>
            <div className='row' style={{
                gap:"30px",
                justifyContent:"center"
            }}>
                {data.map((item,index)=>{
                    return <div className='col-5 notebook_content_item' key={index}>
                    <NavLink to='/' >
                        <h2>
                        {item.title.length > 50 ? <span>{item.title.slice(0,50)} ...</span> : <span>{item.title }</span> }
                        </h2>
                       <p>Cập nhật :  {item.capnhat}</p>
                    </NavLink>
                </div>
                })}

            </div>
        </div>
    </div>
  )
}
