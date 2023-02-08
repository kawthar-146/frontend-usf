import React, { useState } from "react";
import LoginPopup from "../components/login/Login.Popup";
import image from "../images/unnamed.png";
import "./Login.css"

export default function Login() {
    const [trigger, setTrigger] = useState(false);
    const [value, setValue]= useState('student');
    
  return (
    <>
      <div className="header_login">
        <img src={image} alt="picturee" />
      </div>
      <div className="body_login">
        <div className="container_login">
          <h1>Welcome to the USF</h1>
          <span>Any succesfull career starts with good education</span>
          <div className="input_login">
            <div>
              <input type="radio" id="student" name="user" value="student" onChange={()=>setValue('student')} defaultChecked/>
              <label for="student">Student</label>
            </div>
            <div>
              <input type="radio" id="doctor" name="user" value="doctor" onChange={()=>setValue('doctor')} />
              <label for="doctor">Doctor</label>
            </div>
          </div>
          <button onClick={()=>setTrigger(true)} className="button_login">Sign in</button>
        </div>
      </div>
      <div className="footer_login">

      </div>
     {trigger ? <LoginPopup setTrigger={setTrigger} value={value}/> : ""}
    </>
  );
}
