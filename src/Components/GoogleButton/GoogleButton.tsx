import "./googleButton.scss";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
interface Props {
  onClick: () => void;
  className: string;
}

const GoogleButton = (props: Props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick  = ()=>
  {
      setClicked(true);
      window.open('http://localhost:8080/auth/google', '_self');
      setTimeout(()=>setClicked(false), 10000);
  }
  return (
    <div className="googleContainer">
      <button onClick={handleClick}>
        <img src="/Assets/google_logo.png" alt="logo" />
        {clicked ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress size = {30}/>
          </Box>
        ) : (
          "Continue with google"
        )}
      </button>
    </div>
  );
};

export default GoogleButton;
