import { useState  , useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length ,setLength] = useState(8)

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();

    //using to select range in password when they user to 
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*(){}[]"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() *str.length )
      pass += str.charAt(char)
    }

    setPassword(pass)



  },[length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <h1 className='text-white text-center'>Password generaor</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-5"'>
          <input 
          type="text"
          value={password}
          className='outline-none bg-white w-full py-1 px-3'
          placeholder="Password"
          readOnly
          ref = {passwordRef}
           />
           <button
           onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
          <div className='flex text-sm gap-x-2'>
            <div className="flex items-center gap-x-1">
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
               />
               <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              checked={numberAllowed}
              id='numberInput'
              onChange ={ () => {
                setNumberAllowed(prev => !prev);
              }} 
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange = {() => {
                setCharAllowed((prev) => !prev)
              }}
               />
              <label htmlFor="characterInput">Character</label>
            </div>
            
          </div>
          
      </div>
    </>
  )
}

export default App
