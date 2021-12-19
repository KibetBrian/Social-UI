import './signUpPage.scss';
import { VscArrowRight } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import GoogleButton from '../../Components/GoogleButton/GoogleButton';

const SignUpPage = () => {

  const handleGoogleLogin = ()=>
  {
      window.open('http://localhost:8080/auth/google', '_self')
  }

  return (
    <div className="signUpPage">
      <div className="containerWrapper">
          <div className="left">
              <div className="top">
                <h1>Tradisfin</h1>
                <p>Connect with other traders around the world</p>
              </div>
              <div className="bottom">
                <img src="/Assets/progress.svg" alt="" />
                <div className="signRe">
                  <p>Already have an account ?</p>
                     <h6><Link to={'/sign-in'}>Sign In</Link></h6>
                </div>
              </div>
          </div>
          <div className="right">
            <div className="formContainer">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="emailInput">Email Address</label>
                    <input required = {true} className="userInput" placeholder="Enter your email" type="email"  name="emailInput"/>
                    <label htmlFor="password">Set Password</label>
                    <input pattern="^(.{0,7}|[^a-z]{1,}|[^A-Z]{1,}|[^\d]{1,}|[^\W]{1,})$|[\s]" required = {true} className="userInput" placeholder="Enter your password" type="password"name="password"/>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input pattern="^(.{0,7}|[^a-z]{1,}|[^A-Z]{1,}|[^\d]{1,}|[^\W]{1,})$|[\s]" required= {true}  className="userInput" placeholder="Confirm Password" type="password" name="confirmPassword"/>
                    <div className="checkBox">
                      <input type="checkbox" name="checkbox" />
                      <label htmlFor="checkbox">Show Password</label>
                    </div>
                    <button  className="signUpButton" type="submit">Sign Up<VscArrowRight className="arrowRight" /></button>
                </form>
              <GoogleButton onClick={handleGoogleLogin}/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SignUpPage;
