import './App.css';
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Alert from './Components/Alert'
import About from './Components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert(" Dark Mode has been Enabled  ", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has been Enabled  ", "success")
    }
  }
  return (
    <Router>
      <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Form showAlert={showAlert} heading="Enter your text below" mode={mode} toggleMode={toggleMode} />} />
        <Route path="/About" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App; 
