import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="flex sm:justify-center space-x-4">
        <div>
          <ul className="d-flex gap-3">
            <li>
              <Link
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
