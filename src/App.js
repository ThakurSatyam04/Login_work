
import {Route, Routes} from "react-router-dom";
import {useState, useEffect} from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { auth } from "./firebase";


function App() {

  const [isLoggedIn , setIsLoggedIn]= useState(false);
  const [userName , setUserName] = useState("");

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        setUserName(user.displayName)
      }
      else{
        setUserName("");
      }
    })
  })

  return (
    <div className="bg-gray-900">
        
      <Routes>
      <Route path="/" element = {<Signup setIsLoggedIn={isLoggedIn}/>}/>
      <Route path="/login" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/signup" element = {<Signup setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/dashboard" element = {
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} name={userName}/>
        </PrivateRoute>
      }/>
      </Routes>
    </div>
  )
}

export default App;
