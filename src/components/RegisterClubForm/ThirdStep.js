import React from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

function ThirdStep({ formData, setFormData }) {
    const formik = useFormik({
        validationSchema: Yup.object({
            strength: Yup.string().required("Không được bỏ trống"),
            weakness: Yup.string().required("Không được bỏ trống"),
            candidate_sharing: Yup.string().required("Không được bỏ trống"),
        }),
    });

    return (
        <div>
            <div className="mb-4 pb-2">
                <label htmlFor="strength">
                    Bạn hãy liệt kê 3 điểm mạnh của bản thân
                </label>
                <textarea
                    class="form-control"
                    id="strength"
                    name="strength"
                    onChange={(event) =>
                        setFormData({
                            ...formData,
                            strength: event.target.value,
                        })
                    }
                    onBlur={formik.handleBlur}
                    value={formData.strength}
                    rows="3"
                ></textarea>
                {formik.touched?.strength && formData.strength === "" ? (
                    <div className="warning_input">
                        {formik.errors.strength}
                    </div>
                ) : null}
            </div>

            <div className="mb-4 pb-2">
                <label htmlFor="weakness">
                    Bạn hãy liệt kê 3 điểm yếu của bản thân
                </label>
                <textarea
                    class="form-control"
                    id="weakness"
                    name="weakness"
                    onChange={(event) =>
                        setFormData({
                            ...formData,
                            weakness: event.target.value,
                        })
                    }
                    onBlur={formik.handleBlur}
                    value={formData.weakness}
                    rows="3"
                ></textarea>
                {formik.touched?.weakness && formData.weakness === "" ? (
                    <div className="warning_input">
                        {formik.errors.weakness}
                    </div>
                ) : null}
            </div>

            <div className="mb-4 pb-2">
                <div className="form-outline">
                    <label className="form-label" htmlFor="candidate_sharing">
                        Chia sẻ mong muốn của bạn khi tham gia CLB. CLB có thể
                        giúp bạn phát huy những điểm mạnh và khắc phục những
                        điểm yếu trên như thế nào?
                    </label>
                    <input
                        type="text"
                        id="candidate_sharing"
                        name="candidate_sharing"
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                candidate_sharing: event.target.value,
                            })
                        }
                        onBlur={formik.handleBlur}
                        value={formData.candidate_sharing}
                        className="form-control form-control-lg"
                    />
                    {formik.touched?.candidate_sharing && formData.candidate_sharing === "" ? (
                        <div className="warning_input">
                            {formik.errors.candidate_sharing}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default ThirdStep;
