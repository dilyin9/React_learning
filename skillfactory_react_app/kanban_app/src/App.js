import './App.css';
import Login from './components/Log_In/Login.js';
import Main from './components/Main/Main.js';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="main" element={<Main />}/>
      </Routes>
  )
}

export default App;
