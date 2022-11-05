import React, { useEffect, useState } from "react";
import Body from '../Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Routes } from "react-router-dom";
import TaskInfo from "../Body/TaskInfo";

export default function Main() {
  const active_user = JSON.parse(localStorage.getItem('active_user'));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('active_user'))))
  )
  useEffect(()=> {
    localStorage.setItem(active_user, JSON.stringify(userData))
  }, [userData])
  const handleUpdate = (newData) => {
    console.log(newData)
    setUserData({...userData, data: newData})

  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="desk" element={<Body userData={userData} handleUpdate={handleUpdate}/>} />
        <Route path=":id" element={<TaskInfo userData={userData}  handleUpdate={handleUpdate}/>} />
      </Routes>
      <Footer userData={userData}/>
    </div>
  );
}