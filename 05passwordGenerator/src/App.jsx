import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const[length,setlength] = useState('8') 
  const[numberAllowed,setNumberAllowed] = useState(false);
  const[characterAllowed,setCharacterAllowed] = useState(false);
  const [password,setPassword] = useState("")
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    if (numberAllowed) str += '0123456789';
    if (characterAllowed) str += '!@#$%^&*()_+-=[]{}|;:./<>?';
    if(characterAllowed) str+="!@#$%^&*()_+-=[]{}|;':,./<>?"
    for(let i =1; i<=array.length;i++){
      let randomIndex = Math.floor(Math.random())*str.length+1
      pass = str.charAt(randomIndex)
      setPassword(pass)
    }
  
  },[length,numberAllowed,characterAllowed,setPassword])
  return (
    <h1 className='text-white text-4xl text-center'>Password Generator</h1>
  )
}
export default App