import React from "react";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App(){
  return (
    <Router>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="SignUp" element= {<SignUp/>}/>
        <Route path="Home" element= {<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App