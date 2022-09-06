import './signUpPage.scss';
import { VscArrowRight } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import GoogleButton from '../../Components/GoogleButton/GoogleButton';
import OrGoogle from '../../Components/OrGoogle/OrGoogle';
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { handleSignInApiCall } from '../../apiCalls';
import { useDispatch } from 'react-redux';
import {useState} from 'react'

const SignUpPage = () => {
  const dispatch = useDispatch()

  const [userInput, setUserInput] = useState<{email: string; password: string; confirmPassword: string}>({
    email: '', password: '', confirmPassword: ''});
;

  const handleChange = (e: any)=>{
    setUserInput(prev=>({...prev, [e.target.name]:e.target.value}));
  }

  const handleLogin =(e: any)=>{
    e.preventDefault()
    if (userInput.confirmPassword !== userInput.password){
      //Error
      return;
    }
    handleSignInApiCall(dispatch, userInput)
  }


  const handleGoogleLogin = ()=>
  {
      window.open('http://localhost:8080/auth/google', '_self')
  }

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="signUpPage">
      <div className="containerWrapper">
          <div className="left">
              <div className="top">
               <div className="logoContainer">
               <h1>Tradisfin</h1>
                <img src="/Assets/tradisfin_block_logo.png" alt="" />
               </div>
                <p>Connect with other traders around the world</p>
              </div>
              <div className="bottom">
                <img src="/Assets/progress.svg" alt="" />
                <div className="signRe">
                  <p>Already have an account ?</p>
                     <h6><Link className='link' to={'/sign-in'}>Sign In</Link></h6>
                </div>
              </div>
          </div>
          <div className="right">
            <div className="formContainer">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="emailInput">Email Address</label>
                    <input onChange={handleChange} required = {true} className="userInput" placeholder="Enter your email" type="email"  name="emailInput"/>
                    <label htmlFor="password">Set Password</label>
                    <input onChange={handleChange} pattern="^(.{0,7}|[^a-z]{1,}|[^A-Z]{1,}|[^\d]{1,}|[^\W]{1,})$|[\s]" required = {true} className="userInput" placeholder="Enter your password" type="password"name="password"/>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange ={handleChange} pattern="^(.{0,7}|[^a-z]{1,}|[^A-Z]{1,}|[^\d]{1,}|[^\W]{1,})$|[\s]" required= {true}  className="userInput" placeholder="Confirm Password" type="password" name="confirmPassword"/>
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
                  Save Password
                  <meta
                    http-equiv="Content-Type"
                    content="text/html;charset=UTF-8"
                  />
                </span>
              </div>
              <div className="checkBoxRight">
              </div>
            </div>
            <button onClick ={handleLogin} type = "submit" style = {{width: '100%'}} className="sign_in_button">Sign In</button>
                <OrGoogle />
              <GoogleButton className='swg_button' onClick={handleGoogleLogin}/>
                </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SignUpPage;
