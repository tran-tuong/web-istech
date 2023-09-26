import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.scss"
import axios from "axios";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      generation: "Gen 5",
      full_name: "",
      phone: Yup.number,
      email: "",
      know_istech_through: "",
      dob: Yup.date,
      major: "MIS",
      gender: "MALE",
      facebook_account: "",
      student_id: Yup.number,
      department_registered: "Fullstack",
      position_in_department: "UI/UX",
      position_experiences: true,
      reason_apply_department: "",
      other_interested_department: false,
      strength: "",
      weakness: "",
      candidate_sharing: ""
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Không được bỏ trống"),
      phone: Yup.number("vui lòng nhập số").required("Không được bỏ trống").moreThan(100000000,"vui lòng nhập đúng").lessThan(1000000000,"vui lòng nhập đúng"),
      email: Yup.string().email("Invalid email").required("Required"),
      facebook_account: Yup.string().required("Không được bỏ trống"),
      dob: Yup.date("vui lòng nhập ngày"),
      student_id: Yup.number("vui lòng nhập số").required("Không được bỏ trống").moreThan(10000000,"vui lòng nhập đúng").lessThan(100000000,"vui lòng nhập đúng"),

      reason_apply_department:Yup.string().required("Không được bỏ trống"),
      strength:Yup.string().required("Không được bỏ trống"),
      weakness:Yup.string().required("Không được bỏ trống"),
      candidate_sharing:Yup.string().required("Không được bỏ trống"),
    }),
    onSubmit: async (values) => {
      

      values.phone.toString();
      values.student_id.toString();

      const newValues = {
        ...values,
        phone: "0" + values.phone.toString(),
        student_id: values.student_id.toString(),
        position_experiences: values.position_experiences === 'true',
        other_interested_department: values.other_interested_department === 'true'
      }
      console.log(newValues);
      const result = await axios(
        {
          url: 'http://localhost:3001/candidate/register',
          method: 'POST',
          withCredentials: true,
          data: newValues
        }
      );

      console.log(result);

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
                            id="full_name"
                            name="full_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.full_name}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.full_name && formik.errors.full_name ? (
                            <div className="warning_input">{formik.errors.full_name}</div>
                          ) : null}
                          <label className="form-label" htmlFor="full_name">
                            Họ Và Tên
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="phone"
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.phone && formik.errors.phone ? (
                            <div className="warning_input" >{formik.errors.phone}</div>
                          ) : null}
                          <label className="form-label" htmlFor="phone">
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
                            id="dob"
                            name="dob"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dob}
                          />
                          {formik.touched.dob &&
                          formik.errors.dob ? (
                            <div className="warning_input">Không được bỏ trống</div>
                          ) : null}
                          <label htmlFor="dob" className="form-label">
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
                          <option value="MALE">Man</option>
                          <option value="FEMALE">Woman</option>
                          <option value="OTHERS">Other</option>
                        </select>
                        <label className="form-label select-label">
                          Choose option
                        </label>
                      </div>

                      <div className="col-md-6 mb-4">
                        <select
                          className="select form-control-lg"
                          name="know_istech_through"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value={1} disabled>
                            Choose option
                          </option>
                          <option value="GMAIL">Man</option>
                          <option value="FACEBOOK">Woman</option>
                          <option value="ADMISSIONS_DAY">Other</option>
                          <option value="UPPERCLASSMEN">Upperclassmen</option>
                          <option value="FRIEND">Friend</option>
                        </select>
                        <label className="form-label select-label">
                          Biết isech qua đâu????
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
                            id="facebook_account"
                            name="facebook_account"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.facebook_account}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.facebook_account && formik.errors.facebook_account ? (
                            <div className="warning_input">{formik.errors.facebook_account}</div>
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
                          name="major"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value="MIS">Subject 1</option>
                          <option value="ICE">Subject 2</option>
                          <option value="AIT">Subject 3</option>
                        </select>
                        <label className="form-label select-label">
                          Choose option
                        </label>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            id="student_id"
                            name="student_id"
                            type="number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.student_id}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.student_id && formik.errors.student_id ? (
                            <div className="warning_input">{formik.errors.student_id}</div>
                          ) : null}
                          <label className="form-label" htmlFor="student_id">
                            Mã sinh viên
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <select
                          className="select form-control-lg"
                          name="department_registered"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value="Fullstack">Fullstack</option>
                          <option value="Data Science">Subject 2</option>
                          <option value="Media">Subject 3</option>
                        </select>
                        <label className="form-label select-label">
                          Chọn Ban
                        </label>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <select
                          className="select form-control-lg"
                          name="position_in_department"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value="UI/UX">UI/UX</option>
                          <option value="FE">Subject 2</option>
                          <option value="BE">Subject 3</option>
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
                            id="reason_apply_department"
                            name="reason_apply_department"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.reason_apply_department}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.reason_apply_department && formik.errors.reason_apply_department ? (
                            <div className="warning_input">{formik.errors.reason_apply_department}</div>
                          ) : null}
                          <label className="form-label" htmlFor="reason_apply_department">
                            Chia sẻ lý do chọn ban của bạn 
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <select
                          className="select form-control-lg"
                          name="position_experiences"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value={true}>Có</option>
                          <option value={false}>Không</option>
                        </select>
                        <label className="form-label select-label">
                        Có kinh nghiệm chưa???
                        </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <select
                          className="select form-control-lg"
                          name="other_interested_department"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value={true}>Có</option>
                          <option value={false}>Không</option>
                        </select>
                        <label className="form-label select-label">
                          Có muốn apply ban khác ko???
                        </label>
                      </div>
                    </div>

                    <div className="row">

                      <div className="mb-4 pb-2">
                        <textarea class="form-control" id="strength"
                            name="strength"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.strength}
                        rows="3"></textarea>
                          {formik.touched.strength && formik.errors.strength ? (
                            <div className="warning_input">{formik.errors.strength}</div>
                          ) : null}
                        <label for="strength">Strength</label>
                      </div>

                      <div className="mb-4 pb-2">
                        <textarea class="form-control" id="weakness"
                            name="weakness"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.weakness}
                        rows="3"></textarea>
                          {formik.touched.weakness && formik.errors.weakness ? (
                            <div className="warning_input">{formik.errors.weakness}</div>
                          ) : null}
                        <label for="weakness">Weakness</label>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="candidate_sharing"
                            name="candidate_sharing"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.candidate_sharing}
                            className="form-control form-control-lg"
                          />
                          {formik.touched.candidate_sharing && formik.errors.candidate_sharing ? (
                            <div className="warning_input">{formik.errors.candidate_sharing}</div>
                          ) : null}
                          <label className="form-label" htmlFor="candidate_sharing">
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
