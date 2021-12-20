import { Link } from "react-router-dom";
import "./signInPage.scss";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import OrGoogle from "../../Components/OrGoogle/OrGoogle";
import GoogleButton from "../../Components/GoogleButton/GoogleButton";
import axios from "axios";
import { instance } from "../../axiosInstance";
import { State } from '../../interfaces';
import {Errors} from '../../interfaces'
import { alpha, styled } from '@mui/material/styles';


const SignInPage = () => {

  const [loginError, setLoginError] = useState(true);
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

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
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


  const handleSignIn = async()=>
  {
     // try 
    // {
    //   const {email, password} = values;
    //   const res = await instance.post('/user/login', {email, password});
    //   console.log(res.data);
    // }
    // catch(err)
    // {
    //   console.log(err)
    // }
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
        {/* <div className="warningBar">
        <p>Check the details</p>
      </div> */}
          <h3>Sign in to Tradisfin</h3>
          <p>Enter you details below.</p>
          <Box
            sx={{
              marginTop: "30px",
            }}
            component="form"
          >
            <TextField
               label="Email address"
               required = {true}
               error = {errors.email}
               type={"email"}
               onChange={handleChange('email')}
               variant="outlined"
               sx={{
                 borderRadius: '9px',
                 width: "100%",
                 '& input: valid + fieldset':{
                   borderColor: '#1976d2',
                   borderWidth: 2
                },
                '& input:  invalid + fieldset':
                {
                  borderColor: values.email.length>0 ? 'red': '',
                  borderWidth: 2
                },
                '& input: focus + fieldset':
                {
                  borderLeftWidth: 6,
                  padding: '4px !important'
                }
              }}
              />
            <TextField
               label="Password"
               required = {true}
               error = {errors.email}
               type={"email"}
               onChange={handleChange('password')}
               variant="outlined"
               sx={{
                 mt: 3,
                 width: "100%",
                 borderRadius: '9px',
                 '& input: valid + fieldset':{
                   borderColor: '#1976d2',
                   borderWidth: 2
                },
                '& input:  invalid + fieldset':
                {
                  borderColor: values.email.length>0 ? 'red': '',
                  borderWidth: 2
                },
                '& input: focus + fieldset':
                {
                  borderLeftWidth: 6,
                  padding: '4px !important'
                },
                ":hover": {
                  borderColor: '#1976d2'
                }
              }}
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
            <Button
            type = 'submit'
            onClick = {handleSignIn}
              sx={{
                width: "100%",
                marginTop: "15px",
                height: "50px",
                borderRadius: "7px",
                backgroundColor: "#1976d2",
                textTransform: "inherit",
                fontSize: "16px",
                fontFamily: "inherit",
              }}
              variant="contained"
            >
              Sign In
            </Button>
          </Box>
          <OrGoogle />
          <div className="signInButton">
          <GoogleButton 
              onClick={function (): void {
                throw new Error("Function not implemented.");
              } } className={""}          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
