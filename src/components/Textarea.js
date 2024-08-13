import React, {useState} from 'react'



export default function Textarea(props) {
    const handleUpClick = () =>{
        console.log( "i have clicked the upper click button" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick = () =>{
        console.log( "i have clicked the upper click button" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleOnchange = (event)=>{
        console.log("onChange")
        setText(event.target.value)
    }
    const handleCopy =()=>{
        console.log("i have copied the whole text")
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text , setText]= useState('');
    return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="my-3">
    <textarea className="form-control" value={text} onChange={handleOnchange}   id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}  >Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleloClick}  >Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}  >copy text</button>
   


    </div>
    <div className="container">
        <h1>your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008*text.split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
            
    
  )
}
