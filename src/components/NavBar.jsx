import { NavLink } from "react-router-dom";
import SafeSearchModal from "./SafeSearchToggle";

const NavBar = () => {
  const activeNavClass = "text-neutral-300 font-bold";
  return (
    <div>
      <nav className="p-4 flex md:justify-end">
        <ul className="md:flex gap-6 uppercase text-neutral-400 text-sm md:text-base">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeNavClass : undefined
              }
              to="/"
            >
              Search Records
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeNavClass : undefined
              }
              to="films"
            >
              The Films
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
