import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const commentValidationSchema = Yup.object().shape({
  body: Yup.string().required("Body is required."),
});

const CommentForm = ({commentInit, saveComment}) => {
  return (
    <Formik
    initialValues={commentInit}
    enableReinitialize={true}
    validationSchema={commentValidationSchema}
    onSubmit={(values) => {
      saveComment(values);
    }}
  >
    {() => (
      <div className="card my-4">
        <h5 className="card-header">Leave a Comment:</h5>
        <div className="card-body">
          <Form>
            <div className="form-group row">
                <div class="col-md-12">
                  <label for="title">Comment Body</label>
                  <Field
                  style={{ height: "100px" }}
                    className="form-control"
                    id="body"
                    name="body"
                    component="textarea"
                  />
                  <ErrorMessage name="body">
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
        </div>
      </div>
    )}
    </Formik>
  );
};

export default CommentForm;
