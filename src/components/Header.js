import React, { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import 'material-icons/iconfont/material-icons.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex flex-wrap justify-between items-center bg-gray-800 px-3 py-1">
      <div className="w-1/2">
        <img src={LOGO_URL} alt="logo" className="w-20" />
      </div>
      <div className="sm:hidden w-1/2 text-right">
        <button className="" onClick={handleMenuToggle}>
          <i className="material-icons text-white hover:text-orange-600">menu</i>
        </button>
      </div>
      <div className="sm:block w-full sm:w-auto">
        {isMenuOpen && (
          <ul className={`flex text-right flex-col sm:flex-row ${isMenuOpen ? '' : 'hidden'}`}>
            <li className="sm:px-2 text-white hover:text-orange-600 hover:bg-slate-600">Home</li>
            <li className="sm:px-2 text-white hover:text-orange-600">AboutUs</li>
            <li className="sm:px-2 text-white hover:text-orange-600">Cart</li>
            <li className="sm:px-2 text-white hover:text-orange-600">SignIn</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
