import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl">RS BLOG</Link>
          <ul className="flex items-center">
            <Link to="/blogs" className="mr-4 text-white hover:text-gray-300">
              Blog
            </Link>
            <Link to="/add-blog" className="mr-4 text-white hover:text-gray-300">
              Add Blog
            </Link>
            <Link to="/favrite" className="mr-4 text-white hover:text-gray-300">
              Favourite
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
