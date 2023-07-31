import React from 'react'
import clockimg from '../../assests/bro.png'
import "./login.css";
import Form from './Form';
const Login = () => {
  return (
    <div className='home'>
    <div className='logoflex'>
    <img className='clockimg' src={clockimg} alt=''/>
    <p className='p11'>Day<span className='p21'>Task</span></p>  
    </div>
    <p className='Create_your_account'>Create your account</p>
    <Form/>

    </div>
  )
}

export default Login