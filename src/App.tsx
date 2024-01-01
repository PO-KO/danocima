// import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Actors from "./pages/actors/Actors";
import Profile from "./pages/profile/Profile";
import Layout from "./Layout";
import Browse from "./pages/browse/Browse";
import MediaDetails from "./pages/mediaDetails/MediaDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="actors" element={<Actors />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="browse/:type" element={<Browse />} />
          <Route path="browse/:type/:id" element={<MediaDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
