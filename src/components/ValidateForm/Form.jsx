import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  name_validation,
  message_validation,
  email_validation,
  subject_validation
} from "./utils/inputValidations";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import Button from "../../components/Button";
import './Form.scss';
import swal from "sweetalert";

export const Form = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="form-content">
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...subject_validation} />
          <Input {...message_validation}/>
        </div>
        <div className="form-check">
          {success && (
            <p className="form-check-content">
              <BsFillCheckSquareFill /> Gửi thành công
            </p>
            
          )}<br/>
          
          <div className="btn-form-wrapper"><Button onClick={onSubmit} className={'btn-form'}>Send Message</Button></div>
        </div>
      </form>
    </FormProvider>
  );
};
