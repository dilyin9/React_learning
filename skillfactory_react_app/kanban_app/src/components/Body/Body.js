import Block from "./Block"
import React from 'react';

export default function Body() {
  return (
    <div className="main_body">
       <Block name="Backlog" type="WITH_ADD" />
       <Block name="Ready" />
       <Block name="In Progress" type="WITH_ADD"/>
       <Block name="Finished" type="WITH_ADD"/>
    </div>
  )
}