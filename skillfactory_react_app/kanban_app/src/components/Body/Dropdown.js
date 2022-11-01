import React, { useState } from "react";
import caret_span from '../../public/images/caretSpanDown_black.png'; 

export default function Dropdown({type, fullData}) {
  const list1 = [{name:'sdasd'},{name:'dfsdfsfd'}]
  const [expand, setExpand] = useState(false)
  const [list, setList] = useState([])

  const handleClick = () => {
    if (type === 'ready') {
      let backlogList = fullData.data[0].tasks
      setList(backlogList)
      setExpand(!expand)
    }
  }
  const taskSelected = (e, index) => {
    console.log(index)
  }
  return(
    <div className="dropdown_container">
      <div className="dropdown_selector">
          <span className='dropdown_selector_button' onClick={handleClick}>
              <img src={caret_span}></img>
           </span>
      </div>
      {expand &&
        <div className="dropdown">
        { list.map((item, index) => (
          <div key={index} className="dropdown_item" onClick={(index) => taskSelected(index)}>
            <label>{item.name}</label>
          </div>
        ))
        }
      </div>
      }
      
    </div>
    
  )
}