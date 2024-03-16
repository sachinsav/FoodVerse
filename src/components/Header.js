import React, { useState, useEffect, useRef } from "react";
import { LOGO_URL } from "../utils/constants";
import 'material-icons/iconfont/material-icons.css';
import logo from '../../public/images/logo-no-background.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const closeIconClick = () => {
    setShowMenu(false);
    // document.body.style.overflowY = 'unset';
  }

  const menuIconClick = () => {
    setShowMenu(true);
    // document.body.style.overflowY = 'hidden';
  }


  return (
    <div className="fixed w-screen top-0 z-50 shadow-lg" >
      <nav className="flex justify-between items-center bg-orange-600 h-14 text-white ">
        <div className="h-full px-2 py-1">
          <h1 className="h-full text-3xl font-extrabold flex items-center" id="logo">F<span id="logoo">o</span>odVerse</h1>
          {/* <img src={logo} className="h-full"></img> */}
        </div>
        <div className="h-full px-2 hidden sm:block">
          <ul className="flex items-center justify-center h-full">
          <Link to="/" className="h-full"><li className="px-3 hover:bg-orange-100 hover:text-orange-600 h-full text-xl flex items-center">
              Home</li></Link>
              <Link to="/about" className="h-full"><li className="py-2 px-3 hover:bg-orange-100 hover:text-orange-600 h-full text-xl flex items-center">
              AboutUs</li></Link>
              <Link to="/cart" className="h-full"><li className="py-2 px-3 hover:bg-orange-100 hover:text-orange-600 h-full text-xl flex items-center">
              Cart</li></Link>
              <Link to="/login" className="h-full"><li className="py-2 px-3 hover:bg-orange-100 hover:text-orange-600 h-full text-xl flex items-center">LogIn</li></Link>
          </ul>
        </div>
        <div className="h-full px-2 sm:hidden">
        {!showMenu && <div className="h-full flex items-center hover:bg-orange-100 hover:text-orange-600 px-2" onClick={menuIconClick}><MenuIcon fontSize="large"/></div>}

          {showMenu && <ul className="flex flex-col h-screen absolute right-0 top-0 w-4/6" id="sidebar" style={{backgroundColor : 'rgba(236, 117, 26, 0.6)', backdropFilter: 'blur(2px)'}}>
            <li className="w-full h-14 px-2 flex justify-end">
            <div className="inline-block h-full items-center px-2 hover:bg-orange-100 hover:text-orange-600" onClick={closeIconClick}><CloseIcon style={{ height: '100%' }} className="" fontSize="large"/>
            </div></li>
            <Link to="/"><li className="p-2 hover:bg-orange-100 hover:text-orange-600 w-full text-xl">
            Home</li></Link>
            <Link to="/about"><li className="p-2 hover:bg-orange-100 hover:text-orange-600 w-full text-xl">AboutUs</li></Link>
            <Link to="/cart"><li className="p-2 hover:bg-orange-100 hover:text-orange-600 w-full text-xl">Cart</li></Link>
            <Link to="/login"><li className="p-2 hover:bg-orange-100 hover:text-orange-600 w-full text-xl">LogIn</li></Link>
          </ul>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
