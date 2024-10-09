import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  const studentsData = [
    {
      lastName: "Doe",
      firstName: "John",
      course: "IT",
      birthdate: "1995/05/10",
    },
    {
      lastName: "Doe",
      firstName: "John",
      course: "IS",
      birthdate: "1995/05/10",
    },
    {
      lastName: "Smith",
      firstName: "Jane",
      course: "CS",
      birthdate: "1998/08/20",
    },
    {
      lastName: "Brown",
      firstName: "Lisa",
      course: "DS",
      birthdate: "1997/07/15",
    },
    // Add more students here
  ];

  return (
    <div>
      <h1>Student Data Table</h1>
      <StudentTable students={studentsData} />
    </div>
  );
}

export default App;
