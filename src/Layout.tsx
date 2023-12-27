import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-primary-dark text-soft min-h-screen font-display">
      <Navbar />
      <main className="flex">
        <div className="content-container w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
