import React, { useState, useEffect } from "react";

const Filter = ({ students, setFilteredData }) => {
  const [searchText, setSearchText] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    handleFilter();
  }, [searchText, minDate, maxDate]);

  const handleFilter = () => {
    let filtered = students.filter((student) => {
      const { lastName, firstName, course, birthdate } = student;
      const birthDateObj = new Date(birthdate);

      const searchLower = searchText.toLowerCase();

      // Check name match (allow partial match)
      const matchesName =
        lastName.toLowerCase().includes(searchLower) ||
        firstName.toLowerCase().includes(searchLower);
      
      // Check course match (partial match)
      const matchesCourse = course.toLowerCase().includes(searchLower);
      
      // Check age match (partial match)
      const matchesAge = String(calculateAge(birthdate)).includes(searchLower);
      
      // Check if it matches the text filter (name, course, or age)
      const matchesText = matchesName || matchesCourse || matchesAge;
      
      // Check if it matches the date range
      const matchesDate =
        (!minDate || new Date(minDate) <= birthDateObj) &&
        (!maxDate || new Date(maxDate) >= birthDateObj);
      
      return matchesText && matchesDate;
    });

    setFilteredData(filtered);
  };

  const calculateAge = (birthdate) => {
    const birthDateObj = new Date(birthdate);
    const diff = Date.now() - birthDateObj.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by Last Name, First Name, Course, Age"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <input
        type="date"
        placeholder="Min Date"
        value={minDate}
        onChange={(e) => setMinDate(e.target.value)}
      />
      <input
        type="date"
        placeholder="Max Date"
        value={maxDate}
        onChange={(e) => setMaxDate(e.target.value)}
      />
    </div>
  );
};

export default Filter;
