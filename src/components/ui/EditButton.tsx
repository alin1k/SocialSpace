'use client'

import { useState, useRef } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Dispatch, SetStateAction } from 'react';
import useClickOutsideHandler from '@/hooks/useClickOutsideHandler';
import { toast } from 'sonner';

function EditButton({deleteAction, editAction} : {deleteAction: ()=>void, editAction: Dispatch<SetStateAction<boolean>>}) {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useClickOutsideHandler({dropdownRef, buttonRef, setIsOpen})

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
          className="absolute left-0 transform -translate-x-1/2 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          style={{ top: "auto", bottom: "100%" }}
        >
          <div className="py-1">
            <button
              className="block w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => {
                editAction(true);
                setIsOpen(false)
              }}
            >
              Edit
            </button>
            <button
              className="block w-full text-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => {
                deleteAction();
                toast.success("Deleted successfully")
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