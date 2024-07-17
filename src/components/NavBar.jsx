import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? "text-white font-bold text-white"
      : "text-gray-300 font-bold hover:text-white";
  return (
    <nav className="bg-red-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Name */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img src={logo} className="h-10 w-auto" alt="Logo" />
              <span className="text-white hidden md:block ml-2 text-2xl font-bold">
                MovieHub
              </span>
            </Link>
          </div>

          <div className="md:ml-auto">
            <div className="flex space-x-4 ">
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
              <NavLink to="/movies" className={activeLink}>
                Movies
              </NavLink>
              <NavLink to="/add-movie" className={activeLink}>
                Add Movies
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
