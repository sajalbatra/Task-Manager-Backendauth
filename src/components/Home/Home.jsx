import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./home.css"
import clock from '../../assests/bro.png'
import bgimage from '../../Colours/1.svg'

const Home = () => {
  const navigate = useNavigate();
  const ButtonClick=()=>{
    navigate('/signin');
    console.log("button working");
  } 
  return (
    <div className='home'>
    <img className='img' src={clock} alt=''/>
    <p className='p1'>Day<span className='p2'>Task</span></p>  
    <img className='bgimage' src={bgimage} alt=''/>
    <p className='Bodytext'>
      Manage
      your 
      Task with 
      <span>DayTask</span>
    </p>
    
      <button className="startbutton" onClick={ButtonClick}><span>Let's Start</span></button>
    
    </div>
  )
}

export default Home