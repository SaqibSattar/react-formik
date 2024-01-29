import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("Form values: ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  channel: Yup.string().required("Required!"),
  comments: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
});

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="channel name"
          />
          <ErrorMessage name="channel" />
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" type="text" id="comments" name="comments" />
          <ErrorMessage name="comments" />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <FastField name="address">
            {(props) => {
              console.log("Render FastField:");
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </FastField>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
          <ErrorMessage name="social.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter profile</label>
          <Field type="text" id="twitter" name="social.twitter" />
          <ErrorMessage name="social.twitter" />
        </div>
        <div className="form-control">
          <label htmlFor="primaryPH">Primary Phone</label>
          <Field type="text" id="primaryPH" name="phoneNumbers[0]" />
          <ErrorMessage name="phoneNumbers[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPH">Secondary Phone</label>
          <Field type="text" id="secondaryPH" name="phoneNumbers[1]" />
          <ErrorMessage name="phoneNumbers[1]" />
        </div>
        <div className="form-control">
          <label>List of phone numbers</label>
          <FieldArray name='phNumbers'>
          {fieldArrayProps => {
            const { push, remove, form } = fieldArrayProps
            const { values } = form
            const { phNumbers } = values
            // console.log('fieldArrayProps', fieldArrayProps)
             console.log('Form errors', form.errors)
            return (
              <div>
                {phNumbers.map((phNumber, index) => (
                  <div key={index}>
                    <Field name={`phNumbers[${index}]`} />
                    {index > 0 && (
                      <button type='button' onClick={() => remove(index)}>
                        -
                      </button>
                    )}
                    <button type='button' onClick={() => push('')}>
                      +
                    </button>
                  </div>
                ))}
              </div>
            )
          }}
        </FieldArray>
        </div>

        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
