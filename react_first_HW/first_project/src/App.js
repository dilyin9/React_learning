import './App.css';
import List from './components/List';
import Button from './components/Button';
import React, { useState } from "react";

const do_list = [
  {taskName: "Согласовать презу", state: false, id:1},
  {taskName: "Согласовать презу", state: false, id:2},
  {taskName: "Согласовать презу", state: false, id:3},
  {taskName: "Согласовать презу", state: false, id:4},
  {taskName: "Согласовать презу", state: false, id:5},
  {taskName: "Согласовать презу", state: false, id:6}
]


function App() {
  const [count, setCount] = useState(0)

  const showMessage = ()=> {
    alert(count)
  }
  return (
    <div>
    <h2 style={{align_self:"center"}}>ToDoList</h2>
    <List prop={do_list}/>
    <Button handleClick={showMessage}/>
    </div>
  )
}

export default App;
