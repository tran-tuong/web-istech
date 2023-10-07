import React, { useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

function SecondStep({ formData, setFormData }) {
    const [selectedDepartment, setSelectedDepartment] = useState(null);
   
    const departments = [
        {
            department_name: "Fullstack",
            positions: ["UI/UX", "Frontend", "Backend"],
        },
        {
            department_name: "Data Science",
            positions: ["Data Science"],
        },
        {
            department_name: "Game Dev",
            positions: ["Game Designer", "Game Developer", "Game UX/UI"],
        },
        {
            department_name: "Media & Event",
            positions: ["Designers", "Content", "Photographer", "Event", "PR"],
        },
        {
            department_name: "HR",
            positions: ["HR"],
        },
    ];
    const anotherDepartments = departments.filter(
        (item) => formData.department_registered !== item.department_name
    );

    const department = departments.find(
        (item) => formData.department_registered === item.department_name
    );

    const formik = useFormik({
        initialTouched: {
            dob: "",
        },
        validationSchema: Yup.object({
            reason_apply_department: Yup.string().required(
                "Không được bỏ trống"
            ),
        }),
    });

    return (
        <div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <label className="form-label select-label">
                        Bạn muốn ứng tuyển vào ban nào
                    </label>
                    <select
                        className="select form-control-lg"
                        name="department_registered"
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                department_registered: event.target.value,
                            })
                        }
                        onBlur={formik.handleBlur}
                        value={formData.department_registered}
                    >
                        <option value="">-- Chọn 1 lựa chọn --</option>
                        {departments.map((item, index) => (
                            <option key={index} value={item.department_name}>
                                {item.department_name}
                            </option>
                        ))}
                    </select>
                </div>
    
                <div className="col-md-6 mb-4 pb-2">
                    <label className="form-label select-label">
                        Mảng mà bạn muốn ứng tuyển là
                    </label>
                    <select
                        className="select form-control-lg"
                        name="position_in_department"
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                position_in_department: event.target.value,
                            })
                        }
                        onBlur={formik.handleBlur}
                        value={formData.position_in_department}
                    >
                        <option value="">-- Chọn 1 lựa chọn --</option>
                        {formData.department_registered && department.positions.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <label className="form-label select-label">
                    Bạn đã có kinh nghiệm trong lĩnh vực này chưa?
                </label>
                <select
                    className="select form-control-lg"
                    name="position_experiences"
                    onChange={(event) =>
                        setFormData({
                            ...formData,
                            position_experiences: event.target.value,
                        })
                    }
                    onBlur={formik.handleBlur}
                    value={formData.position_experiences}
                >
                    <option value="">-- Chọn 1 lựa chọn --</option>
                    <option value={true}>Có</option>
                    <option value={false}>Không</option>
                </select>
            </div>

            <div className="col-md-6 mb-4">
                <div className="form-outline">
                    <label
                        className="form-label"
                        htmlFor="reason_apply_department"
                    >
                        Chia sẻ về lý do chọn ban của bạn
                    </label>
                    <input
                        type="text"
                        id="reason_apply_department"
                        name="reason_apply_department"
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                reason_apply_department: event.target.value,
                            })
                        }
                        onBlur={formik.handleBlur}
                        value={formData.reason_apply_department}
                        className="form-control form-control-lg"
                    />
                    {formik.touched?.reason_apply_department &&
                    formData.reason_apply_department === "" ? (
                        <div className="warning_input">
                            {formik.errors.reason_apply_department}
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <label className="form-label select-label">
                    Bạn có nguyện vọng ứng tuyển vào ban khác không?
                </label>
                <select
                    className="select form-control-lg"
                    name="other_interested_department"
                    onChange={(event) => {
                        setFormData({
                            ...formData,
                            other_interested_department: event.target.value,
                        });
                    }}
                    onBlur={formik.handleBlur}
                    value={formData.other_interested_department}
                >
                    <option value="">-- Chọn 1 lựa chọn --</option>
                    <option value={1}>Có</option>
                    <option value={0}>Không</option>
                </select>
            </div>

            {formData.other_interested_department === '1' && (
                <>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label className="form-label select-label">
                                Bạn muốn ứng tuyển vào ban nào
                            </label>
                            <select
                                className="select form-control-lg"
                                name="department_registered_2"
                                onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                department_registered_2: event.target.value,
                                            })
                                }
                                onBlur={formik.handleBlur}
                                value={formData.department_registered_2}
                            >
                                <option value="">-- Chọn 1 lựa chọn --</option>
                                {anotherDepartments.map((item, index) => (
                                    <option
                                        key={index}
                                        value={item.department_name}
                                    >
                                        {item.department_name}
                                    </option>
                                ))}
                            </select>
                        </div>
    
                        <div className="col-md-6 mb-4 pb-2">
                            <label className="form-label select-label">
                                Mảng mà bạn muốn ứng tuyển là
                            </label>
                            <select
                                className="select form-control-lg"
                                name="position_in_department_2"
                                onChange={(event) =>
                                    setFormData({
                                        ...formData,
                                        position_in_department_2:
                                            event.target.value,
                                    })
                                }
                                onBlur={formik.handleBlur}
                                value={formData.position_in_department_2}
                            >
                                <option value="">-- Chọn 1 lựa chọn --</option>
                                {formData.department_registered_2 && departments.find(item => item.department_name === formData?.department_registered_2)?.positions.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <label className="form-label select-label">
                            Bạn đã có kinh nghiệm trong lĩnh vực này chưa?
                        </label>
                        <select
                            className="select form-control-lg"
                            name="position_experiences_2"
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    position_experiences_2: event.target.value,
                                })
                            }
                            onBlur={formik.handleBlur}
                            value={formData.position_experiences_2}
                        >
                            <option value="">-- Chọn 1 lựa chọn --</option>
                            <option value={true}>Có</option>
                            <option value={false}>Không</option>
                        </select>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label
                                className="form-label"
                                htmlFor="reason_apply_department"
                            >
                                Chia sẻ về lý do chọn ban của bạn
                            </label>
                            <input
                                type="text"
                                id="reason_apply_department"
                                name="reason_apply_department_2"
                                onChange={(event) =>
                                    setFormData({
                                        ...formData,
                                        reason_apply_department_2:
                                            event.target.value,
                                    })
                                }
                                onBlur={formik.handleBlur}
                                value={formData.reason_apply_department_2}
                                className="form-control form-control-lg"
                            />
                            {formik.touched?.reason_apply_department_2 &&
                            formData.reason_apply_department_2 === "" ? (
                                <div className="warning_input">
                                    {formik.errors.reason_apply_department}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default SecondStep;
