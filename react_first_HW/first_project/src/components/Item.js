import React from "react";
import ReactTooltip from 'react-tooltip';

const Item = ({children, handleCheck}) => (
  <div style={{display:"flex", alignItems: "bottom", height:"30px"}} data-tip data-for={children.id}>
    <label for={children.id}>{children.taskName}</label>
    <input type="checkbox" onChange={e => handleCheck(children)}/>

    <ReactTooltip id={children.id.toString()} place="bottom" effect="solid">
      {children.state ? "Задача выполнена" : "Задача создана"} {children.changeDate}
    </ReactTooltip>
  </div>
)

  // componentDidUpdate(_,prevstate) {
  //   ReactTooltip.rebuild();
  // }

export default Item