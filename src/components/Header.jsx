import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className="text-6xl font-bold bg-gray-200 p-4 rounded-xl">Coffee Shop</h1>

            <NavLink className="btn p-2 mx-2 bg-slate-300 my-2 text-white" to="/">Home</NavLink>
            <NavLink className="btn p-2 mx-2 bg-slate-300 my-2 text-white" to="/addcoffee">Add Coffee</NavLink>
            <NavLink className="btn p-2 mx-2 bg-slate-300 my-2 text-white" to="/signin">Sign In</NavLink>
            <NavLink className="btn p-2 mx-2 bg-slate-300 my-2 text-white" to="/signup">Sign Up</NavLink>
            <NavLink className="btn p-2 mx-2 bg-slate-300 my-2 text-white" to="/users">Users</NavLink>
        </div>
    );
};

export default Header;