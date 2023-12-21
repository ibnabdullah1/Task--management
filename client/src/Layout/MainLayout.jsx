import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../Routes/Pages/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <StickyNavbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
