import { useState } from 'react'
import './App.css'
import Register from './Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Register />
  )
}

export default App
