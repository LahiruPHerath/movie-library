import { Link } from "react-router-dom";
import hero from "../assets/images/Hero (2).jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div className="flex flex-col-reverse md:flex-row items-center mx-auto space-y-0 md:space-y-0">
        <div className="relative w-full">
          <img src={hero} alt="" className="h-64 md:h-96 w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0 md:items-start md:text-left md:ml-24 py-6 space-y-6">
            <h1 className="text-white font-bold text-xl md:text-3xl font-sans">
              Explore Your Favorite Movies
            </h1>
            <p className="text-darkGrayishBlue md:text-start md:w-1/4">
              Discover and manage your movie collection with ease. Track what
              you have watched, plan what to watch next, and share your
              favorites.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="/"
                className="p-3 px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-400"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
