import React from "react";

import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

const postSaveValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required."),
  body: Yup.string().required("Body is required."),
});

const PostForm = ({ postInit, savePost }) => {
  return (
    <div className="card my-4">
      <h5 className="card-header">New Post:</h5>
      <div className="card-body">
        <Formik
          initialValues={postInit}
          enableReinitialize={true}
          validationSchema={postSaveValidationSchema}
          onSubmit={(values) => {
            savePost(values);
          }}
        >
          {() => (
            <Form>
              <div className="form-group row">
                <div class="col-md-12">
                  <label for="title">Post Title*</label>
                  <Field
                    className="form-control"
                    id="title"
                    name="title"
                    type="text"
                  />
                  <ErrorMessage name="title">
                    {(msg) => (
                      <div className="alert alert-danger mt-2" role="alert">
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <div className="form-group row">
                <div class="col-md-12">
                  <label for="title">Post Body*</label>
                  <Field
                    style={{ height: "100px" }}
                    className="form-control"
                    id="body"
                    name="body"
                    component="textarea"
                  />
                  <ErrorMessage name="title">
                    {(msg) => (
                      <div className="alert alert-danger mt-2" role="alert">
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PostForm;
