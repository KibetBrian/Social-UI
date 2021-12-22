import { Link } from "react-router-dom";
import "./signInPage.scss";
import { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import OrGoogle from "../../Components/OrGoogle/OrGoogle";
import GoogleButton from "../../Components/GoogleButton/GoogleButton";
import { State } from '../../interfaces';
import {Errors} from '../../interfaces'
import { CircularProgress } from '@mui/material';

const SignInPage = () => {

  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
    showPassword: false, 
  });

 

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      validateEmailAndPassword();
    };

const [errors, setErrors] = useState<Errors>({
  email: false,
  password: false
});

const validateEmailAndPassword = ()=>{
     
  if(values.password.length<1)
  {
    setErrors({...errors, 'password': true});
  }
  else if (values.email.length<1)
  {
    setErrors({...errors,'email': true})
  }

}

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
         <form>
            <input type="email" onChange={handleChange('email')}   required placeholder = "Enter your email" className="loginInput"/>
            <input type="password" required = {true} minLength={8} placeholder = "Password" className="loginInput" onChange={handleChange('password')}/>
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
            <button type= "submit" className="login_button" disabled = {false}>{false ? <CircularProgress style= {{color: "#fff"}} />:"Sign In"}</button>
            <OrGoogle />
          <div className="signInButton">
          <GoogleButton 
              onClick={function (): void {
                throw new Error("Function not implemented.");
              } } className={""}          />
          </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
