import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

/* The `passwordGenerator` function is a callback function created using the `useCallback` hook. It
generates a random password based on the specified length, and whether numbers and special
characters are allowed. */
  const passwordGenerator = useCallback(()=>{
    let newPassword = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuv"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*({});"
    for (let i = 0; i < length; i++) {
      newPassword += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(newPassword)
  },
  [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{ passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
     <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          className="outline-none w-full py-1 px-3"
          placeholder='password'
          value={password}
          readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div  className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
        />
          <label>Length: {length}</label>
        </div>
        <div  className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          checked={numberAllowed}
          className='cursor-pointer'
          onChange={()=>{ setNumberAllowed((prev)=> !prev)}}
          />
          <label  htmlFor="numberInput">Numbers</label>
        </div>
        <div  className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          checked={charAllowed}
          className='cursor-pointer'
          onChange={()=>{ setCharAllowed((prev)=>!prev)}}
          />
          <label  htmlFor="charInput">Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
