import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<LoginPage/>} />
        <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
          </Route>
      </Routes>
    </Router>
  );
}


export default App;
