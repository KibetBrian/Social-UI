import { Link } from "react-router-dom";
import "./signInPage.scss";
import { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import OrGoogle from "../../Components/OrGoogle/OrGoogle";
import GoogleButton from "../../Components/GoogleButton/GoogleButton";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleSignInApiCall } from "../../apiCalls";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const SignInPage = () => {
  interface ISignInInput {
    email: string;
    password: string;
  }

  const user = useSelector((state: RootState)=>state.user);

  const [values, setValues] = React.useState<ISignInInput>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignInApiCall(dispatch, {
      email: values.email,
      password: values.password,
    });
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="signInPage">
      <div className="left">
        <img className="logo" src="/Assets/tradisfin_logo.png" alt="" />
        <h1>Hi, Welcome Back</h1>
        <img
          className="illustration"
          src="/Assets/welcome_back_illustration.svg"
          alt=""
        />
      </div>

      <div className="right">
        <div className="top">
          <p>
            Don’t have an account?{" "}
            <span>
              <Link className="link" to={"/sign-up"}>
                Create an account
              </Link>
            </span>{" "}
          </p>
        </div>
        <div className="bottom">
          <h3>Sign in to Tradisfin</h3>
          <p>Enter you details below.</p>
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="loginInput"
              name="email"
            />
            <input
              type="password"
              required={true}
              minLength={8}
              placeholder="Password"
              className="loginInput"
              onChange={handleChange}
              name="password"
            />
            <div className="checkBox">
              <div className="checkBoxLeft">
                <Checkbox
                  {...label}
                  sx={{
                    borderRadius: 1,
                  }}
                  {...label}
                />
                <span>
                  Remember{" "}
                  <meta
                    http-equiv="Content-Type"
                    content="text/html;charset=UTF-8"
                  />
                </span>
              </div>
              <div className="checkBoxRight">
                <span>Forgot Password ?</span>
              </div>
            </div>
            <button type="submit" className="login_button" disabled={false}>
              {user.isFetching ? (
                <CircularProgress style={{ color: "#fff" }} />
              ) : (
                "Sign In"
              )}
            </button>
            <OrGoogle />
            <div className="signInButton">
              <GoogleButton
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                className={""}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
