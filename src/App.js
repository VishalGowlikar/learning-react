import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textarea from "./components/Textarea";







function App() {
  return (
    <>
    
      <Navbar title = "TextUtils"/>
      <div className="container">
      <Textarea heading = "enter the text to analyze"/> 
       </div>
     
      
      
    
    </>
    
    
  )
}

export default App;
