import React, { useEffect, useState } from 'react';
const currentDate = new Date().toLocaleDateString();
export default function Footer({userData}) {

  const [activeTasks, setActivetasks] = useState('0')
  const [finishedTasks, setFinishedtasks] = useState('0')
  useEffect(() => {
    setActivetasks(userData.data[0].tasks.length)
    setFinishedtasks(userData.data[3].tasks.length)
  }, [userData])
  return (
    <div className="footer">
        <div>
          <span className='app_text' style={{marginLeft:20}}>Active tasks: {activeTasks}</span>
          <span className='app_text' style={{marginLeft:36}}>Finished tasks: {finishedTasks} </span>
        </div>
        <div>
            <span className='app_text' style={{marginRight:20}}>{`Kanban board by ${userData.user_name} ,  ${currentDate}`}</span>
        </div>
    </div>
  )
}