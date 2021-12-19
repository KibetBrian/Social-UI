import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import "./signInPage.scss";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Box, IconButton, Input, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import OrGoogle from "../../Components/OrGoogle/OrGoogle";
import GoogleButton from '../../Components/GoogleButton/GoogleButton'

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

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
          <Box
            sx={{
              marginTop: "50px",
            }}
            component="form"
          >
            <TextField
              id="outlined-basic"
              label="Email address"
              className="emailInput"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            />
            <FormControl sx={{ mt: 4, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                className="passwordInput"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
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
              sx={{
                width: "100%",
                marginTop: "25px",
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
          <GoogleButton onClick={function (): void {
                      throw new Error("Function not implemented.");
                  } } />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
