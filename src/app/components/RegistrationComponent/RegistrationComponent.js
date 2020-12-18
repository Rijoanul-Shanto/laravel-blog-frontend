import React from "react";

import RegistrationForm from "./RegistrationForm";
import { postRegistration } from "../../services/authenticationsAPIService";

const registrationInit = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};

const Registration = (props) => {
  const doRegistration = (values) => {
    const data = {
      email: values.email,
      name: values.name,
      password: values.password2,
    };
    postRegistration(data)
      .then(() => {
        props.history.push("/react/login");
        alert("Registration successfull.");
      })
      .catch(() => {
        alert("Registration filled. Please try again.");
      });
  };
  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <div className="row justify-content-center">
        <div class="col-md-8">
          <div class="card" style={{ marginTop: "41px" }}>
            <div class="card-header">Register</div>
            <div class="card-body mb-2">
              <RegistrationForm
                registrationInit={registrationInit}
                doRegistration={doRegistration}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
