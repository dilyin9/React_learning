import React from 'react'

class Sharedcomponent extends React.Component {
  render() {
    return(
      <div>
        {this.props.children({prop: 'my dafault'})}
      </div>
    )
  }
}

const RenderPropComponent = () => 
  <Sharedcomponent>
    {({ prop }) => (
      <h1>
        <b>prop</b>
      </h1>
    )}
    </Sharedcomponent>
export default RenderPropComponent