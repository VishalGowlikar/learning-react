import React, {useState} from 'react'



export default function Textarea(props) {
    const handleUpClick = () =>{
        console.log( "i have clicked the upper click button" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnchange = (event)=>{
        console.log("onChange")
        setText(event.target.value)
    }
    const [text , setText]= useState('enter the text');
    return (
    <div>
    <h1>{props.heading}</h1>
    <div className="my-3">
    <textarea className="form-control" value={text} onChange={handleOnchange}   id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}  >Convert to Uppercase</button>
    </div>
            
    
  )
}
