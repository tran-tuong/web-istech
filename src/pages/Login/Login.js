import React from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function Login() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: async (values) => {
            

            const result = await axios(
                {
                    url: 'http://localhost:3001/account/signin',
                    method: 'POST',
                    data: values,
                    withCredentials:true
                }
            );
            console.log(result,"result");

            if (result.status === 200) {
                // navigate('/');
                //  http://localhost:3001/member/me

                // Cookies.set('acesstoken',result.data.access_token);

                // let access_token = Cookies.get('access_token');

                // console.log(access_token);

                const result2 = await axios.get("http://localhost:3001/member/me",{
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${result.data.access_token}`
                    },
                    withCredentials: true
                }
                )
                console.log(result2,"resule2");
            } 
        },
    });

    return (
        <section className="vh-100">
            <div className="container h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100"
                >
                    <div className="col-md-9 col-lg-6 col-xl-5 img_login" style={{ borderRadius: "6px" }}>
                        <img src="https://i.postimg.cc/vmvV6Cmc/306086371-512407257558996-1196853709116080547-n.jpg" className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 form_login" >
                        <form onSubmit={formik.handleSubmit} >
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className="form-control form-control-lg input_login" placeholder="Enter a valid email address" />
                                {formik.touched.email && formik.errors.email ? (
                                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                                ) : null}
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <input type="password" id="password"
                                    name="password"

                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password} className="form-control form-control-lg input_login" placeholder="Enter password" />
                                {formik.touched.password && formik.errors.password ? (
                                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                                ) : null}
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>

                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg login_button" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>

    )
}
