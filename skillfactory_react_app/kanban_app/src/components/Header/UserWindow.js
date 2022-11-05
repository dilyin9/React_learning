import { useState } from 'react';
import React from 'react';
import Avatar from 'react-avatar';
import user_avatar from '../../public/images/user_avatar.png';
import caret_span from '../../public/images/caretSpanDown.png';
import caret_span_up from '../../public/images/caretSpanUp.png';
import { useNavigate } from 'react-router-dom';

export default function UserWindow() {
  const navigate = useNavigate()
  const [icon, setIcon] = useState(caret_span)
  
  const logout = () => {
      localStorage.setItem('active_user', '')
      localStorage.setItem('isActive', JSON.stringify(false))
      navigate('/');
  } 
  return(
    <div>
    <div className="user_info">
            <Avatar color='#FFFFFF' size="40" round={true} src={user_avatar}/>
            <span className='user_span' onClick={() => {setIcon(icon === caret_span ? caret_span_up: caret_span)}}>
              <img width="18px" height="12px" src={icon}></img>
            </span>
    </div>
    {icon === caret_span_up && 
          <>
          <div className='user_menu_rectangle'></div> 
          <div className='user_menu'>
            <div className='user_menu_container'>
              <span className='user_menu_span app_text'>Profile</span>
            </div>
            <div onClick={logout} className='user_menu_container'>
              <span className='user_menu_span app_text'>Log Out</span>
            </div>
          </div>
          </>
    }
    </div>

  )
}