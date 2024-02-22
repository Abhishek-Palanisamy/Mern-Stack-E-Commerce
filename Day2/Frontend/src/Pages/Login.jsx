import React, { useState } from 'react'
import '../Assests/CSS/Styles.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { login } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';
import {Link, useNavigate } from 'react-router-dom';

function Login() {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const nav = useNavigate();
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      if(emailid && password ){
        const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
          emailid,
          password,
        });
        if (res && res.data.success) {
     
          const { username } = res.data; // Assuming the backend returns the username
      dispatch(login(username));
        toast.success(res.data && res.data.message);
        // setAuth({
        //   ...auth,
        //   user: res.data.user,
        //   token: res.data.token,
        // });
        //  localStorage.setItem("auth", JSON.stringify(res.data));
         nav("/home")
      } else {
        toast.error(res.data.message);
      }
    }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
    <div className='container'>
    <div className="background1">
    <div className="shape1"></div>
    <div className="shape1"></div>
</div>
<ToastContainer/>
<form className='login' onSubmit={handleSubmit1}>
    <h3>Welcome Back</h3>

    <label>Email ID</label>
    <input type="email" placeholder="Email ID" value={emailid} onChange={(e)=>setEmailid(e.target.value)} required/>

    <label>Password</label>
    <input type="password" placeholder="Password" minLength={8} maxLength={16} value={password} onChange={(e)=>setPassword(e.target.value)} required/>
<h5>Forgot Password?</h5>
    <button type='submit' className="btn btn-secondary" >Log In</button>
    
    <Link to='/register' style={{textDecoration:'none'}}> <h6>Join in our Family..</h6></Link>
    </form>
</div>
    </>
  )
}

export default Login