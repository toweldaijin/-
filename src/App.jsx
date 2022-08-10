
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Logout from './Components/Logout';
import CreatingReviewPage from './Components/CreatingReviewPage';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return(
    <>
      <Router>
        <Navbar isAuth={isAuth}></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
          <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
          <Route path="/creatingReviewPage" element={<CreatingReviewPage />}></Route> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
