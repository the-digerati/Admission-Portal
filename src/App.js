import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Admission from './Pages/Admission'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/register' element = {<Admission/>}/>
      </Routes>
    </Router>
  );
}

export default App;
