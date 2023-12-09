import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const Navbar = () => {
  const navClasses =
    "py-2 px-3 font-bold rounded-md block flex items-center gap-2";
  return (
    <div className="h-screen p-4 flex flex-col">
      <h2 className="py-1 px-2 mt-4 mb-3 font-bold text-lg text-primary">
        @SURAJVASTRAKAR
      </h2>
      <ul className="flex flex-col gap-3 flex-grow">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-main " + navClasses : navClasses
            }
          >
            <RxDashboard /> Dashboard
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? "bg-main " + navClasses : navClasses
            }
          >
            <TbArrowsDoubleNeSw /> Transactions
          </NavLink>
        </li>
      </ul>
      <NavLink
        to="/support"
        className={({ isActive }) =>
          isActive ? "bg-main " + navClasses : navClasses
        }
      >
        <BiSupport /> Support
      </NavLink>
    </div>
  );
};
export default Navbar;
