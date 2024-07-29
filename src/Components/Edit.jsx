import React, {useState} from 'react'
import Navbar from "./Navbar";
import "./Create.css";
import {useNavigate} from 'react-router-dom'

function Edit() {
  let navigate =useNavigate()
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [number,setNumber]=useState("")
const [designation,setDesignation]=useState("")
const [gender,setGender]=useState("")
const [course,setCourse]=useState("")
const [image,setImage]=useState("")


let handleSubmit=(e)=>{
  e.preventDefault()
  let newEmployee={name,email,number,designation,gender,course,image}
  fetch("http://localhost:3000/Data.json",
    {
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(newEmployee)
    }
  ).then(()=>{
    alert('Added');
    navigate("/dashboard")
  })
}
  return (
    <>
    <Navbar />
    <h2>Edit Employee</h2>
    <form action="" id="cform" onSubmit={handleSubmit}>

      <label htmlFor="" id="clabel">Name</label>
      <input type="text"  id="cinput" value={name} onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <label htmlFor="" id="clabel">Email</label>
      <input type="email"  id="cinput" value={email} onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <label htmlFor="" id="clabel">Mobile No</label>
      <input type="tel"  id="cinput" value={number} onChange={(e)=>{
        setNumber(e.target.value)
      }}/>
      <label htmlFor="" id="clabel">Designation</label>
      <input type="text"  id="cinput" value={designation} onChange={(e)=>{
        setDesignation(e.target.value)
      }}/>
      <label htmlFor="" id="clabel">Gender</label>
      <input type="text"  id="cinput" value={gender} onChange={(e)=>{
        setGender(e.target.value)
      }}/>
      <label htmlFor="" id="clabel">Course</label>
      <input type="text"  id="cinput" value={course} onChange={(e)=>{
        setCourse(e.target.value)
      }}/>
      <label htmlFor="" id="clabel">Image</label>
      <input type="url"  id="cinput" value={image} onChange={(e)=>{
        setImage(e.target.value)
      }}/>
    </form>
    <button  onClick={handleSubmit} id='cbutton'>Submit</button>
 

  </>
  );
}

export default Edit