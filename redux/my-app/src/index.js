import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux"
import ReduxApp from './App-redux';
import { Provider } from 'react-redux';

const initialState = {
  libraries:['redux', 'react'],
  frameWorks: ['angular']
} 
const store = createStore(changeStore);
function changeStore(state = initialState, action) {
  console.log(state)
  switch(action.type) {
    case 'ADD_LIBRARY':
      return {
        ...state,
        libraries:[...state.libraries, action.payload]
      }
      case 'ADD_FRAMEWORK':
        return {
          ...state,
          frameworks:[...state.frameWorks, action.payload]
        }
      default: 
        return state
  }
  
}

// const items = document.querySelector('.testUL')
// const testButton = document.querySelector(".testButton")
// store.subscribe( () => {
//   items.innerHTML ='';
//   document.querySelector('.testInput').value = ''
//   store.getState().map(item => {
//     const li = document.createElement('LI');
//     li.textContent = item;
//     items.appendChild(li)
//   })
// })

// store.dispatch({
//   type:'WRITE', payload: '123'
// })

// testButton.addEventListener('click', () => {
//   const inputValue = document.querySelector(".testInput").value
//   console.log(inputValue)
//   store.dispatch({type:'WRITE', payload:inputValue})
// })
// const input2 = document.querySelector('.enterText')
// const items2 = document.querySelector('.enterUL')
// input2.addEventListener('change', (event) => {
//   store.getState().filter((item) => item.match(event.target.value)).map(filteredItem => {
//     const li = document.createElement('LI');
//     li.textContent = filteredItem;
//     items2.appendChild(li)
//   })
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <ReduxApp />
  </Provider>
);

