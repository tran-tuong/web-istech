import React from 'react'
import { Link, useParams } from 'react-router-dom';
import images from "../../assets/images";
import "./FullStack.scss";
import Circle from '../../components/Circle';
import data from "../../Data/Department.json"
import { Navigate,useNavigate } from 'react-router-dom';
export default function FullStack() {
    const navigate = useNavigate();

    // lấy giá trị search sau từ department
    const param = useParams();
    const id = param.id 

    if(id !== "fullstack" && id !== "data-science" && id !== "media-events" && id !== "game" ){
        return(
            <div>
                <h1>Page không tồn tại</h1>
            </div>
        )
    }else{
        let FullStack = data.filter((item) => item.id===id);
        FullStack = FullStack[0]
        console.log("hahah",FullStack);
        console.log(FullStack.length);
        let {Department,Des,img,listSkill,Leader,Members,Mentor} = FullStack;
      return (
        <div className='container'>
            <section className='Department_Head'>
                <h3> <span className='pe-4'>{"<"}</span>Department </h3>
    
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='row Department_Head_Content'>
                        <div className='col-12 col-sm-4 Department_Head_Content_Right'>
                        <img className="img-fluid img_Head_Department" src={img}></img>
                        </div>
    
                        <div className='col-12 col-sm-8 Department_Head_Content_left'>
                            <h1 className=''>{Department}</h1>
                            <p>{Des}</p>
                        </div>
                    </div>
                </div>
            </section>
    
            <section className='Skill_Knowledge container'>
                <h1>Skills & Knowledge</h1>
                <div className='row'>
                    <div className='col-6 col-sm-3 skill_content'>
                        <img src={images.sliderImg} alt="haha" className='img-fluid'/>
                    </div>
                    <div className='col-6 col-sm-3 skill_content'>
                        <img src={images.sliderImg} alt="haha" className='img-fluid'/>
                    </div>
                    <div className='col-6 col-sm-3 skill_content'>
                        <img src={images.sliderImg} alt="haha" className='img-fluid'/>
                    </div>
                    <div className='col-6 col-sm-3 skill_content'>
                        <img src={images.sliderImg} alt="haha" className='img-fluid'/>
                    </div>
                </div>
            </section>
    
            <section className='Department_Members'>
            <h1 className='h1Department'>Members</h1>
            <div className='Department_Members_Content text-center'>
                <Circle data={Leader}/>
                <div className='row' style={{paddingTop:"40px"}}>
                    {
                        Members.map((item,key)=>{
                            return <div className='col-6 col-md-4 col-lg-3' key={key}> 
                                    <Circle data={item}></Circle>
                            </div>
                        })
                    }
                </div>
    
            </div>
    
            </section>       

            <section className='Department_Mentors'>
            <h1 className='h1Department'>Mentor</h1>
            <div className='Department_Mentor_Content text-center'>
                
                <div className='row'>
                    {
                        Mentor.map((item,key)=>{
                            return <div className='col-6 col-md-4 col-lg-3' key={key}> 
                                    <Circle data={item}></Circle>
                            </div>
                        })
                    }
                </div>
    
            </div>
    
            </section>       
        </div>
      )
    }
    //
 

}
