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
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...class_validation} />
          <Input {...desc_validation} className="md:col-span-2" />
        </div>
        <div className="mt-5">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <Button onClick={onSubmit} >Submit</Button>
        </div>
      </form>
    </FormProvider>
  );
};
