import React from 'react'
import { Link } from 'react-router-dom';
import clockimg from '../../assests/bro.png'
import "./signin.css";
import Form from './Form';
const Signin = () => {
  return (
    <div className='home'>
    <div className='logoflex'>
    <img className='clockimg' src={clockimg} alt=''/>
    <p className='p11'>Day<span className='p21'>Task</span></p>  
    </div>
    <p className='Create_your_account'>Welcome Back!</p>
    <Form/>
    <p className='or'>OR</p>
    <p className='have_an_account'>
        Don't have an account?{' '}
        <Link to='/login' className='Link'><span>Sign Up</span></Link>
      </p>
    </div>   
  )
}

export default Signin