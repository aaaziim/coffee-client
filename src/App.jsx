import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-6xl font-bold bg-gray-200 p-4 rounded-xl">Coffee Shop</h1>

      <Link to="/addcoffee"><button className='btn my-2'>Add Coffee</button></Link>
      
    </>
  )  
}

export default App
