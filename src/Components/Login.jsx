import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  
  const loginWithGoogle = () => {
    
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");

    });
  }

  return (
    <>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>ログイン</button>
    </>
  )
}

export default Login