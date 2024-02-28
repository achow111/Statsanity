import React, { useState } from 'react';
import TitleLogo from '../images/TitleLogo.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  // States for login
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // States for checking errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const formIsValid = data.email && data.password && emailFormat.test(data.email);

    setError(!formIsValid);

    if (formIsValid) {
      setSubmitted(true);
      try {
        const response = await axios.post('/Login', {
          email: data.email,
          password: data.password,
        });
        const { data: responseData } = response;
        if (responseData.error) {
          toast.error(responseData.error);
        } else {
          // Store the token in local storage
          localStorage.setItem('token', responseData.token);
          setData({});
          toast.success('Login Successful. Welcome!')
          setTimeout(() => {
            navigate('/');
            window.location.reload();
          }, 1000); // Delay for 1 second (1000 milliseconds)
        }
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none' }}>
        <p className="error-container">Please enter a valid email and password</p>
      </div>
    );
  };



  return (
    <div className="login-form page-content">
      <div className="registration-logo">
        <img src={TitleLogo} alt="Title Logo" style={{ marginRight: '0.5rem' }} />
        Statsanity
      </div>
      <h1 className="login-header">Login to your account</h1>
      <form>
        <input
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="login-input"
          value={data.email}
          type="email"
        />

        <input
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="login-input"
          value={data.password}
          type="password"
        />

        <button onClick={handleSubmit} className="login-btn" type="submit">
          Login
        </button>
        <div className="account-reroute">
          <label>
            Don't have an account? <Link className="login-link" to="/Signup">Create Account</Link>
          </label>
        </div>
        <div className="error-container">
          {errorMessage()}
        </div>
      </form>
    </div>
  );
};

export default Login;