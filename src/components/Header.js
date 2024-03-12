import React, { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import 'material-icons/iconfont/material-icons.css';
import logo from '../../public/images/logo-no-background.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const closeIconClick = () => {
    setShowMenu(false);
  }
  const menuIconClick = () => {
    setShowMenu(true);
  }
  return (
    <div className="">
      <nav className="flex justify-between items-center bg-orange-500 h-14 text-white">
        <div className="h-full px-2 py-1">
          <h1 className="h-full text-3xl font-extrabold flex items-center">FoodVerse</h1>
          {/* <img src={logo} className="h-full"></img> */}
        </div>
        <div className="h-full px-2 hidden sm:block">
          <ul className="flex items-center justify-center h-full">
            <li className="py-2 px-3 hover:bg-orange-100 hover:text-orange-500 h-full text-xl flex items-center">
              <a href="#">Home</a></li>
            <li className="py-2 px-3 hover:bg-orange-100 hover:text-orange-500 h-full text-xl flex items-center">AboutUs</li>
            <li className="py-2 px-3 hover:bg-orange-100 hover:text-orange-500 h-full text-xl flex items-center">Cart</li>
            <li className="py-2 px-3 hover:bg-orange-100 hover:text-orange-500 h-full text-xl flex items-center">LogIn</li>
          </ul>
        </div>
        <div className="h-full px-2 sm:hidden">
        {!showMenu && <div className="h-full flex items-center hover:bg-orange-100 hover:text-orange-500 px-2" onClick={menuIconClick}><MenuIcon fontSize="large"/></div>}

          {showMenu && <ul className="flex flex-col h-screen absolute right-0 top-0 w-4/6" id="sidebar" style={{backgroundColor : 'rgba(236, 117, 26, 0.6)', backdropFilter: 'blur(2px)'}}>
            <li className="w-full h-14 px-2 flex justify-end">
            <div className="inline-block h-full items-center px-2 hover:bg-orange-100 hover:text-orange-500" onClick={closeIconClick}><CloseIcon style={{ height: '100%' }} className="" fontSize="large"/>
            </div></li>
            <li className="p-2 hover:bg-orange-100 hover:text-orange-500 w-full text-xl">
              <a href="#">Home</a></li>
            <li className="p-2 hover:bg-orange-100 hover:text-orange-500 w-full text-xl">AboutUs</li>
            <li className="p-2 hover:bg-orange-100 hover:text-orange-500 w-full text-xl">Cart</li>
            <li className="p-2 hover:bg-orange-100 hover:text-orange-500 w-full text-xl">LogIn</li>
          </ul>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
