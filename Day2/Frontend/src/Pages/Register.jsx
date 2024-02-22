import React, { useState } from 'react'
import '../Assests/CSS/Styles.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
function Register() {
  const [username,setUsername]=useState("");
  const [emailid,setEmailid]=useState("");
  const [mobileno,setMobileno]=useState("");
  const [password,setPassword]=useState("");
  const nav= useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      username,
      emailid,
      password,
      mobileno
    };
    
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", userData);
    
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        nav("/")
      } else {
        toast.warning(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      console.log(username,password,mobileno,emailid);
    }
  };
  return (
    <>
    <div className='container'>
    <div className="background1">
    <div className="shape"></div>
    <div className="shape"></div>
</div>
<ToastContainer/>
<form className='signup' onSubmit={handleSubmit}>
    <h3>Join Here</h3>

    <label>Username</label>
    <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
    <label>Mail Id</label>
    <input type="email" placeholder="E-Mail Id"  value={emailid} onChange={(e)=>setEmailid(e.target.value)} required/>
    <label>Mobile No</label>
    <input type="tel" placeholder="Mobile No"  pattern="[6789][0-9]{9}" minLength={10}  maxLength={10} value={mobileno} onChange={(e)=>setMobileno(e.target.value)} required/>
    <label>Password</label>
    <input type="password" placeholder="Password" minLength={8} maxLength={16} value={password} onChange={(e)=>setPassword(e.target.value)} required/>
  

    <button type='submit' className="btn btn-secondary" >Join</button>
    
   <Link to='/' style={{textDecoration:'none'}}><h6>I have already Joined..</h6></Link> 
    </form>
</div>
    </>
  )
}

export default Register