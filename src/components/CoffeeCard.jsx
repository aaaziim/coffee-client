import React from "react";
import c1 from "../assets/1.png";
import { Link } from "react-router-dom";


const CoffeeCard = ({ c,handleDelete }) => {
  const { name, description, type, price, _id } = c;

 
  return (
    <div className="bg-slate-400 p-4 rounded-xl font-xl my-2 space-y-3">
      <div className="flex">
        <div>
          <img src={c1} alt="" />
          <h2 className="text-2xl font-bold">{name}</h2>
          <h2>{description.slice(0, 10)}...</h2>
          <h2>{type}</h2>
          <h2>{price}</h2>
        </div>
        <div className="flex flex-col justify-around">
          <Link to={`/updatecoffee/${_id}`}>
            <button className="btn bg-sky-300 border-0 text-white font-thin">
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-300 border-0 text-white font-thin"
          >
            Delete
          </button>
          <Link>
            <button className="btn bg-green-300 border-0 text-white font-thin">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
