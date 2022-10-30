import Block from "./Block"
import React, { useEffect, useState } from 'react';

export default function Body({userData, handleBacklog}) {
  return (
    <div className="main_body">
       <Block name="Backlog" type='backlog' data ={userData.data[0]} addNewBackLog={handleBacklog} />
       <Block name="Ready"  type='ready' data ={userData.data[1]} />
       <Block name="In Progress"  type='inPrpgress' data ={userData.data[2]} />
       <Block name="Finished"  type='finished' data ={userData.data[3]} />
    </div>
  )
}