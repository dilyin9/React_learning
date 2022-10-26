import { useState } from 'react';
import React from 'react';
import Avatar from 'react-avatar';
import user_avatar from '../../public/images/user_avatar.png';
import caret_span from '../../public/images/caretSpanDown.png';
import caret_span_up from '../../public/images/caretSpanUp.png';

export default function UserWindow() {
  const [icon, setIcon] = useState(caret_span)
   
  return(
    <div>
    <div className="user_info">
            <Avatar color='#FFFFFF' size="40" round={true} src={user_avatar}/>
            <span className='user_span' onClick={() => {setIcon(icon === caret_span ? caret_span_up: caret_span)}}>
              <img src={icon}></img>
            </span>
    </div>
    {icon === caret_span_up && 
          <>
          <div className='user_menu_rectangle'></div> 
          <div className='user_menu'>
            <span className='user_menu_span app_text'>Profile</span>
            <span className='user_menu_span app_text'>Log Out</span>
          </div>
          </>
    }
    </div>

  )
}