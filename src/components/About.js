import React,{useState} from "react";

export default function About() {
  
    const [naam, setNaam] = useState("Bharat")

    const handleChange=(event)=>{
        setNaam(event.target.value)
    }

const handleNaam = ()=>{
    if({naam}=="Bharat"){
       setNaam("Yashwin");
    }
    else{
        setNaam("mahipal");

    }
}
    return (
    <div className="container" >
      <div className="input-group mb-3">
        <button
        onClick={handleNaam}
        
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Button
        </button>
        <input
            onChange={handleChange}
            value={naam}
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />{naam}
      </div>
      </div>
  );
}
