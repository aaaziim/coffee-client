import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import Swal from "sweetalert2";
function App() {

  const [coffee, setCoffee] = useState([])

  useEffect(()=>{
        fetch("http://localhost:5000/allcoffee")
        .then(res=> res.json())
        .then(data => setCoffee(data))
  }, [])


const handleDelete = (id) => {
    Swal.fire({
      title: `Are you sure you want to delete "${name}"?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire(
                "Deleted!",
                `"${name}" has been deleted successfully.`,
                "success"
              );
              const remaining = coffee.filter(c=> c._id !== id)
              setCoffee(remaining)
            } else {
              Swal.fire("Failed!", "Unable to delete the coffee.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting coffee:", error);
            Swal.fire("Error!", "Something went wrong. Please try again.", "error");
          });
      }
    });
  };

  return (
    <>
      <h1 className="text-6xl font-bold bg-gray-200 p-4 rounded-xl">Coffee Shop</h1>

      <Link to="/addcoffee"><button className='btn my-2'>Add Coffee</button></Link>

      <h1 className="text-6xl font-bold bg-gray-200 p-4 rounded-xl">All Coffee</h1>

      <div className='grid grid-cols-2 gap-4 '>
      
      {coffee.map(c=> <CoffeeCard key={c._id} c={c} handleDelete={handleDelete}></CoffeeCard>)}
      </div>
      
    </>
  )  
}

export default App
