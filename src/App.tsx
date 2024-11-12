import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home"; 
import RegistrationForm from "./component/RegistrationForm"
import { TaskList } from "./component/TaskList"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/register" element={< RegistrationForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
