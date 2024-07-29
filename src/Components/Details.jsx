import React, { useState } from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import "./Details.css";
import Create from "./Create.jsx";
import { Link, useNavigate  } from "react-router-dom";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function Details() {
  
  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);

  const navigate =useNavigate()

  useEffect(() => {
    fetch("http://localhost:3000/Data.json")
      .then((res) => res.json())
      .then((data) => {
        setColumn(Object.keys(data.users[0]));
        setRecords(data.users);
      });
  }, []);


  
  return (
    
    <div>
      <Navbar />
      <Link to='/create'>
        <button id="create">Create Employee</button>
      </Link>
      <table>
        <thead>
          <tr>
            <td>Unique id</td>
            <td>Image</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile No</td>
            <td>Role</td>
            <td>Gender</td>
            <td>Course</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {records.map((records, i) => (
            <tr key={i}>
              <td>{records.id}</td>
              <td>{records.img}</td>
              <td>{records.name}</td>
              <td>{records.email}</td>
              <td>{records.mobile}</td>
              <td>{records.designation}</td>
              <td>{records.gender}</td>
              <td>{records.course}</td>
              <td>{records.date}</td>
              <td><button><Link to='/edit' id="btn">Edit</Link></button><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Details;
