import React, { useRef, useState } from "react";
import logo from "./assets/logo.jpg";
import burgerIcon from "./assets/icons8-menu-50.png";
import closeIcon from './assets/icons8-x-48.png';
import Cards from "./components/Cards";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  const [isCloseIcon, setIsCloseIcon] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsCloseIcon(false);
    }
  };

  return (
    <div className="bg-custom w-screen h-screen flex flex-col justify-between" onClick={handleClickOutsideMenu}>
      <div className="top-content flex items-end gap-1 pt-6 pl-6 justify-between">
        <div className="flex">
          <h1 className="text-white text-2xl font-bold">ChatGPT</h1>
          <h2 className="text-[#cdcdcd] text-xl font-bold mt-1">3.5</h2>
        </div>
        {isCloseIcon ? <BurgerMenu menuRef={menuRef} closeMenu={() => setIsCloseIcon(false)} /> : <RegularMenu />}
        <img
          className="burger cursor-pointer relative z-40"
          src={isCloseIcon ? closeIcon : burgerIcon}
          alt=""
          onClick={() => {
            setIsCloseIcon(!isCloseIcon);
          }}
        />
      </div>

      <div className="flex justify-center items-center middle-content kd">
        <div className="grid justify-items-center gap-6">
          <img src={logo} className="w-12 h-12 object-cover" alt="Logo" />
          <h1 className="text-white text-2xl font-bold">
            How can I help you today?
          </h1>
        </div>
      </div>
      <div className="mx-auto">
        <Cards />
      </div>
      <input
        className="text-white outline-none h-[52px] mx-auto bg-custom border-[#ffffff26] border-solid border rounded-lg pl-7"
        placeholder="Message ChatGPT"
      />
      <p className="text-center text-white pb-3">
        ChatGPT can make mistakes. Consider checking important information.
      </p>
    </div>
  );
}

function BurgerMenu({ menuRef, closeMenu }) {
  return (
    <div ref={menuRef} className="pr-12 w-6/12 h-screen bg-gray-500 absolute right-0 top-0 z-20">
      <div className="grid justify-start ">
        <NavLink className="text-white p-4 m-auto" to="/home">
          Home
        </NavLink>
        <NavLink className="text-white p-4 m-auto" to="/about">
          About
        </NavLink>
        <NavLink className="text-white p-4 m-auto" to="/contact">
          Contact
        </NavLink>
        <NavLink className="text-white p-4 m-auto" to="/gallery">
          Gallery
        </NavLink>
      </div>
    </div>
  );
}

function RegularMenu() {
  return (
    <div className="items-center space-x-4 pr-12 none">
      <NavLink className="text-white" to="/home">
        Home
      </NavLink>
      <NavLink className="text-white" to="/about">
        About
      </NavLink>
      <NavLink className="text-white" to="/contact">
        Contact
      </NavLink>
      <NavLink className="text-white" to="/gallery">
        Gallery
      </NavLink>
    </div>
  );
}

export default App;
