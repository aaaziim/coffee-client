import React from "react";
import Swal from "sweetalert2";

const handleAddCoffee = async (e) => {
  e.preventDefault();
  const name = e.target.coffee_name.value;
  const description = e.target.coffee_description.value;
  const type = e.target.coffee_type.value;
  const price = e.target.coffee_price.value;

  const doc = { name, description, type, price };

  try {
    const response = await fetch("http://localhost:5000/addcoffee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });

    if (!response.ok) {
      throw new Error("Failed to add coffee");
    }

    const data = await response.json();
    console.log(data);

    Swal.fire({
      title: "Success!",
      text: "Coffee added successfully!",
      icon: "success",
      confirmButtonText: "OK",
      buttonsStyling: false,
      customClass: {
        popup: "bg-white rounded-lg shadow-lg p-4",
        title: "text-lg font-bold text-gray-800",
        content: "text-sm text-gray-600",
        confirmButton:
          "bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none",
      },
    });
  } catch (error) {
    console.error(error);

    Swal.fire({
      title: "Error!",
      text: "Something went wrong. Please try again.",
      icon: "error",
      confirmButtonText: "OK",
      buttonsStyling: false,
      customClass: {
        popup: "bg-white rounded-lg shadow-lg p-4",
        title: "text-lg font-bold text-red-800",
        content: "text-sm text-gray-600",
        confirmButton:
          "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none",
      },
    });
  }
};

const AddCoffee = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold bg-gray-200 p-4 rounded-xl">
        Add Coffee
      </h1>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add a Coffee
        </h2>
        <form onSubmit={handleAddCoffee}>
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
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
