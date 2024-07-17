import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import Movies from "./Pages/Movies";
import MovieDetails, { movieLoader } from "./Pages/MovieDetails";
import AddMovie from "./Pages/AddMovie";
import EditMovie from "./Pages/EditMovie";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
          loader={movieLoader}
        />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route
          path="/edit-movie/:id"
          element={<EditMovie />}
          loader={movieLoader}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
