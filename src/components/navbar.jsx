import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiMenuBurger } from 'react-icons/ci';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 20
    },
    open: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <nav className="w-full m-0 p-5 list-none bg-sky-100 flex justify-between">
      <h1 className="flex justify-start text-red-500 text-2xl font-bold">
        Grad<span className="text-black">Work</span>
      </h1>

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
        <motion.div
          onClick={toggleMenu}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <CiMenuBurger
              size={25}
              className="m-1 hover:text-sky-600"
            />
          </motion.div>
        </motion.div>

        {/* Animated Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="absolute top-16 right-0 bg-sky-200 p-4 rounded-lg shadow-md h-full w-[70%]"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.li
                variants={menuItemVariants}
                className="p-2 rounded-lg text-lg hover:bg-sky-300 transition-colors duration-300"
              >
                Home
              </motion.li>
              <motion.li
                variants={menuItemVariants}
                className="p-2 rounded-lg text-lg hover:bg-sky-300 transition-colors duration-300"
              >
                Sign In
              </motion.li>
              <motion.li
                variants={menuItemVariants}
                className="p-2 rounded-lg text-lg hover:bg-sky-300 transition-colors duration-300"
              >
                Become a Seller
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
