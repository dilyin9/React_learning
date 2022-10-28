import Block from "./Block"
import React, { useEffect, useState } from 'react';

export default function Body({userData}) {
  const [blocksData, setBlocksData] = useState('');
  useEffect(() => {
      const structure = {
        backlog:null, ready: null, inProgress: null, finished: null
      }
      if (userData.data) {
        for (let item of userData.data) {
          console.log(item);
          structure[item.title] = item.data;
        }
      }
      setBlocksData(structure);
  }, []);
  console.log(blocksData);
  return (
    <div className="main_body">
       <Block name="Backlog" type="WITH_ADD" />
       <Block name="Ready" />
       <Block name="In Progress" type="WITH_ADD"/>
       <Block name="Finished" type="WITH_ADD"/>
    </div>
  )
}