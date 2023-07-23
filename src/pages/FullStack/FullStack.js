import React from "react";
import { Link, useParams } from "react-router-dom";
import "./FullStack.scss";
import Circle from "../../components/Circle";
import data from "../../Data/Department.json";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../../assets/images/svg";
import SliderCompo from "../../components/Slider";

export default function FullStack() {
    const navigate = useNavigate();

    // lấy giá trị search sau từ department
    const param = useParams();
    const id = param.id;

    if (
        id !== "fullstack" &&
        id !== "data-science" &&
        id !== "media-events" &&
        id !== "game"
    ) {
        return (
            <div>
                <h1>Page không tồn tại</h1>
            </div>
        );
    } else {
        let FullStack = data.filter((item) => item.id === id);
        FullStack = FullStack[0];
        
        let { Department, Des, img, Leader, Members, Mentor } =
            FullStack;
        let skills_image;
        try {
            skills_image = skills.filter((skill) => (id === skill.id))[0][`${id}`];
        } catch (error) {
            skills_image = [];
        }
        return (
            <div className="container">
                <section className="Department_Head">
                    <nav className="breadcrumb">
                        <ul className="list-unstyled">
                            <li>
                                <Link className="item-link" to="/">
                                    <FontAwesomeIcon icon={faHouse} />
                                </Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link className="item-link" to="/departments">
                                    Departments
                                </Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link className="item-link department-active" to={`/departments/${Department}`}>
                                    {Department}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="d-flex justify-content-center align-items-center">
                        <div className="row Department_Head_Content" data-aos="fade-up">
                            <div className="col-12 col-sm-4 Department_Head_Content_Right">
                                <img
                                    className="img-fluid img_Head_Department"
                                    src={img}
                                    alt={Department}
                                ></img>
                            </div>

                            <div className="col-12 col-sm-6 Department_Head_Content_left">
                                <h1 className="">{Department}</h1>
                                <p>{Des}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="Skill_Knowledge container" data-aos="fade-up">
                    <h1>Skills & Knowledge</h1>
                    <div className="row">
                        <SliderCompo skills={skills_image} />
                    </div>
                </section>

                <section className="Department_Members">
                    <h1 className="h1Department">Members</h1>
                    <div className="Department_Members_Content text-center" >
                        <Circle data={Leader} />
                        <div className="row" style={{ paddingTop: "40px" }}>
                            {Members.map((item, key) => {
                                return (
                                    <div
                                        className="col-6 col-md-4 col-lg-3"
                                        key={key} data-aos="fade-up"
                                    >
                                        <Circle data={item}></Circle>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {id === 'fullstack' && (
                    <section className="Department_Mentors">
                    <h1 className="h1Department">Mentor</h1>
                    <div className="Department_Mentor_Content text-center">
                        <div className="row">
                            {Mentor.map((item, key) => {
                                return (
                                    <div
                                        className="col-6 col-md-4 col-lg-3"
                                        key={key} data-aos="fade-up"
                                    >
                                        <Circle data={item}></Circle>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                )}
            </div>
        );
    }
    //
}
