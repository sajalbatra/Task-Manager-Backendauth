import React, { useState } from 'react';
import './taskform.css';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleAddTask = () => {
    if (taskText && taskDate) {
      const newTask = {
        text: taskText,
        date: taskDate,
      };
      onAddTask(newTask);
      setTaskText('');
      setTaskDate('');
    } else {
      alert('Please fill in both task and date fields.');
    }
  };

  return (
    <div className='flexing'>
      <input
        className='addtaskform'
        type="text"
        placeholder="Enter your task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <input
        className={`addtaskform addtaskformdate`}
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <button className='addtaskformbutton' onClick={handleAddTask}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default TaskForm;
