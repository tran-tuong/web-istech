import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      sdt:"",
      email: "",
      birthdayDate:Yup.date,
      optionNganh:2,
      gender:"option2"
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Không được bỏ trống"),
      optionNganh:Yup.string().required("Require"),
      sdt:Yup.string().required("Không được bỏ trống").min(10,"nhập lại").max(10,"nhập lại"),
      email: Yup.string().email('Invalid email').required('Required'),
      gender:Yup.string().required()
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullname}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.fullname &&
                          formik.errors.fullname ? (
                            <div>{formik.errors.fullname}</div>
                          ) : null}
                          <label className="form-label" htmlFor="fullname">
                            Họ Và Tên
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="sdt"
                            name="sdt"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.sdt}
                            className="form-control form-control-lg"
                          />
                            {formik.touched.sdt &&
                          formik.errors.sdt ? (
                            <div>{formik.errors.sdt}</div>
                          ) : null}
                          <label className="form-label" htmlFor="sdt">
                            Số Điện Thoại
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="date"
                            className="form-control form-control-lg"
                            id="birthdayDate"
                            name="birthdayDate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.birthdayDate}
                          />
                                          {formik.touched.birthdayDate &&
                          formik.errors.birthdayDate ? (
                            <div>{formik.errors.birthdayDate}</div>
                          ) : null}
                          <label htmlFor="birthdayDate" className="form-label">
                            Birthday
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4"
      
                      >
                        <h6 className="mb-2 pb-1">Gender: </h6>
                        <div className="form-check form-check-inline" >
                          <input
                            className="form-check-input"
                            type="radio"
                            id="gender"
                            name="gender"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.gender}
                            defaultValue="option1"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="gender"
                            name="gender"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.gender}
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="gender"
                            name="gender"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.gender}
                            defaultValue="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="form-control form-control-lg"
                          />
                                  {formik.touched.email &&
                          formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                          ) : null}
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <select className="select form-control-lg" 
                              name="birthdayDate"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              
                        >
                          <option value={1} disabled>
                            Choose option
                          </option>
                          <option value={2}>Subject 1</option>
                          <option value={3}>Subject 2</option>
                          <option value={4}>Subject 3</option>
                        </select>
                        <label className="form-label select-label">
                          Choose option
                        </label>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        defaultValue="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
