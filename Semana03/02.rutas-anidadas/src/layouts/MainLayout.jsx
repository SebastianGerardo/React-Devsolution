import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export const MainLayout = () => {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
