import React from 'react'
import "./home.css"
import clock from '../../assests/bro.png'
import bgimage from '../../Colours/1.svg'
const ButtonClick=()=>{
  console.log("button working");
} 
const Home = () => {
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
      <button class="startbutton" onClick={ButtonClick}><span>Let's Start</span></button>
    </div>
  )
}

export default Home