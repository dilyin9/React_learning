import React from "react";

const Button = ({handleClick}) => {
  return (
    <>
            <button onClick={() => handleClick()} style={{margin:"20px"}}>Выполнено</button>
    </>


  )
}
export default Button