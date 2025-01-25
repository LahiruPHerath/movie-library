import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MovieList from "./MovieList";

const MovieListing = ({ isHome = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiUrl = isHome ? "api/movies?_limit=4" : "api/movies";
      try {
        const response = await axios.get("api/movies");
        setMovies(response.data);
      } catch (error) {
        console.log("Error Fetching Movies: ", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section className="mt-10 ml-10 px-4 py-10">
      {isHome ? (
        <div className="container-xl lg:container m-auto ">
          <h2 className="text-3xl font-bold mx-16 mb-6 text-start">
            {isHome ? "What to watch" : "Browse Movies"}
          </h2>
          <div className="grid grid-cols-1  md:mx-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-6">
            {movies
              .filter((movie) => movie.id < 5)
              .map((movie) => (
                <MovieList movie={movie} key={movie.id} />
              ))}
          </div>
        </div>
      ) : (
        <div className="container-xl lg:container m-auto ">
          <h2 className="text-3xl font-bold mx-16 mb-6 text-start">
            {isHome ? "What to watch" : "Browse Movies"}
          </h2>
          <div className="grid grid-cols-1  md:mx-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-6">
            {movies.map((movie) => (
              <MovieList movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      )}
      {isHome ? (
        <div className="mt-10 container-xl lg:container m-auto ">
          <h2 className="text-3xl font-bold mx-16 mb-6 text-start">
            {isHome ? "Best to watch" : ""}
          </h2>
          <div className="grid grid-cols-1  md:mx-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-6">
            {movies
              .sort((a, b) => b.imdbRating - a.imdbRating)
              .slice(0, 4)
              .map((filteredMovie) => (
                <MovieList movie={filteredMovie} key={filteredMovie.id} />
              ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default MovieListing;
