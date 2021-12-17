import "./signInPage.scss";
import { VscArrowRight } from 'react-icons/vsc'

const SignInPage = () => {
  return (
    <div className="signInPage">
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
                  <h6>Sign In</h6>
                </div>
              </div>
          </div>
          <div className="right">
            <div className="formContainer">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="emailInput">Email Address</label>
                    <input className="userInput" placeholder="Enter your email" type="email" required = {true} name="emailInput"/>
                    <label htmlFor="password">Set Password</label>
                    <input className="userInput" placeholder="Enter your password" type="password" required = {true} name="password"/>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input className="userInput" placeholder="Confirm Password" type="password" required = {true} name="confirmPassword"/>
                    <div className="checkBox">
                      <input type="checkbox" name="checkbox" />
                      <label htmlFor="checkbox">Show Password</label>
                    </div>
                    <button className="signInButton" type="submit">Sign Up<VscArrowRight className="arrowRight" /></button>
                </form>
                <div className="orContainer">
                  <div className="left"></div>
                  <p>or</p>
                  <div className="right"></div>
                </div>
                <div className="googleContainer">
                  <button>
                    <img src="/Assets/google_logo.png" alt="logo" />
                    Continue with Google</button>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SignInPage;
