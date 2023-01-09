import React from "react";
import { connect } from "react-redux";

class ReduxApp extends React.Component {
  addLibrary() {
    this.props.addElement(this.inputValue.value)
    this.inputValue.value = ''
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <input ref={(input) => {this.inputValue = input}} type="text"/>
        <button onClick={this.addLibrary.bind(this)}>Click</button>
        <ul>
          {this.props.libraries.map(item =>
            <li key={item}>{item}</li>
            )}
        </ul>
      </div>
    )
  }
}
export default connect(
  state => ({
    libraries:state.libraries,
    frameworks:state.frameworks
  }),
  dispatch => ({
    addElement: (element => {
      dispatch({type: 'WRITE', payload: element})
    })
  })
)(ReduxApp);