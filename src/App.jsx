import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {

  const [coffee, setCoffee] = useState([])

  useEffect(()=>{
        fetch("http://localhost:5000/allcoffee")
        .then(res=> res.json())
        .then(data => setCoffee(data))
  }, [])

  return (
    <>
      <h1 className="text-6xl font-bold bg-gray-200 p-4 rounded-xl">Coffee Shop</h1>

      <Link to="/addcoffee"><button className='btn my-2'>Add Coffee</button></Link>

      <h1 className="text-6xl font-bold bg-gray-200 p-4 rounded-xl">All Coffee</h1>

      <div className='grid grid-cols-2 gap-4 '>
      
      {coffee.map(c=> <CoffeeCard key={c._id} c={c}></CoffeeCard>)}
      </div>
      
    </>
  )  
}

export default App
