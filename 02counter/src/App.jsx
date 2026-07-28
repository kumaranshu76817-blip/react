import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  //hooks in react
  let [counter, setCounter] = useState(15)


  // let counter = 15

  const addValue = () => {
    counter = counter + 1
    console.log("Clicked", counter);
    setCounter(counter)
  }

  const removeValue = () =>{
    setCounter(counter -1)
  }

  return (
    <>
     <h1>Anshu aur react</h1>
     <h2>counter value: {counter}</h2>
     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button onClick={removeValue}>remove Value {counter}</button>
     <p>footer {counter}</p>
    </>
  )
}

export default App
