import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({ isAuth }) => {
  return (
   <nav>
    <Link to="/">ホーム</Link>
    {!isAuth ? (<Link to="/login">ログイン・会員登録</Link>)
    :
    (<Link to="/logout">ログアウト</Link>)
    }
    
    <Link to="/creatingReviewPage">体験記を投稿する</Link>
   </nav>
  )
}

export default Navbar;