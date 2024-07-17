import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareXmark,
  FaSquareYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2024, All Rights Reserved
          </div>

          <div className="flex  items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img src={logo} className="h-10 w-auto" alt="Logo" />
              <span className="text-white hidden md:block ml-2 text-2xl font-bold">
                MovieHub
              </span>
            </Link>
          </div>

          <div className="flex justify-center ml-3 space-x-4">
            <a href="#">
              <FaSquareFacebook className="text-white h-8" />
            </a>

            <a href="#">
              <FaSquareInstagram className="text-white h-8" />
            </a>

            <a href="#">
              <FaSquareXmark className="text-white h-8" />
            </a>

            <a href="#">
              <FaSquareYoutube className="text-white h-8" />
            </a>

            <a href="#">
              <FaSquareGithub className="text-white h-8" />
            </a>
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Movies
            </a>
            <a href="#" className="hover:text-brightRed">
              Add Movies
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-red-600 hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
