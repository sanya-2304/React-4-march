import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';
function App() {
  const [count, setCount] = useState(0)
    let myObj={
      name:"chamkila", 
      job:"singer"
    }
    let arr=[1,2,3]
  return (
    <>
    
      <h1 className='bg-green-400 text-blue-900 p-8 rounded-3xl mb-4'>Tailwind Test</h1>
      <Card username="Amar singh Chamkila" someObj={arr} btnText="Male Singer"/>
      <Card username="Amarjot" btnText="Female Singer"/>
      <Card />
    </>
  )
}

export default App
