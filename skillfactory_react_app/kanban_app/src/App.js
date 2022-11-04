import './App.css';
import Login from './components/Log_In/Login.js';
import Main from './components/Main/Main.js';
import TaskInfo from './components/Body/TaskInfo';
import {Route, Routes} from 'react-router-dom';
import Body from './components/Body/Body';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='main/*' element={<Main />} />
          {/* <Route path='desk' element={<Body />} />
          <Route path=":id" element={<TaskInfo />} /> 
        </Route> */}
      </Routes>
  )
}

export default App;
