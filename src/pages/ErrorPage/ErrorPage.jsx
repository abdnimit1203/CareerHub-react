import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="text-2xl text-center p-10 bg-red-600 text-white min-h-screen flex flex-col justify-center gap-4 items-center">
      <h1 className="text-8xl font-bold border-4 border-rose-200 p-4 rounded-full">
        404 Error!
      </h1>
      <p>Page Not Found</p>
      <p>🚫 Unavaiable Go back to home</p>

      <NavLink to={"/"} className="btn btn-sm btn-accent text-white ">
        GO HOME
      </NavLink>
    </div>
  );
};

export default ErrorPage;
