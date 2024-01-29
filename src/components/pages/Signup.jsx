import React, { useState } from 'react';
import TitleLogo from '../TitleLogo.svg'
import { Link } from 'react-router-dom';


const Signup = () => {
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
      };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the confirm password change
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

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
        <p className='label'>{name} successfully registered!!</p>
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
      <label className="label label-name">Name</label>
      <input onChange={handleName} className="resgistration-input" value={name} type="text" />

      <label className="label label-email">Email</label>
      <input onChange={handleEmail} className="resgistration-input" value={email} type="email" />

      <label className="label label-password">Password</label>
      <input onChange={handlePassword} className="resgistration-input" value={password} type="password" />

      <label className="label label-password">Confirm Password</label>
      <input
        onChange={handleConfirmPassword}
        className="resgistration-input"
        value={confirmPassword}
        type="password"
      />

      <button onClick={handleSubmit} className="registration-btn" type="submit">
        Create Account
      </button>

      <div className="error-container">
          {errorMessage()}
          {successMessage()}
          <div className="account-reroute">
        <label>Already have an account? <Link className="" to="/Login">Login</Link></label>
        </div>
      </div>
    </form>
  </div>
  );
};

export default Signup;
