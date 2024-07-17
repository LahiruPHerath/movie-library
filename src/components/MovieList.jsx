import { Link } from "react-router-dom";

const MovieList = ({ movie }) => {
  return (
    <div key={movie.id} className="rounded-xl shadow-md relative md:w-72">
      <div className=" h-96 overflow-hidden rounded-xl ">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={movie.photo}
            alt="movie image"
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-xl font-bold">{movie.title}</h3>
          <div className="flex flex-row">
            <div className="w-1/2 my-2 text-start">
              IMDB : {movie.imdbRating}{" "}
            </div>
            <div className="w-1/2 text-gray-600 my-2 text-end">
              {movie.releaseYear}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
