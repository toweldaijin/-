import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = ({ setIsAuth }) => {

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
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