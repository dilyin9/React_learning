
import React, { useState } from 'react';
import caret_span from '../../public/images/caretSpanDown_black.png'; 
import DropdownList from './DropdownList';

export default function Block({name, data, type, fullData, index, handleUpdate}) {
  const [currentButton, setCurrentButoon] = useState('add')
  const [addMode, setAddMode] = useState(false)
  const [newValue, setNewValue] = useState('')
  const [dropdownList, setDropdownList] = useState([])
  const [expandDropdown, setExpandDropdown] = useState(false)
  const [dropDownSelectedLabel, setDropDownSelectedLabel] = useState('')
  const [editableIndex, setEditableIndex] = useState(null)
  const [disableButton, setDisableButton] = useState(false)

  const handleAddClick = () => {
        setCurrentButoon('submit');
        setAddMode(true);
  }

  const updateData = () => {
    if (type === 'backlog') {
      setCurrentButoon('add');
      setAddMode(false);
      setNewValue('');
      if (newValue.length) {
        let newTask = {
          name: newValue,
          description: ''
        }
        let newData = [...fullData.data]
        let newObject = newData[index].tasks.push(newTask)
        handleUpdate(newData);
      }
    }
    else {
      if (editableIndex !== null){
        console.log('asdad')
        setCurrentButoon('add');
        setAddMode(false);
        let newData = [...fullData.data]
          let newObject = newData[index-1].tasks[editableIndex]
          newData[index-1].tasks.splice(editableIndex,1)
          newData[index].tasks.push(newObject)
          handleUpdate(newData);
          setEditableIndex(null);
          setDropDownSelectedLabel(null)
      }
    }
  }

  const loadDropdownList = () => {
    console.log(fullData.data)
      let backlogList = fullData.data[index-1].tasks
      setDropdownList(backlogList)
      setExpandDropdown(!expandDropdown) 
  }

  const dropDownSelected = (e) => {
    setDropDownSelectedLabel(dropdownList[e].name)
    setExpandDropdown(!expandDropdown)
    setEditableIndex(e)
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
            {addMode && type === 'backlog' &&
              <input onChange={(e) => setNewValue(e.target.value)} type="text" className="block_task added_task" value={newValue}/>
            }
            {addMode && type !== 'backlog' &&
            //<Dropdown fullData={fullData} type = {type} />
              <div className="dropdown_container">
              
                <div className="dropdown_selector">
                  <label>{dropDownSelectedLabel}</label>
                  <span className='dropdown_selector_button' onClick={loadDropdownList}>
                    <img src={caret_span}></img>
                  </span>
                  </div>
                {expandDropdown &&
                  <div className="dropdown">
                      <ul style={{padding:"0"}}>
                      {dropdownList.map((item, index) => (
                              <DropdownList dropDownSelected={dropDownSelected} key={index} item={item} index={index}/>  
                      ))  
                      }
                      </ul>
                  </div>
                }
              </div>
            } 
          </ul>
          <div className="app_text block_add_item">
           <button onClick={handleAddClick} style={{display: (currentButton ==='add')? '': 'none'}} className='block_add_item_button button'>Add card</button>
           <button disabled={disableButton} onClick = {updateData} style={{display: (currentButton ==='submit')? '': 'none'}} className='block_submit_item button'>Submit</button>
          </div>
        </div>
        
    </div>
  )
}