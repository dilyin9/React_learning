import React, { useState } from "react";
import Item from "./Item";

const List = ({prop}) => {
  
  return (
  <>
    {prop.map((elem) => {
      return(
      <Item  key={elem.id} obj={elem}/>
      )
    })}
  </>
    )
}

export default List