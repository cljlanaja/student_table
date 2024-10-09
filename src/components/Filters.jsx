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

      const matchesText =
        lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        course.toLowerCase().includes(searchText.toLowerCase()) ||
        String(calculateAge(birthdate)).includes(searchText);

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
