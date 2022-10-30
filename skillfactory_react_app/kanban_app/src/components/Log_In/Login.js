import React, { useEffect, useState } from "react";
import Header from "./Header";
import Popup from "./Popup";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const [isShown, setIsShown] = useState(false);
  const [isActive, setIsActive] = useState(JSON.parse(localStorage.getItem('isActive')) || false);

  useEffect(() => {
    setIsShown(!isActive)
    if (isActive) {
      navigate('main');
    }
  }, [isActive]);

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    const newUser = {
      user_name: e,
      data: [{title:'backlog', tasks:[]},{title:'ready', tasks:[]},{title:'inProgress', tasks:[]},{title:'fifnished', tasks:[]}]
    }
    setIsActive(true);
    localStorage.setItem('isActive', JSON.stringify(true));
    localStorage.setItem('active_user', JSON.stringify(newUser.user_name));
    localStorage.setItem(newUser.user_name, JSON.stringify(newUser));
    navigate('main');
  }
  return (
    <div className="login">
      <Header />
      <Popup isShown={isShown} formSubmitted={handleSubmit}/>
    </div>
  )
}