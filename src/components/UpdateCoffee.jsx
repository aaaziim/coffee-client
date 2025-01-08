import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const { id } = useParams();
    const [coffee, setCoffee] = useState(null);

    useEffect(() => {
        // Fetch coffee details by id from the backend
        fetch(`http://localhost:5000/coffee/${id}`)
          .then((res) => res.json())
          .then((data) => setCoffee(data))
          .catch((error) => console.error("Error fetching coffee details:", error));
      }, [id]);


      const handleUpdate = (e) =>{
        e.preventDefault();
        const name = e.target.coffee_name.value;
        const description = e.target.coffee_description.value;
        const type = e.target.coffee_type.value;
        const price = e.target.coffee_price.value;
      
        const doc = { name, description, type, price };




        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to update this coffee item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!",
          })
          .then(result=>{
                if(result.isConfirmed){
                    fetch(`http://localhost:5000/coffee/${id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(doc),
                    })
                    .then(res=>res.json())
                    .then(data => {
                        if(data.acknowledged){
                            Swal.fire(
                                "Updated!",
                                "Coffee item has been updated successfully.",
                                "success"
                              );
                        }
                        else {
                            Swal.fire("Failed!", "Unable to update the coffee.", "error");
                          }
                    })
                }
          })



        

      

      }
    
      if (!coffee) return <div>Loading...</div>;
    



    return (
        <div>
             <h1 className="text-6xl font-bold bg-gray-200 p-4 rounded-xl">
        Update Coffee
      </h1>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Update Coffee
        </h2>
        <form onSubmit={handleUpdate} >
          <div className="mb-4">
            <label
              htmlFor="coffee-name"
              className="block text-sm font-medium text-gray-700"
            >
              Coffee Name
            </label>
            <input
              type="text"
              id="coffee-name"
              name="coffee_name"
              defaultValue={coffee.name}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="coffee-description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="coffee-description"
              name="coffee_description"
              defaultValue={coffee.description}

              required
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="coffee-type"
              className="block text-sm font-medium text-gray-700"
            >
              Coffee Type
            </label>
            <select
              id="coffee-type"
              name="coffee_type"
              defaultValue={coffee.type}

              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            >
              <option value="">Select Coffee Type</option>
              <option value="Espresso">Espresso</option>
              <option value="Latte">Latte</option>
              <option value="Cappuccino">Cappuccino</option>
              <option value="Americano">Americano</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="coffee-price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="coffee-price"
              name="coffee_price"
              defaultValue={coffee.price}

              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Update Coffee
            </button>
          </div>
        </form>
      </div> 
        </div>
    );
};

export default UpdateCoffee;