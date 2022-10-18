import React from 'react';
import {useNavigate} from 'react-router-dom';


const Login=() => {

  const navigate=useNavigate()

  const login=() => {
    localStorage.setItem('user', 'true')
    navigate('/workflow')
  }

  return <div className='Login'>
    <h2> Welcome to Insight Global </h2>
    <p> Please login to continue..</p>
    <button onClick={login}> Login </button>
  </div>
}

export default Login;