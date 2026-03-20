import { useState } from 'react'
import './App.css'
import ThreeScene from './modal/scenecreation'

function App() {
  const [count, setCount] = useState(0)
  console.log("pushing commit")
  console.log("againf or checkin")


  return (
    <>
      <ThreeScene />
      
    </>
  )
}

export default App
