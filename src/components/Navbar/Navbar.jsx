import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-transparent absolute w-full">
      <div className="navbar max-w-6xl mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to={"/statistics"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? " active text-red-500" : ""
                }
              >
                Statistics
              </NavLink>
              <NavLink
                to={"/applied-jobs"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? " active text-red-500" : ""
                }
              >
                Applied Jobs
              </NavLink>
              <NavLink
                to={"/blog"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? " active text-red-500" : ""
                }
              >
                Blog
              </NavLink>
            </ul>
          </div>
          <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">CareerHub</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 text-xl font-bold ">
            <NavLink
              to={"/statistics"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " active text-indigo-500" : ""
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to={"/applied-jobs"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " active text-indigo-500" : ""
              }
            >
              Applied Jobs
            </NavLink>
            <NavLink
              to={"/blog"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " active text-indigo-500" : ""
              }
            >
              Blog
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-accent text-base-100">Start Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
