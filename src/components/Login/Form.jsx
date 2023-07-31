import { React, useState, useEffect, useMemo } from 'react';
import "./form.css";

const Form = () => {
  const initialFormData = useMemo(() => ({
    name: '',
    email: '',
    password: '',
  }), []);

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formSubmitted) {
      const timerId = setTimeout(() => {
        setFormData(initialFormData);
        setFormSubmitted(false);
      }, 100);

      return () => clearTimeout(timerId);
    }
  }, [formSubmitted, initialFormData]);

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs */}
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>

      {/* Submit button */}
      <p className='terms'>
        <input type="checkbox" className="check" />
        I have read & agreed to DayTask <span>Privacy Policy, Terms & Condition</span>
      </p>
      <button className="startbutton"><span>Sign Up</span></button>
    </form>
  );
};

export default Form;
