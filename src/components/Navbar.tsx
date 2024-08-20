"use client"

import Link from "next/link"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="w-full flex justify-between items-center p-3 sm:px-8 md:px-20 lg:px-40 xl:px-64 2xl:px-96">
        <p className="bg-primary rounded-2xl p-2 font-semibold text-xl">SocialSpace</p>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div className="hidden sm:flex gap-1">
          <Link href="/" className="hover:bg-gray-100 p-1 px-2 rounded-xl">Home</Link>
          <Link href="/posts" className="hover:bg-gray-100 p-1 px-2 rounded-xl">Posts</Link>
          <Link href="/profile" className="hover:bg-gray-100 p-1 px-2 rounded-xl">Profile</Link>
        </div>
      </header>
      <hr />
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-white w-full py-4 shadow-md">
          <Link href="/" onClick={closeMenu} className="block w-full text-center py-2 hover:bg-gray-100">Home</Link>
          <Link href="/posts" onClick={closeMenu} className="block w-full text-center py-2 hover:bg-gray-100">Posts</Link>
          <Link href="/profile" onClick={closeMenu} className="block w-full text-center py-2 hover:bg-gray-100">Profile</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;