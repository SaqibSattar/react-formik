import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form values: ", values);
};


const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required!'),
  channel: Yup.string().required('Required!')
})

const YoutubeForm = () => {

  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
