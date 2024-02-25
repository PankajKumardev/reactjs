import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const[length,setlength] = useState("8") 
  const[numberAllowed,setNumberAllowed] = useState(false);
  const[characterAllowed,setCharacterAllowed] = useState(false);
  const [password,setPassword] = useState("")
 

    //useRef Hook
    const passRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += '0123456789';
    if (characterAllowed) str += '!@#$%^&*()_+-=[]{}|;:./<>?';
    for(let i =1; i<=length;i++){
      let randomIndex = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(randomIndex)
      setPassword(pass)
    }
  },[length,numberAllowed,characterAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },
    [length,numberAllowed,characterAllowed,passwordGenerator])

  return (
   <div className='w-full max-w-md mx-auto rounded-lg shadow-md px-4 py-3 my-8 text-orange-400 bg-gray-700'>

    <h1 className='text-white text-center flex-wrap m-3 '>Password Generator</h1>
    
    <div className="flex shadow rounded-lg overflow-hidden mb-4">


      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
       />

      <button className='px-3 py-0.5 bg-blue-700 text-white shrink-0 outline-none'
      onClick={copyPasswordToClipboard}
      >Copy</button> 

    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>

        <input type="range" 
        min={6}
        max={30}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        readOnly
        ref = {passRef}
        />

        <label>Length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev) => !prev);
        }}
        />

        <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={characterAllowed}
        id='characterInput'
        onChange={()=>{
          setCharacterAllowed((prev) => !prev);
        }}
        />

        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
   </div>
  )
}
export default App