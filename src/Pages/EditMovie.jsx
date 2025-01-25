import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

const EditMovie = () => {
  const { id } = useParams();
  const movie = useLoaderData();
  const movieTypes = ["Comedy", "Sci-Fi", "Drama", "Action", "Horror", "Other"];
  const [selectedTypes, setSelectedTypes] = useState(movie.type);
  const [customType, setCustomType] = useState("");
  const [title, setTitle] = useState(movie.title);
  const [director, setDirector] = useState(movie.director);
  const [year, setYear] = useState(movie.releaseYear);
  const [rating, setRating] = useState(movie.imdbRating);
  const [overview, setOverview] = useState(movie.overview);
  const [runtime, setRuntime] = useState(movie.runtime);
  const [language, setLanguage] = useState(movie.language);
  const [photo, setPhoto] = useState(movie.photo);
  const navigate = useNavigate();

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter((t) => t !== type)
        : [...prevSelectedTypes, type]
    );
  };

  const handleCustomTypeChange = (e) => {
    setCustomType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalSelectedTypes = selectedTypes.includes("Other")
      ? [...selectedTypes.filter((type) => type !== "Other"), customType]
      : selectedTypes;
    const newMovie = {
      id: id,
      title,
      director,
      releaseYear: year,
      imdbRating: rating,
      overview,
      type: finalSelectedTypes,
      runtime,
      language,
      photo,
    };

    try {
      const response = await axios.put(`/api/movies/${id}`, newMovie, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Movie updated successfully");
      navigate(`/movie/${id}`);
      return response.data;
    } catch (error) {
      toast.error("Failed to update movie", error);
      console.error("Error updating document: ", error);
    }
  };
  return (
    <>
      <div className="container mx-auto max-w-2xl py-20">
        <div className="px-6 py-8 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-semibold text-center mb-6">
              Add a New Movie
            </h2>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Movie Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. The Dark Knight"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="director"
                className="font-bold block text-gray-700 mb-2"
              >
                Name of The Director
              </label>
              <input
                type="text"
                id="director"
                name="director"
                className="border w-full py-2 px-3 mb-2"
                placeholder="eg. Christopher Nolan"
                required
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="year"
                className="font-bold block text-gray-700 mb-2"
              >
                Released Year
              </label>
              <input
                type="number"
                id="year"
                name="year"
                className="border w-full py-2 px-3 mb-2"
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="rating"
                className="font-bold block text-gray-700 mb-2"
              >
                IMDB Ratings
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                className="border w-full py-2 px-3 mb-2"
                required
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="overview"
                className="font-bold block text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                name="overview"
                className="w-full h-32 border py-2 px-3 mb-2"
                required
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="font-bold block text-gray-700 mb-2">
                Select Movie Type
              </label>
              {movieTypes.map((type) => (
                <div key={type} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={type}
                    name="type"
                    value={type}
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleCheckboxChange(type)}
                    className="mr-2"
                  />
                  <label htmlFor={type} className="text-gray-700">
                    {type}
                    {type === "Other" && selectedTypes.includes("Other") && (
                      <input
                        type="text"
                        value={customType}
                        onChange={handleCustomTypeChange}
                        placeholder="Enter custom type"
                        className="ml-2 border rounded py-1 px-2"
                      />
                    )}
                  </label>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label
                htmlFor="runtime"
                className="font-bold block text-gray-700 mb-2"
              >
                Run Time(min)
              </label>
              <input
                type="number"
                id="runtime"
                name="runtime"
                className="border w-full py-2 px-3 mb-2"
                required
                value={runtime}
                onChange={(e) => setRuntime(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="language"
                className="font-bold block text-gray-700 mb-2"
              >
                Select language
              </label>
              <select
                required
                id="language"
                name="language"
                className="border w-full py-2 px-3 mb-2"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Mandarin">Mandarin</option>
                <option value="Japanese">Japanese</option>
                <option value="French">French</option>
                <option value="Hindi">Hindi</option>
                <option value="Tamil">Tamil</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="photo" className="font-bold text-gray-700">
                Add Photo Url
              </label>
              <input
                type="url"
                id="photo"
                name="photo"
                className="border rounded w-full px-3 mb-2 py-2"
                required
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full py-2 bg-red-600 hover:bg-red-400 text-white text-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditMovie;
