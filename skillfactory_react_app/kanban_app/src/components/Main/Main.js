import React, { useEffect, useState } from "react";
import Body from '../Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Main() {
  const active_user = JSON.parse(localStorage.getItem('active_user'));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('active_user'))))
  )
  useEffect(()=> {
    localStorage.setItem(active_user, JSON.stringify(userData))
  }, [userData])
  const handleBacklog = (obj) => {
    console.log(userData)
    let newData = [...userData.data]
    newData[0].tasks = obj;
    setUserData({...userData, data: newData})

  }
  return (
    <div className="App">
      <Header />
      <Body userData={userData} handleBacklog={handleBacklog} />
      <Footer userData={userData}/>
    </div>
  );
}