
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  const [isLoggedIn , setIsLoggedIn]= useState(false);

  return (
    <>
      <Routes>
      <Route path="/" element = {<Login isLoggedIn={isLoggedIn}/>}/>
      <Route path="/login" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/signup" element = {<Signup setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/dashboard" element = {
        // <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
        // </PrivateRoute>
        }/>
      </Routes>
    </>
  )
}

export default App;
