import React, { useState } from 'react';
import TitleLogo from '../TitleLogo.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  // States for registration
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = data

    try {
      const {data} = await axios.post('/Signup', {
        name, email, password
      })
      if (data.error){
      toast.error(data.error)
      } else {
        setData({})
        toast.success('Login Successful. Welcome!')
        navigate('/Login')
      }
    } catch (error) {
      console.log(error)
    }


    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isNameValid = /^[a-zA-Z\s]+$/.test(name);

    const formIsValid =
      name &&
      email &&
      password === confirmPassword &&
      emailFormat.test(email) &&
      isNameValid;

    setError(!formIsValid);

    if (formIsValid) {
      setSubmitted(true);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}
      >
        <p className='success-container'>{name} successfully registered!!</p>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}
      >
        <p className='error-container'>Please enter all the fields correctly</p>
      </div>
    );
  };

  return (
    <div className="registration-form page-content">
      <div className='registration-logo'>
        <img src={TitleLogo} alt="Title Logo" style={{ marginRight: '0.5rem' }} />
        Statsanity
      </div>
      <h1 className="registration-header">Sign up for free</h1>
      <form>
        <input
          placeholder='Name'
          onChange={(e) =>
            setData({ ...data, name: e.target.value })}
          className="resgistration-input"
          value={data.name}
          type="text" />

        <input
          placeholder='Email'
          onChange={(e) =>
            setData({ ...data, email: e.target.value })}
          className="resgistration-input"
          value={data.email}
          type="email" />

        <input
          placeholder='Password'
          onChange={(e) =>
            setData({ ...data, password: e.target.value })}
          className="resgistration-input"
          value={data.password}
          type="password" />

        <input
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="resgistration-input"
          value={confirmPassword}
          type="password"
        />

        <button onClick={handleSubmit}
          className="registration-btn"
          type="submit">

          Create Account
        </button>
        <div className="account-reroute">
          <label>Already have an account? <Link className="regis-link" to="/Login">Login</Link></label>
        </div>
        <div className="error-container">
          {errorMessage()}
          {successMessage()}
        </div>
      </form>
    </div>
  );
};

export default Signup;
