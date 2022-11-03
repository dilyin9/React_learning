import React from "react";

export default function DropdownList({item, index, dropDownSelected}) {
  return(
    <div  onClick={() => {dropDownSelected(index)}} className='added_block_task'>
      <span className='added_block_task_text'>{item.name}</span>
    </div>
    //  <li onClick={()=> dropDownSelected(index)} className="dropdown_item">{item.name}</li>
  )
}