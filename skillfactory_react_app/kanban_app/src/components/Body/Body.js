import Block from "./Block"
import React, { useEffect, useState } from 'react';

export default function Body({userData, handleUpdate}) {
  return (
    <div className="main_body">
       <Block name="Backlog" type='backlog' fullData={userData} data ={userData.data[0]} handleUpdate={handleUpdate} index={0}/>
       <Block name="Ready"  type='ready' fullData={userData} data ={userData.data[1]} index={1} handleUpdate={handleUpdate}/>
       <Block name="In Progress"  type='inProgress' fullData={userData} data ={userData.data[2]} index={2} handleUpdate={handleUpdate}/>
       <Block name="Finished"  type='finished' fullData={userData} data ={userData.data[3]} index={3} handleUpdate={handleUpdate}/>
    </div>
  )
}