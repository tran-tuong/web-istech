import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  name_validation,
  desc_validation,
  email_validation,
  class_validation
} from "./utils/inputValidations";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import Button from "../../components/Button";
import './Form.scss'

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
          <Input {...class_validation} />
          <Input {...desc_validation}/>
        </div>
        <div className="form-check">
          {success && (
            <p className="form-check-content">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <Button onClick={onSubmit} className={'btn-form'}>Submit</Button>
        </div>
      </form>
    </FormProvider>
  );
};
