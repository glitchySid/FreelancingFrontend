import { useState } from 'react';
import {CiMenuBurger} from 'react-icons/ci';

export default function NavBar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full m-0 p-5 list-none bg-sky-100 flex justify-between">
      <h1 className="flex justify-start text-red-500 text-2xl font-bold">Grad<span className="text-black">Work</span></h1>
      
      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        <ul className="flex gap-4 justify-end">
          <li className="p-2 rounded-lg text-lg hover:bg-sky-200 transition-colors duration-300">Home</li>
          <li className="p-2 rounded-lg text-lg hover:bg-sky-200 transition-colors duration-300">Sign In</li>
          <li className="p-2 rounded-lg text-lg hover:bg-sky-200 transition-colors duration-300">Become a Seller</li>
        </ul>
      </div>
      
      {/* Mobile Navigation */}
      <div className="block sm:hidden">
        {/* Animated Menu Icon */}
        <div 
          onClick={toggleMenu} 
          className="cursor-pointer group"
        >
          <CiMenuBurger 
            size={25} 
            className={`
              m-1 
              transition-all 
              duration-300 
              transform 
              group-hover:scale-110 
              ${isMenuOpen ? 'rotate-90' : 'rotate-0'}
              hover:text-sky-600
            `} 
          />
        </div>
        
        {/* Animated Menu Dropdown */}
        {isMenuOpen && (
          <ul className="
            absolute 
            top-16 
            right-0 
            bg-sky-200 
            p-4 
            rounded-lg 
            shadow-md 
            h-full 
            w-[70%] 
            animate-slide-in-right
            origin-top-right
          ">
            <li className="p-2 rounded-lg text-lg hover:bg-sky-300 transition-colors duration-300">Home</li>
            <li className="p-2 rounded-lg text-lg hover:bg-sky-300 transition-colors duration-300">Sign In</li>
            <li className="p-2 rounded-lg text-lg hover:bg-sky-300 transition-colors duration-300">Become a Seller</li>
          </ul>
        )}
      </div>
    </nav>
  );
}
