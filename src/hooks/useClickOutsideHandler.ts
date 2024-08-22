import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

type Props = {
  dropdownRef: RefObject<HTMLDivElement>,
  buttonRef: RefObject<HTMLButtonElement>,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function useClickOutsideHandler({dropdownRef, buttonRef, setIsOpen} : Props){
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
}