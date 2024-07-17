import React from "react";
import axios from "axios";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useLoaderData();
  const navigate = useNavigate();

  if (!movie) {
    return <div>Error: Movie data could not be fetched.</div>;
  }

  const toEditMovie = (id) => {
    navigate(`/edit-movie/${id}`);
  };

  const deleteMovie = async (id) => {
    const confirmation = window.confirm("Are You Sure");
    if (confirmation) {
      try {
        const response = await axios.delete(`/api/movies/${id}`);
        toast.success("Deleted Successfully");
        navigate("/movies");
        return response.data;
      } catch (error) {
        toast.error("Error Deleting Movie: ", error);
        console.log("Error Deleting Movie: ", error);
      }
    }
  };

  return (
    <section>
      <div className="container m-auto py-6 px-6">
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
          <div className="p-10 flex-1">
            <img
              src={movie.photo}
              alt="movie image"
              className="w-full h-full"
            />
          </div>
          <div className="py-10 flex-1">
            <h2 className="text-2xl md:text-3xl text-left uppercase font-bold tracking-wider mb-1">
              {movie.title}
            </h2>
            <span className="text-darkGrayishBlue ">
              {movie.type} / {movie.language}
            </span>
            <div className="mt-10 flex flex-row">
              <StarRating rating={movie.imdbRating} />
              <div className="ml-6 font-bold text-yellow-500">
                {movie.imdbRating}
              </div>
            </div>
            <h3 className="md:text-xl uppercase font-bold mt-10 mb-2">
              director
            </h3>
            <span className="text-darkGrayishBlue">{movie.director}</span>
            <h3 className="md:text-xl uppercase font-bold mt-10 mb-2">Year</h3>
            <span className="text-darkGrayishBlue">{movie.releaseYear}</span>
            <h3 className="md:text-xl uppercase font-bold mt-10 mb-2">
              Run time
            </h3>
            <span className="text-darkGrayishBlue">{movie.runtime} min</span>
            <h3 className="md:text-xl uppercase font-bold mt-10 mb-2">
              synopsis
            </h3>
            <span className="text-darkGrayishBlue">{movie.overview}</span>

            <div className="flex flex-col mt-10 md:flex-row md:space-x-12 space-y-12 md:space-y-0">
              <div className="flex-1 md:pl-10 md:items-center md:justify-center mx-auto">
                <button
                  onClick={() => toEditMovie(movie.id)}
                  className="rounded-full p-3 px-6 py-2 md:text-xl bg-blue-500 hover:bg-blue-400 text-white"
                >
                  Edit
                </button>
              </div>
              <div className="pl-2 flex-1 items-center justify-center mx-auto">
                <button
                  onClick={() => deleteMovie(movie.id)}
                  className="rounded-full p-3 px-6 py-2 md:text-xl bg-red-500 hover:bg-red-400 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default MovieDetails;

export const movieLoader = async ({ params }) => {
  try {
    const response = await fetch(`/api/movies/${params.id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch movie data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return null;
  }
};
