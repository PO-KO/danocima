// import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import MovieInfo from "./pages/movieInfo/MovieInfo";
import Actors from "./pages/actors/Actors";
import Profile from "./pages/profile/Profile";

const Layout = () => (
  <div className="bg-primary-dark text-soft min-h-screen font-display">
    <Navbar />
    <main className="flex">
      {/* <div className="sidebar-container w-1/6 p-3">
        <Sidebar />
      </div> */}
      <div className="content-container w-full">
        <Outlet />
      </div>
    </main>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies/:id",
        element: <MovieInfo />,
      },
      {
        path: "/actors/:id",
        element: <Actors />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
