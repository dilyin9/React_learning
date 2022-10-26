import React, { useEffect, useState } from "react";
import Header from "./Header";
import Popup from "./Popup";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const [isShown, setIsShown] = useState(true);
  
  const navigate = useNavigate()
  const handleSubmit =(e) => {
    const newUser = {
      user_name: e,
      isCurrent: true,
      data: []
    }
    localStorage.setItem(e, JSON.stringify(newUser));
   // navigate('main');
  }
  return (
    <div className="login">
      <Header />
      <Popup isShown={isShown} formSubmitted={handleSubmit}/>
    </div>
  )
}