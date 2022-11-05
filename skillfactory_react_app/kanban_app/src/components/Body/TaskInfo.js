import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function TaskInfo ({userData, handleUpdate}) {
  let params = useParams();
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [editableTask, setEditableTask] = useState('')
  let navigate = useNavigate()

  useEffect(()=> {
    getTaskParams();
  }, [])

  const getTaskParams = () => {
      for (let item of userData.data) {
        for (let task of item.tasks) {
          if (params.id.toString() === task.id.toString()) {
            setTaskName(task.name)
            setTaskDescription(task.description ? task.description : 'This task has no description')
            setEditableTask(item.title)
            break
          }
        }
      }
  }

  const changeHandler = (event) => {
    setTaskDescription(event.target.value)
  }

  const handlerClick = () => {
    const newData = userData.data.map((item) => 
        item.title === editableTask ? 
          {...item, tasks:item.tasks.map((task) => task.id.toString() === params.id.toString() ? {...task, description: taskDescription}: task)}: item
    )
    handleUpdate(newData);
    navigate('/main/desk');
  }

  //{...task, description: taskDescription}
  return (
    <div className="task_container">
      <div className="taks_container_info">
        <div className="taks_container_info_header">
        <h2>{taskName}</h2>
        <button onClick={handlerClick} className="taks_container_info_close"></button>
        </div>
        <textarea className="taks_container_info_description" onChange={changeHandler} value={taskDescription}></textarea>
      </div>
    </div>
  )
}