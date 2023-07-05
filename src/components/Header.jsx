import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  function handleMenuOpen() {
    setOpen(!open);
  }

  return (
    <header className="z-10 w-full fixed top-0 bg-[#141419] border-b border-gray-600">
      <div className="container max-w-screen-md h-20 mx-auto px-5 flex justify-end items-center">
        <nav className="md:block hidden">
          <ul className="flex items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/*
            <li className="ml-4">
              <Link to="/about">About</Link>
            </li>
            */}
          </ul>
        </nav>

        <div className="z-10 inline-block md:hidden" onClick={handleMenuOpen}>
          {open ? (
            <span className="material-icons md-48 material-symbols-outlined">close</span>
          ) : (
            <span className="material-icons md-48 material-symbols-outlined">menu</span>
          )}
        </div>

        <nav
          className={
            open
              ? 'fixed top-0 right-0 w-2/5 h-full bg-gray-800 p-5 pt-24 duration-300'
              : 'fixed top-0 right-[-100%] w-2/5 h-full bg-gray-800 p-5 pt-24 duration-300'
          }
        >
          <ul>
            <li>
              <Link to="/" onClick={handleMenuOpen}>
                Home
              </Link>
            </li>
            {/* <li className="mt-2">
              <Link to="/about" onClick={handleMenuOpen}>
                About
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
