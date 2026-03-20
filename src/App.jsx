import { useState } from 'react'
import './App.css'
import ThreeScene from './modal/scenecreation'
import Gamepage from './components/Gamepage'

function App() {
  const [count, setCount] = useState(0)
  console.log("pushing commit")
  console.log("againf or checkin")
  console.log("third change amde")
  console.log("fourth local test")
  console.log("fifth from local ")
  console.log("sixth remote")
  console.log("7th log local")
  console.log("8th local test")
  console.log("hello from dev bracnh bro")

  return (
    <>
      <ThreeScene />
      <Gamepage/>
    </>
  )
}

export default App
