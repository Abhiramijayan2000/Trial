import React, { useState } from 'react'

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleInputChange = (event)=>{
    const{name,value} = event.target
    setFormData((prevData)=>({...prevData,[name]:value}))
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(formData,"the input data ")
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>First Name</label>
        <input type='text' placeholder='First Name' name='firstName' value={formData.firstName} onChange={(event) => handleInputChange(event)} /><br></br>

        <label htmlFor=''>Last Name</label>
        <input type='text' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={(event) => handleInputChange(event)}/><br></br>

        <label htmlFor=''>Email</label>
        <input type='text' placeholder='Email' name='email' value={formData.email} onChange={(event) => handleInputChange(event)}/><br></br>

        <label htmlFor=''>Password</label>
        <input type='password' placeholder='Password' name='password' value={formData.password} onChange={(event) => handleInputChange(event)}/><br></br>

        <button type='Submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
