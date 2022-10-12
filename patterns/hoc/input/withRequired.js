import React, { Component } from "react";
import { InputGroup } from "./InputGroup";

const withrequired = (Component, requiredKeys) => {
  return class withrequired extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isInvalid: false
      }
    }

    handleInput(event) {
      this.setState({[event.target.name]: event.target.value})
    }

    handleClick() {
      const isInvalid = requiredKeys.some(key => !this.state[key])
      this.setState = ({isInvalid})
    }

    render() {
      return(
        <>
          <Component 
            onChange = {e => this.handleInput(e)}
            onClick = {() => this.handleClick()}
          />
          {this.state.isInvalid && 'Error'}
        </>
      )
    }
  }
}
export const InputWithName = withrequired(InputGroup, ["first_name"])
export const InputWithNameEmail = withrequired(InputGroup, ["first_name", "email"])