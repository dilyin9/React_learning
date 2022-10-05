import './App.css';
import List from './components/List';
import Button from './components/Button';

const do_list = [
  {taskName: "Согласовать презу", state: false, id:1},
  {taskName: "Согласовать презу", state: false, id:2},
  {taskName: "Согласовать презу", state: false, id:3},
  {taskName: "Согласовать презу", state: false, id:4},
  {taskName: "Согласовать презу", state: false, id:5},
  {taskName: "Согласовать презу", state: false, id:6}
]
let done_list = [];

function App() {
  return (
    <div>
    <h2>ToDoList</h2>
    <List prop={do_list}/>
    <Button />
    </div>
  )
}

export default App;
