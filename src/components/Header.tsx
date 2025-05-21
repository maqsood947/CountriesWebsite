import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const itemsLists = ["Home", "About", "Contact", "Countries"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-gray-950 text-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          Logo Here
        </Link>

        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-8 font-medium">
            {itemsLists.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `transition duration-200 ${
                      isActive ? "underline bold" : "text-gray-400"
                    } hover:text-white`
                  }>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex space-x-4">
          <Link
            to="/login"
            className="app-button">
            Login
          </Link>
          <NavLink
            to="/GetStarted"
            className="app-button">
            Get Started
          </NavLink>
        </div>

        <div className="lg:hidden md:hidden sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4 font-medium">
            {itemsLists.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block transition duration-200 ${
                      isActive ? "text-red-400" : "text-gray-300"
                    } hover:text-red-500`
                  }>
                  {item}
                </NavLink>
              </li>
            ))}
            <hr className="my-2 border-gray-600" />
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-300 hover:text-white">
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-300 hover:text-white">
              Get Started
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
