import React, { useState } from "react";

export default function Popup({isShown,formSubmitted}) {
  const [userName, setUserName] = useState('')
  function handleChange(e) {
    e.preventDefault();
    formSubmitted(userName);
  }
  return(
    <div className="login_popup">
      <div className="form_box">
        <form onSubmit={handleChange}>
          <h2 className="app_text second_header_text">Sign In</h2>
          <label className="app_text popup_text">Login</label>
          <br></br>
          <input onChange={(e) => {setUserName(e.target.value)}} className="popup_text popup_input" placeholder="username" value={userName}></input>
          <br></br>
          <input className="popup_text popup_submit" type="submit" value="Login"></input>
        </form>
      </div>
    </div>
  )
}

//https://medium.com/geekculture/animation-login-popup-form-by-using-react-state-hook-and-css-7ecf803f1fa9