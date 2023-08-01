import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import TaskForm from './TaskForm';
import clockimg from '../../assests/bro.png'
import '../Home/home.css'

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='home' >
    <div className='logoflex'  >
    <img className='clockimg' src={clockimg} alt=''/>
    <p className='p11'>Day<span className='p21' >Task</span></p>  
    </div>
    <div className='taskmanager'>
    <p className='daytask'>Day Task</p>

    <TaskForm onAddTask={handleAddTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.date} - {task.text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span onClick={() => handleRemoveTask(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Task