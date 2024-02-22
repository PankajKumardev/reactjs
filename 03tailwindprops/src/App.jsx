import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Pankaj",
    age : 20
  }
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind</h1>
        <Cards username="Keiani Mabe" btnText='View Profile →'/>
        <Cards username="Raja Sharma"/>
        <Cards username= "Pankaj Kumar" btnText='View Profile →'/>

    </>
  )
}

export default App
