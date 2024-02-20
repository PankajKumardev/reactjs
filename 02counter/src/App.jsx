import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(15)
  const addValue = () => {
    if(counter===20){
      continue
    } else {
    setcounter(counter+1);}
    console.log("value added", Math.random());
  }
const decreaseValue =()=>{
  setcounter(counter-1);   
}
  return (
    <>
    <h1>React JS</h1> 
    <h2>Counter Value : {counter}</h2>
    <button 
    onClick={addValue}>
    Add Value {counter}</button>
    <br />
    <button onClick={decreaseValue}>Remove Value {counter}</button>
    <p> {counter}</p>

    </>

  )
}

export default App
