import React, { useEffect, useState } from "react";
import Body from '../Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Main() {
  const [userData, setUserData] = useState('')

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('active_user'));
    setUserData(JSON.parse(localStorage.getItem(user)))
  }, [])
  return (
    <div className="App">
      <Header />
      <Body userData={userData}/>
      <Footer userData={userData}/>
    </div>
  );
}