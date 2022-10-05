import React from "react";


class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkbox_state: false,
      task_state: "new"
    }
  }

  handler = () => {
    this.setState({
      checkbox_state: !this.state.checkbox_state
    })
  }
  render() {
    return(
    <div key={this.props.obj.id}>
    <label>{this.props.obj.taskName}</label>
    <input type="checkbox" checked={this.state.checkbox_state}
      onChange={this.handler}
    />
    </div>
    )
  }

  }


export default Item