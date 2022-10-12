import React from "react";
import Button from "./Button";
import Item from "./Item";

<<<<<<< HEAD

const do_list = [
  {taskName: "Согласовать презу", state: false, id:1, changeDate: new Date().toLocaleString().toString()},
  {taskName: "Согласовать презу", state: false, id:2, changeDate: new Date().toLocaleString().toString()},
  {taskName: "Согласовать презу", state: false, id:3, changeDate: new Date().toLocaleString().toString()},
  {taskName: "Согласовать презу", state: false, id:4, changeDate: new Date().toLocaleString().toString()},
  {taskName: "Согласовать презу", state: false, id:5, changeDate: new Date().toLocaleString().toString()},
  {taskName: "Согласовать презу", state: false, id:6, changeDate: new Date().toLocaleString().toString()}
];


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements : []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ elements: do_list });
  }

  handleCheck = ({id, state}) => {
      const elems = this.state.elements.map(item => 
        item.id === id ? {...item, state: !state, changeDate : new Date().toLocaleString().toString()} : item
      
       );
       this.setState({elements: elems});
  }
  handleClick() {
    let count = 0;
    this.state.elements.map(item => {
      item.state && count++
    })
    alert(count);
  }

  render() {
    const {elements} = this.state
    return (
      <>
      <div>
        {elements.map((elem) => {
          return(
          <Item  key={elem.id} handleCheck={this.handleCheck}>
            {elem}
          </Item>
          )
        })}
        
        </div>
        <div>
          <Button  handleClick={this.handleClick}/>
        </div>
      </>
        )

  }

=======
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
>>>>>>> b3393d915d33611f5496df5ba8c9c0de32f99d36
}

export default List;