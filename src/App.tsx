import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import NewStudent from './pages/NewStudents/newStudent';
import SubmissionComplete from './pages/NewStudents/doneSub';
import OldStudent from './pages/OldStudents/oldStudent';
import OldStudentForm from './pages/OldStudents/OSForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-student" element={<NewStudent />} />
        <Route path="/old-student" element={<OldStudent />} />
        <Route path="/old-student-form/:studentID" element={<OldStudentForm />} />
        <Route path="/done-sub" element={<SubmissionComplete />} />
      </Routes>
    </Router>
  );
}

export default App;
