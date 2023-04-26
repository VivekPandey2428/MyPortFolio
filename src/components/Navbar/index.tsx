import React from "react";

interface NavbarProps {
    onValueChange: (val: string) => void 
}

const Navbar = ({onValueChange}: NavbarProps) => {
    const navList = ["About", "Experience", "Skills", "Projects", "Resume"];
    return (
      <div className="h-16 bg-black w-full bg-opacity-20 z-20 text-white flex items-center justify-between p-5">
        <div className="text-white text-3xl hidden md:block">&#128520;</div>
        <ul className="flex items-center gap-4">
            {navList.map((val: string, idx: number) => {
                   return (
                     <li
                       onClick={() => onValueChange(val)}
                       key={idx}
                       className="text-white opacity-80 hover:opacity-100 hover: cursor-pointer"
                     >
                       {val}
                     </li>
                   );
            })}
        </ul>
      </div>
    );
}

export default Navbar;