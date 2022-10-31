import Block from "./Block"
import React, { useEffect, useState } from 'react';

export default function Body({userData, handleBacklog}) {
  return (
    <div className="main_body">
       <Block name="Backlog" type='backlog' fullData={userData} data ={userData.data[0]} addNewBackLog={handleBacklog} />
       <Block name="Ready"  type='ready' fullData={userData} data ={userData.data[1]} />
       <Block name="In Progress"  type='inProgress fullData={userData}' data ={userData.data[2]} />
       <Block name="Finished"  type='finished' fullData={userData} data ={userData.data[3]} />
    </div>
  )
}