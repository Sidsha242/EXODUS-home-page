import React from "react";
import { createRoot } from "react-dom/client";
import user2 from "./svg/exodus-logo.svg";
import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";
import { Link } from "react-router-dom";



import './index.css';
function Home() {
  return (
    <div className="home-page">
      <div className="logo">
        <img className="logo-pic" src={user2} alt="logo"></img>
      </div>

      <div className="cont-1">
        We are almost there
      </div>
      <CountdownTimer
        countdownTimestampMs={1670091600000} />
      <Buttons />
    </div >
  );
}

function Buttons() {
  return (
    <div className="button-comp">
      {/* <Link to=""> */}
      <button className="button-home">
        TIMELINE
      </button>
      {/* </Link> */}
      {/* <Link to=""> */}
      <button className="button-home">
        RULES
      </button>
      {/* </Link> */}
    </div>
  )
}



createRoot(document.getElementById("root")).render(<Home />);
//export default Home;