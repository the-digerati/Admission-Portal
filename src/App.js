import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/home' element = {<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
