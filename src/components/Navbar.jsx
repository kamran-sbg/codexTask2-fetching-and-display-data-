import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-slate-500 text-white text-lg">
      <nav className="flex justify-between p-4">
        <h1 className="text-3xl font-bold italic">Narmak</h1>
        <ul className="flex gap-6">
          <Link to="home">
            <li>image search</li>
          </Link>
          <Link to="about">
            <li>Counter</li>
          </Link>
          <Link to="contect">
            <li>Jokes Shop</li>
          </Link>
        </ul>
        <div className="flex gap-3">
          <button className="bg-sky-500 w-20 h-9 rounded-lg uppercase">
            <Link to="sinup">Sinup</Link>
          </button>
          <button className="bg-sky-500 w-20 h-9 rounded-lg uppercase">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
