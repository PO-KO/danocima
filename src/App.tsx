// import { CssBaseline } from "@mui/material";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "@mui/icons-material";
import Sidebar from "./components/Sidebar";

const Layout = (
  <div>
    <Navbar />
    <Sidebar />
    <div>
      <Outlet />
    </div>
  </div>
);

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Routes>
        <Route path="/" element={Layout}>
          <Route index element={<Home />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
