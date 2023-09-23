import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.scss"

export default function Register() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      sdt: Yup.number,
      email: "",
      birthdayDate: Yup.date,
      optionNganh: 2,
      gender: 2,
      linkfb: "",
      optionBan: 2,
      masv: Yup.number,
      tieuban:2,
      reason:"",
      experience:"",
      strengthendWeakness:"",
      visionFuture:""
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Không được bỏ trống"),
      sdt: Yup.number("vui lòng nhập số").required("Không được bỏ trống").moreThan(100000000,"vui lòng nhập đúng").lessThan(1000000000,"vui lòng nhập đúng"),
      email: Yup.string().email("Invalid email").required("Required"),
      linkfb: Yup.string().required("Không được bỏ trống"),
      birthdayDate: Yup.date("vui lòng nhập ngày"),
      masv: Yup.number("vui lòng nhập số").required("Không được bỏ trống").moreThan(10000000,"vui lòng nhập đúng").lessThan(100000000,"vui lòng nhập đúng"),

      reason:Yup.string().required("Không được bỏ trống"),
      experience:Yup.string().required("Không được bỏ trống"),
      strengthendWeakness:Yup.string().required("Không được bỏ trống"),
      visionFuture:Yup.string().required("Không được bỏ trống"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
                          {formik.touched.fullname && formik.errors.fullname ? (
                            <div className="warning_input">{formik.errors.fullname}</div>
                          ) : null}
                          <label className="form-label" htmlFor="fullname">
                            Họ Và Tên
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="sdt"
                            name="sdt"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.sdt}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.sdt && formik.errors.sdt ? (
                            <div className="warning_input" >{formik.errors.sdt}</div>
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
                            <div className="warning_input">Không được bỏ trống</div>
                          ) : null}
                          <label htmlFor="birthdayDate" className="form-label">
                            Birthday
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4">
                        <select
                          className="select form-control-lg"
                          name="gender"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value={1} disabled>
                            Choose option
                          </option>
                          <option value={2}>Man</option>
                          <option value={3}>Woman</option>
                          <option value={4}>Other</option>
                        </select>
                        <label className="form-label select-label">
                          Choose option
                        </label>
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
                          {formik.touched.email && formik.errors.email ? (
                            <div className="warning_input">{formik.errors.email}</div>
                          ) : null}
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            id="linkfb"
                            name="linkfb"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.linkfb}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.linkfb && formik.errors.linkfb ? (
                            <div className="warning_input">{formik.errors.linkfb}</div>
                          ) : null}
                          <label className="form-label" htmlFor="phoneNumber">
                            link facebook
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <select
                          className="select form-control-lg"
                          name="optionNganh"
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

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            id="masv"
                            name="masv"
                            type="number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.masv}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.masv && formik.errors.masv ? (
                            <div className="warning_input">{formik.errors.masv}</div>
                          ) : null}
                          <label className="form-label" htmlFor="masv">
                            Mã sinh viên
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <select
                          className="select form-control-lg"
                          name="optionBan"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value={1} disabled>
                            Chon Ban
                          </option>
                          <option value={2}>Subject 1</option>
                          <option value={3}>Subject 2</option>
                          <option value={4}>Subject 3</option>
                        </select>
                        <label className="form-label select-label">
                          Chọn Ban
                        </label>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <select
                          className="select form-control-lg"
                          name="tieuban"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value={1} disabled>
                            Chon Tieu Ban
                          </option>
                          <option value={2}>Subject 1</option>
                          <option value={3}>Subject 2</option>
                          <option value={4}>Subject 3</option>
                        </select>
                        <label className="form-label select-label">
                        Chon Tieu Ban
                        </label>
                      </div>


                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="reason"
                            name="reason"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.reason}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.reason && formik.errors.reason ? (
                            <div className="warning_input">{formik.errors.reason}</div>
                          ) : null}
                          <label className="form-label" htmlFor="reason">
                            Chia sẻ lý do chọn ban của bạn 
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            id="experience"
                            name="experience"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.experience}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.experience && formik.errors.experience ? (
                            <div className="warning_input">{formik.errors.experience}</div>
                          ) : null}
                          <label className="form-label" htmlFor="experience">
                            Bạn đã có kinh nghiệm về lĩnh vực này chưa
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">

                      <div className="mb-4 pb-2">
                         <textarea class="form-control" id="strengthendWeakness"
                                               
                                                     name="strengthendWeakness"
                                                     onChange={formik.handleChange}
                                                     onBlur={formik.handleBlur}
                                                     value={formik.values.strengthendWeakness}
                         rows="10"></textarea>
                          {formik.touched.strengthendWeakness && formik.errors.strengthendWeakness ? (
                            <div className="warning_input">{formik.errors.strengthendWeakness}</div>
                          ) : null}
                         <label for="strengthendWeakness">Example textarea</label>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="visionFuture"
                            name="visionFuture"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.visionFuture}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.visionFuture && formik.errors.visionFuture ? (
                            <div className="warning_input">{formik.errors.visionFuture}</div>
                          ) : null}
                          <label className="form-label" htmlFor="visionFuture">
                            Chia sẻ mong muốn khi tham gia ISTECH
                          </label>
                        </div>
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
