import React from "react";
import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

const registrationValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Email is required."),
  password1: Yup.string().required("Password is required."),
  password2: Yup.string()
    .oneOf([Yup.ref("password1"), null], "Possword doesn't match.")
    .required("Password confirm is required"),
});

const RegistrationForm = ({ registrationInit, doRegistration }) => {
  return (
    <Formik
      initialValues={registrationInit}
      enableReinitialize={true}
      validationSchema={registrationValidationSchema}
      onSubmit={(values) => {
        doRegistration(values);
      }}
    >
      {() => (
        <Form>
          <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">
              Name
            </label>
            <div class="col-md-6">
              <Field
                className="form-control"
                id="name"
                name="name"
                type="text"
              />
              <ErrorMessage name="name">
                {(msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">
              E-Mail Address
            </label>
            <div class="col-md-6">
              <Field
                className="form-control"
                id="email"
                name="email"
                type="email"
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">
              Password
            </label>
            <div class="col-md-6">
              <Field
                className="form-control"
                type="password"
                id="password1"
                name="password1"
              />
              <ErrorMessage name="password1">
                {(msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">
              Confirm Password
            </label>
            <div class="col-md-6">
              <Field
                className="form-control"
                type="password"
                id="password2"
                name="password2"
              />
              <ErrorMessage name="password2">
                {(msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div class="form-group row mb-0">
            <div class="col-md-8 offset-md-4">
              <button type="submit" class="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
