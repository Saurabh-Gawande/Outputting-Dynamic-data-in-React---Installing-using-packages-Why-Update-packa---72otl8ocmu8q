import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
   const [name, setName] =useState("");
   const [val , setval] = useState("____")
    function valu(e){
      setName ( e.target.value);
    }

   function Name(){
         setval(name)
    }
  return (
    <div id="main">
      <input id='input' onChange={valu}></input>
      <button id='button' onClick={Name}>Click</button>
      <p id='text'> Hello my name is {val} and I study at Newton School</p>
    </div>
  )
}


export default App;
