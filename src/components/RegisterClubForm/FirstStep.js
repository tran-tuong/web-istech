import React from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

function FirstStep({ formData, setFormData }) {
    const formik = useFormik({
        initialValues: {
            full_name: ""
        },
        validationSchema: Yup.object({
            full_name: Yup.string().required("Không được bỏ trống"),
            phone: Yup.number("vui lòng nhập số")
                .required("Không được bỏ trống")
                .moreThan(100000000, "vui lòng nhập đúng")
                .lessThan(1000000000, "vui lòng nhập đúng"),
            email: Yup.string().email("Invalid email").required("Required"),
            facebook_account: Yup.string().required("Không được bỏ trống"),
            dob: Yup.date("vui lòng nhập ngày"),
            student_id: Yup.number("vui lòng nhập số")
                .required("Không được bỏ trống")
                .moreThan(10000000, "vui lòng nhập đúng")
                .lessThan(100000000, "vui lòng nhập đúng"),
        }),
    });

    return (
        <div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="full_name">
                            Họ và tên của bạn là
                        </label>
                        <input
                            type="text"
                            id="full_name"
                            name="full_name"
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    full_name: event.target.value,
                                })
                            }
                            onBlur={formik.handleBlur}
                            value={formData.full_name}
                            className="form-control form-control-lg"
                        />
                        {formik.touched.full_name && formData.full_name === "" ? (
                            <div className="warning_input">
                                {formik.errors.full_name}
                            </div>
                        ) : null}
                    </div>
                </div>
    
                <div className="col-md-6 mb-4">
                    <div className="form-outline datepicker w-100">
                        <label htmlFor="dob" className="form-label">
                            Ngày sinh
                        </label>
                        <input
                            type="date"
                            className="form-control form-control-lg"
                            id="dob"
                            name="dob"
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    dob: event.target.value,
                                })
                            }
                            onBlur={formik.handleBlur}
                            value={formData.dob}
                        />
                        {formik.touched.dob && !formData.dob ? (
                            <div className="warning_input">Không được bỏ trống</div>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <label className="form-label select-label">Giới tính</label><br/>
                    <select
                        className="select form-control-lg"
                        name="gender"
                        onChange={(event) =>
                            setFormData({ ...formData, gender: event.target.value })
                        }
                        onBlur={formik.handleBlur}
                        value={formData.gender}
                    >
                        <option value="">-- Chọn 1 lựa chọn --</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHERS">Others</option>
                    </select>
                </div>
    
                <div className="col-md-6 mb-4">
                    <label className="form-label select-label">
                        Bạn biết ISTECH qua đâu
                    </label><br/>
                    <select
                        className="select form-control-lg"
                        name="know_istech_through"
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                know_istech_through: event.target.value,
                            })
                        }
                        onBlur={formik.handleBlur}
                        value={formData.know_istech_through}
                    >
                        <option value="">-- Chọn 1 lựa chọn --</option>
                        <option value="GMAIL">Gmail</option>
                        <option value="FACEBOOK">Facebook</option>
                        <option value="ADMISSIONS_DAY">Ngày hội tuyển sinh</option>
                        <option value="UPPERCLASSMEN">Các anh/chị khóa trên</option>
                        <option value="FRIEND">Bạn bè</option>
                    </select>
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <div className="form-outline">
                    <label className="form-label" htmlFor="email">
                        Email của bạn là
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                email: event.target.value,
                            })
                        }
                        onBlur={formik.handleBlur}
                        value={formData.email}
                        className="form-control form-control-lg"
                    />
                    {formik.touched.email && formData.email === "" ? (
                        <div className="warning_input">
                            {formik.errors.email}
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <div className="form-outline">
                    <label className="form-label" htmlFor="phone">
                        Số Điện Thoại
                    </label>
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                phone: event.target.value,
                            })
                        }
                        onBlur={formik.handleBlur}
                        value={formData.phone}
                        className="form-control form-control-lg"
                    />
                    {formik.touched.phone && !formData.phone ? (
                        <div className="warning_input">
                            {formik.errors.phone}
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                    <label className="form-label" htmlFor="phoneNumber">
                        Link Facebook
                    </label>
                    <input
                        id="facebook_account"
                        name="facebook_account"
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                facebook_account: event.target.value,
                            })
                        }
                        onBlur={formik.handleBlur}
                        value={formData.facebook_account}
                        className="form-control form-control-lg"
                    />
                    {formik.touched.facebook_account && formData.facebook_account === "" ? (
                        <div className="warning_input">
                            {formik.errors.facebook_account}
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <label className="form-label select-label">Ngành học</label><br/>
                    <select
                        className="select form-control-lg"
                        name="major"
                        onChange={(event) =>
                            setFormData({ ...formData, major: event.target.value })
                        }
                        onBlur={formik.handleBlur}
                        value={formData.major}
                    >
                        <option value="">-- Chọn 1 lựa chọn --</option>
                        <option value="MIS">MIS</option>
                        <option value="ICE">ICE</option>
                        <option value="AIT">AIT</option>
                    </select>
                </div>
    
                <div className="col-md-6 mb-4">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="student_id">
                            Mã sinh viên
                        </label>
                        <input
                            id="student_id"
                            name="student_id"
                            type="number"
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    student_id: event.target.value,
                                })
                            }
                            onBlur={formik.handleBlur}
                            value={formData.student_id}
                            className="form-control form-control-lg"
                        />
                        {formik.touched.student_id && formData.student_id === "" ? (
                            <div className="warning_input">
                                {formik.errors.student_id}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstStep;
