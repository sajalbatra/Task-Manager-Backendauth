import React from 'react'
import clockimg from '../../assests/bro.png'
import "./signin.css";
import Form from './Form';
const Login = () => {
  return (
    <div className='home'>
    <div className='logoflex'>
    <img className='clockimg' src={clockimg} alt=''/>
    <p className='p11'>Day<span className='p21'>Task</span></p>  
    </div>
    <p className='Create_your_account'>Welcome Back!</p>
    <Form/>
    <p className='or'>OR</p>
    <p className='have_an_account'>Don't have an account?<span>Sign Up</span> </p>
    </div>
  )
}

export default Login