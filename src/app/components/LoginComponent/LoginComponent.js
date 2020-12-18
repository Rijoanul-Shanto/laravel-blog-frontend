import React, { useEffect } from "react";

import LoginForm from "./LoginForm";

import {
  postLogin,
  verifyToken,
} from "../../services/authenticationsAPIService";

const loginInit = {
  email: "",
  password: "",
};

const Login = () => {
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const data = {
      token: token,
    };
    verifyToken(data)
      .then((res) => {
        window.location.href = "/react";
        console.log(res);
      })
      .catch((error) => {
        console.log("Login -> error", error);
      });
  }, [token]);

  const doLogin = (values) => {
    postLogin(values)
      .then((response) => {
        const { data } = response;
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        window.location.href = "/react";
      })
      .catch(() => {
        alert("Enter a valid Email and Password");
      });
  };

  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <div className="row justify-content-center">
        <div class="col-md-8">
          <div class="card" style={{ marginTop: "41px" }}>
            <div class="card-header">Login</div>
            <div class="card-body mb-2">
              <LoginForm loginInit={loginInit} doLogin={doLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
