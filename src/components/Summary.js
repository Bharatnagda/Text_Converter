import React,{useState} from 'react'

export default function Summary() {

  const handleclick = () =>{
    setName("Welcome:")
  }


  const handleOnChange = (event)=> {
    setName(event.target.value);
}


  const [name, setName] = useState("Welcome:");

  return (
    <div>
      <input type="text" onChange={handleOnChange} placeholder="Enter your name"/>
      <p>Welcome : {name}</p>
      <button onClick={handleclick}>
        Click me
      </button>
    </div>
  );
}
