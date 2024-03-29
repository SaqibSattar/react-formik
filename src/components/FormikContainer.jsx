import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from './FormikControl'

function FormikContainer() {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ]

  const rcOptions = [
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ]

  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' }
  ]

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().min(1, 'At least one checkbox must be selected'),
    birthDate: Yup.date().required('Required').nullable()
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikControl
            control='input'
            type='email'
            label='Email'
            name='email'
            formik={formik}
          />
          <FormikControl
            control='textarea'
            label='Description'
            name='description'
            formik={formik}
          />
          <FormikControl
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
            formik={formik}
          />
          <FormikControl
            control='radio'
            label='Radio topic'
            name='radioOption'
            options={rcOptions}
            formik={formik}
          />
          <FormikControl
            control='checkbox'
            label='Checkbox topics'
            name='checkboxOption'
            options={checkboxOptions}
            formik={formik}
          />
          <FormikControl
            control='date'
            label='Pick a date'
            name='birthDate'
            formik={formik}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
