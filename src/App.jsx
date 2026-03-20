import { useState } from 'react'
import './App.css'
import ThreeScene from './modal/scenecreation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThreeScene />
    </>
  )
}

export default App
