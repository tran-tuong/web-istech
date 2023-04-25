import React from 'react'
import { useParams } from 'react-router-dom';
import images from "../../assets/images";
import "./FullStack.scss"
export default function FullStack() {
    // const param = useParams();

    // console.log(param);
    // const id = param.id 
  return (
    <div className='container'>
        <section className='Department_Head' style={{
            paddingTop:"70px"
        }}>
            <h3> <span className='pe-4'>{"<"}</span>Department </h3>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='row Department_Head_Content' style={{width:"90%"}}>
                    <div className='col-4 Department_Head_Content_Right'>
                    <img className="img-fluid img_Head_Department" src={images.sliderImg}></img>
                    </div>
                    <div className='col-8 Department_Head_Content_left'>
                        <h1 className=''>Full Stack Dev</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>
            </div>
        </section>
     
    </div>
  )
}
