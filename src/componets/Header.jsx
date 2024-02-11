import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-400 shadow-orange-100 shadow-md">
      <div className="flex justify-between max-w-4xl items-center p-3 mx-auto">
        <Link to="/">
          <h1 className="text-sm md:text-2xl flex flex-wrap font-bold font-serif">
            <span className="text-red-400">SAGAR</span>
            <span className="text-green-700">ESTATE</span>
          </h1>
        </Link>
        <form className="bg-slate-200 flex items-center p-3  rounded-lg ">
          <input
            type="text"
            placeholder="Searching..."
            className="bg-transparent border-none outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex  gap-3">
          <Link to="/">
            <li className="hidden sm:inline text-slate-300 hover:text-red-600">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-slate-300 hover:text-red-600 hidden sm:inline">
              ABout
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-300 hover:text-red-600 ">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
