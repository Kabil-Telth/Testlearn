import { useState } from 'react'
import './App.css'
import ThreeScene from './modal/scenecreation'
import Gamepage from './components/Gamepage'

function App() {
  const [count, setCount] = useState(0)
  console.log("pushing commit")

  return (
    <>
      <ThreeScene />
      <Gamepage/>
    </>
  )
}

export default App
