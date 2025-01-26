const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const moviesFilePath = path.join(__dirname, "movies.json");

// Get all movies
app.get("/movies", (req, res) => {
  fs.readFile(moviesFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read movies file" });
    }
    res.json(JSON.parse(data));
  });
});

// Get a single movie
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile(moviesFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read movies file" });
    }

    const movies = JSON.parse(data).movies;
    const movie = movies.find((m) => m.id === id);

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.json(movie);
  });
});

// Add a new movie
app.post("/movies", (req, res) => {
  const newMovie = req.body;
  
  fs.readFile(moviesFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read movies file" });
    }

    const moviesData = JSON.parse(data);
    const movies = moviesData.movies;

    // Generate a new unique ID for the new movie
    const newId = (
      movies.length > 0 ? parseInt(movies[movies.length - 1].id) + 1 : 1
    ).toString();
    newMovie.id = newId;

    movies.push(newMovie);

    fs.writeFile(moviesFilePath, JSON.stringify({ movies }, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to save movie" });
      }
      res
        .status(201)
        .json({ message: "Movie added successfully", movie: newMovie });
    });
  });
});

app.delete("/movies/:id", (req, res) => {
    const {id} = req.params;
    fs.readFile(moviesFilePath, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Failed to read movies file" });
        }
        const moviesData = JSON.parse(data);
        const movies = moviesData.movies;
        const movieIndex = movies.findIndex((m) => m.id === id);
        if (movieIndex === -1) {
            return res.status(404).json({ error: "Movie not found" });
        }
        movies.splice(movieIndex, 1);
        fs.writeFile(moviesFilePath, JSON.stringify({ movies }, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to delete movie" });
            }
            res.status(200).json({ message: "Movie deleted successfully" });
        });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
