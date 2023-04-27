import React from 'react'
import { Form } from 'semantic-ui-react';
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import './Contact.scss'

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <div className='contact-header'>
            <div className='content-heading'>
              <h1>Contact Form</h1>
            </div>
          </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className='main-content'>
                <Form.Field>
                    <label className='sub-heading-form'>Name:</label>
                    <input
                        placeholder='Nguyen Van A'
                        type="text"
                        {...register("firstName", { required: true, maxLength: 30 })}
                    />
                </Form.Field>
                {errors.firstName && <p>Please check the Name</p>}
                <Form.Field>
                    <label className='sub-heading-form'>Email Address:</label>
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p>Please check the Email Address</p>}
                <Form.Field>
                    <label className='sub-heading-form'>Subject:</label>
                    <input
                        placeholder='ICE2021A'
                        type="text"
                        {...register("subject", { required: true, maxLength: 15 })}
                    />
                </Form.Field>
                {errors.subject && <p>Please check the Subject</p>}

                <Form.Field>
                    <label className='sub-heading-form'>Message:</label>
                    <input
                        placeholder='Write something'
                        type="text"
                        {...register("mess", { required: true, maxLength: 1000 })}
                    />
                </Form.Field>
                {errors.mess && <p>Please check the Message</p>}
                
                <Button type='submit'>Submit</Button>
                </div>
            </Form>
        </div>
    )
}
