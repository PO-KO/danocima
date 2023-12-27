// import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import MovieInfo from "./pages/movieInfo/MovieInfo";
import ShowInfo from "./pages/showInfo/ShowInfo";
import Actors from "./pages/actors/Actors";
import Profile from "./pages/profile/Profile";
import Layout from "./Layout";
import Browse from "./pages/browse/Browse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:id" element={<MovieInfo />} />
          <Route path="shows/:id" element={<ShowInfo />} />
          <Route path="actors" element={<Actors />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="browse/:type?" element={<Browse />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
