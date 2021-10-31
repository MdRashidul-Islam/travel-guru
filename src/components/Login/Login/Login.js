import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import logo from '../../../images/google.png';

const Login = () => {
  const {signInWithGoogle, setIsLoading}= useAuth();
  const location= useLocation();
  const history = useHistory();
  const redirect_url= location.state?.from || '/home'

  const handleGoogle=()=>{
    signInWithGoogle()
    .then((result) => {
      history.push(redirect_url)
    })
    .finally(()=> setIsLoading(false));
  }

  return (
    <div className="Login-container mt-5">
      <div className="Login">
        <button onClick={handleGoogle} className="mt-5 d-block mx-auto booked-btn"><img width="30px" src={logo} alt="" /> Login With Google</button>
      </div>
    </div>
  );
};

export default Login;