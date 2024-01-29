import React, { useState } from 'react';
import TitleLogo from '../TitleLogo.svg';
import { Link } from 'react-router-dom';


const Login = () => {
  // States for login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States for checking errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const formIsValid = email && password && emailFormat.test(email);

    setError(!formIsValid);

    if (formIsValid) {
      setSubmitted(true);
      // Here you can handle the login logic, e.g., sending the login data to your server
    }
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none' }}>
        <p className='error-container'>Please enter a valid email and password</p>
      </div>
    );
  };

  // Showing success message (for demonstration purposes, not typically used in login)
  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? '' : 'none' }}>
        <p className='label'>Login successful!</p>
      </div>
    );
  };

  return (
    <div className="login-form page-content">
      <div className='registration-logo'>
        <img src={TitleLogo} alt="Title Logo" style={{ marginRight: '0.5rem' }} />
        Statsanity
      </div>
      <h1 className="login-header">Login to your account</h1>
      <form>
        <label className="label label-email">Email</label>
        <input onChange={handleEmail} className="login-input" value={email} type="email" />

        <label className="label label-password">Password</label>
        <input onChange={handlePassword} className="login-input" value={password} type="password" />

        <button onClick={handleSubmit} className="login-btn" type="submit">
          Login
        </button>
        <div className="account-reroute">
        <label>Don't have an account? <Link to="/Signup">Create Account</Link></label>
        </div>
        <div className="error-container">
          {errorMessage()}
          {successMessage()}
        </div>
      </form>
    </div>
  );
};

export default Login;
