'use client'

import { useState, useEffect, useRef } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function EditButton({deleteAction} : {deleteAction: ()=>void}) {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="p-1 rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <MoreHorizIcon />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          style={{ top: "auto", bottom: "100%" }}
        >
          <div className="py-1">
            <button
              className="block w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              Edit
            </button>
            <button
              className="block w-full text-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => {
                deleteAction();
                setIsOpen(false)
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditButton