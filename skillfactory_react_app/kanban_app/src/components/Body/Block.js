
import React, { useState } from 'react';

export default function Block({name, data, type, addNewBackLog}) {
  const [currentButton, setCurrentButoon] = useState('add')
  const [addMode, setAddMode] = useState(false)
  const [newValue, setNewValue] = useState('')
  const handleAddClick = () => {
    switch(type) {
      case 'backlog':
        setCurrentButoon('submit');
        setAddMode(true);
    }
  }
  const addNewBackLogTask =() => {
      if (newValue.length) {
        let newTask = {
          name: newValue,
          description: ''
        }
        let newArr = [...data.tasks, newTask]
        addNewBackLog(newArr)
      }
  }
  const handleSubmitClick = () => {
    switch(type) {
      case 'backlog': 
      setCurrentButoon('add');
      setAddMode(false);
      addNewBackLogTask();
      setNewValue('');
      
    }
  }
  return (
    <div className="block">
        <div className="block_content">
          <ul className="app_text block_text">
            {name}
           {data.tasks.map((task, index) => (
              <input type="text" key={index} className="block_task" value={task.name} readOnly/>
            ))
            }
            {addMode &&
              <input onChange={(e) => setNewValue(e.target.value)} type="text" className="block_task added_task" value={newValue}/>
            } 
          </ul>
          <div className="app_text block_add_item">
           <button onClick={handleAddClick} style={{display: (currentButton ==='add')? '': 'none'}} className='block_add_item_button button'>Add card</button>
           <button onClick = {handleSubmitClick} style={{display: (currentButton ==='submit')? '': 'none'}} className='block_submit_item button'>Submit</button>
          </div>
        </div>
        
    </div>
  )
}