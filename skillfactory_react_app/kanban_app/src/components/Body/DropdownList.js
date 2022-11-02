import React from "react";

export default function DropdownList({item, index, dropDownSelected}) {
  return(
      <li onClick={()=> dropDownSelected(index)} className="dropdown_item">{item.name}</li>
  )
}