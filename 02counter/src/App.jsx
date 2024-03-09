import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(5)
  // let counter=15
  const addValu=()=>{
    counter=counter+1;
    if(counter>9){
      counter=9
    }
    console.log(counter)
    setCounter(counter)
    
  }
  const remValu=()=>{
    counter=counter-1;
    if(counter<0){
      counter=0;
    }
    console.log(counter)
    
    setCounter(counter)
    
  }
  return (
    <>
      
     <h1>07 MARCH REACT WOOHOO</h1>
     <h2>Counter Val: {counter}</h2>
     <button onClick={addValu}>Inc Val: {counter}</button> <br />
     <button onClick={remValu}>Dec Val {counter}</button>
    </>
  )
}

export default App
