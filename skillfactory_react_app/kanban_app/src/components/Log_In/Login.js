import React, { useEffect, useState } from "react";
import Header from "./Header";
import Popup from "./Popup";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const [isShown, setIsShown] = useState(false);
  const [isActive, setIsActive] = useState(JSON.parse(localStorage.getItem('isActive')) || false);

  useEffect(() => {
    setIsShown(!isActive)
  }, [isActive]);

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    const newUser = {
      user_name: e,
      data: []
    }
    setIsActive(true);
    localStorage.setItem('isActive', JSON.stringify(true));
    localStorage.setItem('active_user', JSON.stringify(newUser.user_name));
    localStorage.setItem(newUser.user_name, JSON.stringify(newUser));
  }
  return (
    <div className="login">
      <Header />
      <Popup isShown={isShown} formSubmitted={handleSubmit}/>
    </div>
  )
}