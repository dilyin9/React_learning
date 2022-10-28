import React from 'react';
const currentDate = new Date().toLocaleDateString();
export default function Footer({userData}) {
  return (
    <div className="footer">
        <div>
          <span className='app_text' style={{marginLeft:20}}>{`Active tasks`}</span>
          <span className='app_text' style={{marginLeft:36}}>{`Finished tasks`} </span>
        </div>
        <div>
            <span className='app_text' style={{marginRight:20}}>{`Kanban board by ${userData.user_name} ,  ${currentDate}`}</span>
        </div>
    </div>
  )
}