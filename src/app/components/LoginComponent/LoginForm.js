import React from "react";
import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ loginInit, doLogin }) => {
  return (
    <Formik
      initialValues={loginInit}
      enableReinitialize={true}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        doLogin(values);
      }}
    >
      {() => (
        <Form>
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
                id="password"
                name="password"
              />
              <ErrorMessage name="password">
                {(msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>
          <div class="form-group row">
            <div className="col-md-4"></div>
            <div class="col-md-6" style={{ marginLeft: "20px" }}>
              <input
                class="form-check-input"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label class="form-check-label" for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <div class="form-group row mb-0">
            <div class="col-md-8 offset-md-4">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
              <a
                class="btn btn-link"
                href="http://127.0.0.1:8000/password/reset"
              >
                Forgot Your Password?
              </a>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
