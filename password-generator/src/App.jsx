import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // ------------States--------------
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null)

  // ---------Password-Generator-------------
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!#$@&%~?₹-"

    for (let i = 1 ; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)   
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
     <div className=' p-5 bg-blue-400  '  >
      <h1 className='text-3xl text-white font-bold'>Password Generator</h1>
      <br />
      <div>
        <input type="text" value={password} placeholder='password' readOnly ref={passwordRef} className='p-2   bg-blue-100 rounded-lg' />
        <button onClick={copyPasswordToClipboard} className='p-2 bg-red-500 rounded-lg ml-2 text-white'>Copy</button>
      </div>
      {/* range */}
      <div>
        <input type="range" className='' min={8} max={100} value={length} 
        onChange={(e) => {setLength(e.target.value)}} />
        <label>Length : {length} </label>
      </div>
      {/* number */}
      <div>
        <input type="checkbox" 
        className=''
        defaultChecked={numberAllowed} 
        id ="numberInput" 
        onChange={ () => {
          setNumberAllowed((prev) => !prev);
        }} />
        <label htmlFor="numberInput">Number</label>
      </div>
      {/* character */}
      <div>
        <input type="checkbox" 
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={() => {
          setCharAllowed((prev) => !prev)
        }}
       />
        <label htmlFor="characterInput">Characters</label>
      </div>
      <button className='p-2 bg-slate-100 rounded-md '
      onClick={() =>{
        passwordGenerator()
      }}
      >Generate New</button>
     </div>
    </>
  )
}

export default App
