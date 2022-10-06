import React from "react";
import ReactTooltip from 'react-tooltip';

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkbox_state: false,
      task_state: "new",
      current_date: new Date().toLocaleString().toString()
    }
  }

  componentDidUpdate(_,prevstate) {
    ReactTooltip.rebuild();
  }

  handler = () => {
    this.setState({
      checkbox_state: !this.state.checkbox_state,
      current_date: new Date().toLocaleString().toString(),
      task_state: (this.state.task_state ==="new") ? "done" : "new"
    })
    ReactTooltip.rebuild();
  }

  render() {
    return(
    <div style={{display:"flex", alignItems: "bottom", height:"30px"}} data-tip data-for={this.props.obj.id} key={this.props.obj.id}>
    <label for="check">{this.props.obj.taskName}</label>
    <input  id="check" type="checkbox" checked={this.state.checkbox_state}
      onChange={this.handler}
    />
      <ReactTooltip id={this.props.obj.id.toString()} place="bottom" effect="solid">
      {(this.state.task_state === "new")?"Задача создана"
      :(this.state.task_state === "done") ? "Задача выполнена":""} {this.state.current_date}
    </ReactTooltip>
    </div>

    )
  }

  }


export default Item