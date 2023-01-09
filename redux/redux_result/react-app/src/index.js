import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import * as actions from './store/actionTypes'
import { initiateStore } from './store/store';
// //const arr = ['some','new','data']
// // function formatArray(el) {
// //   return el+' some'
// // }

// // return <h1>{arr.map(formatArray)}</h1>
// const x = 2
// const double = number => number*2;
// const square = number => number * number;
// //const half = (number)=> number/2;
// const half = (number) => number/ Math.random();
 
// const divide = (num2)=> {
//   return function(num1) {
//     return num1 / num2
//   }
// }
// const mathCalculate = compose(half,square, double, divide(3))
// //const mathCalculate = pipe(double,square, half)
// const obj1 = {id:2, name:'some name', author:{name:'some name'}}
// const obj2 = {...obj1, author:{...obj1.author}}

const store = initiateStore()

const App  = (params) => {
  const [state, setState] = useState(store.getState()) 
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  },[])
  const completeTask = (taskId) => {
    store.dispatch({
      type: actions.taskUpdated, 
      payload:{id:taskId, completed:true}
    })
 }
 const changeTitle = (taskId) => {
  store.dispatch({
    type:actions.taskUpdated, 
    payload:{id:taskId, title:`new title for ${taskId}`}
  })
 }
return <>
    <h1>App</h1>
    <ul>
      {state.map(el => 
      <li key={el.id}>
        <p>{el.title}</p>
        <p>{`Completed: ${el.completed}`}</p>
        <button onClick={() => completeTask(el.id)}>Complete</button>
        <button onClick={() => changeTitle(el.id)}>Change title</button>
      </li>)}
    </ul>
</>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

