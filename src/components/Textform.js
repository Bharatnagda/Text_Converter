import React, { useState } from 'react'

export default function Textform(props) {

    const handlelowclick = ()=> {
        //console.log("lowercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
       
    }
    const handleupclick = ()=> {
      //console.log("lowercase was clicked" + text);
      let newText= text.toUpperCase();
      setText(newText)
    }
    const handleReset = ()=>{
      setText(" ");
    }
    const handleOnChange = (event)=> {
        console.log("on change");
        setText(event.target.value);
    }
   
    const [text,setText] = useState('enter text hereee');
    return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
    <div className="mb-5">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
  <button className="btn btn-success my-3" onClick={handlelowclick} >Convert Lowercase</button>
  <button className="btn btn-success mx-3" onClick={handleupclick} >Convert Uppercase</button>
  <button className="btn btn-success mx-3" onClick={handleReset} >Reset</button>

  </div>
  <div className="container">
    <h3>Your Result is :</h3>
    <p> {text.split(" ").length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to Read</p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
</div>

</>
  )
}
