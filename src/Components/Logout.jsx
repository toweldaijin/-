import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  
  const logoutFromGoogle = () => {

    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login")
    });

    
  };

  return (
    <>
      <p>ログアウトする</p>
      <button onClick={logoutFromGoogle}>ログアウト</button>
    </>
  )
}

export default Logout