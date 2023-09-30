import React, { useContext, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.scss";
import axios from "axios";
import FirstStep from "../../components/RegisterClubForm/FirstStep";
import SecondStep from "../../components/RegisterClubForm/SecondStep";
import ThirdStep from "../../components/RegisterClubForm/ThirdStep";
import FourStep from "../../components/RegisterClubForm/FourStep";
import { Stepper, StepLabel, Step, Button } from "@mui/material";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [isSummitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        generation: "Gen 5",
        full_name: "",
        phone: "",
        email: "",
        know_istech_through: "",
        dob: "",
        major: "",
        gender: "",
        facebook_account: "",
        student_id: "",
        department_registered: "",
        position_in_department: "",
        position_experiences: true,
        reason_apply_department: "",
        other_interested_department: false,
        strength: "",
        weakness: "",
        candidate_sharing: "",
    });

    const isFormValid = () => {
        return Object.values(formData).every((value) => value !== "");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isFormValid()) {
            if (formData?.other_interested_department === "0") {
                const {
                    department_registered_2,
                    position_experiences_2,
                    position_in_department_2,
                    reason_apply_department_2,
                    ...values
                } = formData;

                const newValues = {
                    ...values,
                    student_id: values.student_id.toString(),
                    position_experiences: values.position_experiences === "true",
                    other_interested_department:
                        values.other_interested_department === "true",
                };
                console.log(newValues);
                const result = await axios({
                    url: "http://localhost:3001/candidate/register",
                    method: "POST",
                    withCredentials: true,
                    data: newValues,
                });
                let a = 201;
                if (result.status === 201) {
                    // swal("Good job!", "Bạn đã đăng ký thành công", "success").then(
                    //     (value) => navigate("/")
                    // );
                    setIsSubmitted(true);
                } else {
                    swal(
                        "Bad job!",
                        "Có lỗi xảy ra! Kiểm tra lại những dữ liệu điền vào",
                        "error"
                    );
                }
            } else {
                const newValues = {
                    ...formData,
                    student_id: formData.student_id.toString(),
                    position_experiences:
                        formData.position_experiences === "true",
                    other_interested_department:
                        formData.other_interested_department === "true",
                };
                console.log(newValues);
                const result = await axios({
                    url: "http://localhost:3001/candidate/register",
                    method: "POST",
                    withCredentials: true,
                    data: newValues,
                });
                const a = 201;
                if (a === 201) {
                    // swal("Good job!", "Bạn đã đăng ký thành công", "success")
                    //     .then(value => navigate('/'));
                    setIsSubmitted(true);
                } else {
                    swal("Bad job!", "Có lỗi xảy ra! Kiểm tra lại những dữ liệu điền vào", "error");
                }
            }
        } else {
            swal("Bad job!", "Vui lòng điền đầy đủ thông tin", "error").then(
                () => window.location.reload()
            );
        }
    };

    const formTitles = [
        "Thông tin cá nhân",
        "Nguyện vọng ứng tuyển",
        "Câu hỏi cá nhân",
    ];

    const pageDisplay = () => {
        if (page === 0) {
            return <FirstStep formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <SecondStep formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <ThirdStep formData={formData} setFormData={setFormData} />;
        } else {
            return <FourStep formData={formData} setFormData={setFormData} />;
        }
    };

    const stepStyle = {
        fontSize: "2rem",
        "& .MuiStep-horizontal": {
            "& .MuiStepLabel-root": {
                "& .MuiStepLabel-iconContainer": {
                    "& .MuiSvgIcon-root": {
                        width: "40px",
                        height: "40px",
                    },
                },
            },
            "& .MuiStepLabel-labelContainer": {
                "& .MuiStepLabel-label": {
                    fontSize: "1.6rem",
                },
            },
        },
        "& .MuiStep-root": {
            "& .MuiStepConnector-root": {
                top: "21px",
                right: "calc(50% + 35px)",
                left: "calc(-50% + 35px)",
                "& .MuiStepConnector-line": {},
            },
        },
    };

    return (
        <div className="register_form">
            <section className="vh-100 gradient-custom ">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div
                                className="card shadow-2-strong card-registration"
                                style={{ borderRadius: 15 }}
                            >
                                <div className="card-body p-4 p-md-5 register-wrapper">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                                        Registration Form
                                    </h3>
                                    {isSummitted ? (
                                        <FourStep />
                                    ) : (
                                        <>
                                            <Stepper
                                                activeStep={page}
                                                alternativeLabel
                                                sx={stepStyle}
                                            >
                                                {formTitles.map((label) => (
                                                    <Step key={label}>
                                                        <StepLabel>
                                                            {label}
                                                        </StepLabel>
                                                    </Step>
                                                ))}
                                            </Stepper>
                                            <form
                                                onSubmit={handleSubmit}
                                                className="register-form"
                                            >
                                                {pageDisplay()}

                                                <div className="btn-register-wrapper">
                                                    <Button
                                                        hidden={
                                                            page === 0
                                                                ? true
                                                                : false
                                                        }
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => {
                                                            setPage(
                                                                (currPage) =>
                                                                    currPage - 1
                                                            );
                                                        }}
                                                    >
                                                        Back
                                                    </Button>
                                                    <Button
                                                        hidden={
                                                            page ===
                                                            formTitles.length -
                                                                1
                                                        }
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => {
                                                            setPage(
                                                                (currPage) =>
                                                                    currPage + 1
                                                            );
                                                        }}
                                                    >
                                                        Next
                                                    </Button>
                                                    {page ===
                                                        formTitles.length -
                                                            1 && (
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            type="Submit"
                                                        >
                                                            Submit
                                                        </Button>
                                                    )}
                                                </div>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
