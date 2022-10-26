import React from "react";

export default function Popup({isShown}) {
  return(
    <div className="login_popup">
      <div className="form_box">
        <form>
          <h2 className="app_text second_header_text">Sign In</h2>
          <label className="app_text popup_text">Login</label>
          <br></br>
          <input className="popup_text popup_input" placeholder="password"></input>
          <br></br>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    </div>
  )
}

//https://medium.com/geekculture/animation-login-popup-form-by-using-react-state-hook-and-css-7ecf803f1fa9