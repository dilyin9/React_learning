import React, { useState } from "react";
import Item from "./Item";

const List = ({prop}) => {
  const logger = () => {
    alert("sdsads")
  }
  return (
  <>
    {prop.map((elem) => {
      return(
      <Item  handler={logger} key={elem.id} obj={elem}/>
      )
    })}
  </>
    )
}

export default List