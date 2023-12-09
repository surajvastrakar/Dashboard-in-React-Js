import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="flex">
        <aside className="w-60">
          <Navbar />
        </aside>
        <main className="h-screen flex-grow bg-main">
          <Header />
          <div className="w-10/12 mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
