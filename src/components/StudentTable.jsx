import React, { useState } from "react";
import Table from "./Table";
import Filters from "./Filters";

const calculateAge = (birthdate) => {
  const birthDateObj = new Date(birthdate);
  const diff = Date.now() - birthDateObj.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const StudentTable = ({ students }) => {
  const [filteredData, setFilteredData] = useState(students);

  return (
    <div>
      <Filters students={students} setFilteredData={setFilteredData} />
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Last Name</Table.ColumnHeader>
            <Table.ColumnHeader>First Name</Table.ColumnHeader>
            <Table.ColumnHeader>Course</Table.ColumnHeader>
            <Table.ColumnHeader>Birthdate</Table.ColumnHeader>
            <Table.ColumnHeader>Age</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>
        <Table.TBody>
          {filteredData.map((student, index) => (
            <Table.Row key={index}>
              <Table.Column>{student.lastName}</Table.Column>
              <Table.Column>{student.firstName}</Table.Column>
              <Table.Column>{student.course}</Table.Column>
              <Table.Column>{student.birthdate}</Table.Column>
              <Table.Column>{calculateAge(student.birthdate)}</Table.Column>
            </Table.Row>
          ))}
        </Table.TBody>
      </Table.TableContainer>
    </div>
  );
};

export default StudentTable;
