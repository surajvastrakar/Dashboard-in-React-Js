import { LiaUserCircleSolid } from "react-icons/lia";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const heading =
    pathname === "/" ? "DASHBOARD" : pathname.slice(1).toUpperCase();

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between w-10/12 mx-auto py-3">
        <h1 className="text-2xl font-bold">{heading}</h1>
        <LiaUserCircleSolid className="text-4xl" />
      </div>
    </div>
  );
};

export default Header;
