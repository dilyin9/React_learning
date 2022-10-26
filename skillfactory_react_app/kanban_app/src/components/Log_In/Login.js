import React, { useState } from "react";
import Header from "./Header";
import Popup from "./Popup";

export default function Login() {
  const [isShown, setIsShown] = useState(true);

  return (
    <div className="login">
      <Header />
      <Popup isShown={isShown} />
    </div>
  )
}