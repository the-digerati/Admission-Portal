import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Admission from './Pages/Admission'
import Quiz from './Pages/Quiz'
import Fees from './Pages/Fees'

function App() {
  return (
    <Router>
      <Routes>
        {/* Routing Path to different Pages */}
        <Route path='/' element = {<Login/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/register' element = {<Admission/>}/>
        <Route path='/quiz' element = {<Quiz/>}/>
        <Route path='/pay-fees' element = {<Fees/>}/>
      </Routes>
    </Router>
  );
}

export default App;
