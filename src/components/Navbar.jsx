import { BsSearch } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../assets/search2.svg";
import Profile from "../assets/profile.svg";
import Down from "../assets/down.svg";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(false);

  const { token, user } = useSelector((state) => state.auth);

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
    setArrowRotation(openProfile ? "rotate-0" : "rotate-180");
  };

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      return;
    }
    navigate(`/search?page=1&query=${query}`);
  };

  useEffect(() => {
    if (token) {
      dispatch(getMe(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

  return (
    <div className="absolute  top-0 z-40 w-full items-center bg-transparent">
      <nav className="mx-auto flex items-center justify-between  gap-5 px-4 py-6 lg:px-10">
        <button>
          <h1 className="text-2xl font-extrabold text-red-600 md:text-6xl">
            MovieList
          </h1>
        </button>

        {user && (
          <>
            <div
              className=" d cursor-pointer lg:hidden"
              onClick={() => setOpenSearch(openSearch ? false : true)}
            >
              <img src={Search} className="h-6 w-6" />
            </div>

            <div className="mx-28 hidden w-full lg:block">
              <form
                onSubmit={handleSearch}
                className="relative flex  items-center justify-center"
              >
                <input
                  type="text"
                  placeholder="Seach any movies"
                  id="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-full border-2 border-red-600 bg-transparent px-5 py-2 text-white outline-none backdrop-blur-md focus:border-red-800"
                />
                <button
                  type="submit"
                  className="absolute bottom-1/2 right-2 translate-y-1/2 rounded-full bg-slate-300 p-2 transition-colors"
                >
                  <BsSearch className="h-5 w-5" />
                </button>
              </form>
            </div>
          </>
        )}
        <div className="relative flex cursor-default flex-row items-center  justify-center gap-4">
          {user ? (
            <>
              <div className="flex w-max flex-row items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-1">
                <img src={Profile} />
                <div className=" border-red-700  text-xl font-bold text-red-700 ">
                  {user.name.split(" ")[0]}
                </div>
                <button className={` ${arrowRotation}`} onClick={toggleProfile}>
                  <img src={Down} />
                </button>
              </div>

              {openProfile && (
                <div className=" absolute left-0 top-14 flex w-full flex-col gap-4 rounded-lg bg-white px-4 py-4">
                  <Link
                    className="text-center text-lg font-semibold"
                    as={Link}
                    to="/profile"
                  >
                    Profile Saya
                  </Link>
                  <h1 className="cursor-pointer text-center text-lg font-semibold">
                    Pengaturan
                  </h1>
                  <button
                    className="rounded-lg border-2 border-red-700 bg-red-700 px-3 py-2 text-center font-bold text-white"
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link
                className="rounded-lg border-2 border-red-700 px-2 py-1 font-semibold text-red-700 hover:bg-white md:px-3 md:py-2 md:font-bold"
                as={Link}
                to="/login"
              >
                Login
              </Link>
              <Link
                className="rounded-lg border-2 border-red-700 bg-red-700 px-2 py-1 font-semibold text-white md:px-3 md:py-2 md:font-bold"
                as={Link}
                to="/register"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
      <div className={`${openSearch ? "block" : "hidden"} lg:hidden`}>
        <div className="flex w-full items-center justify-center px-4">
          <form
            onSubmit={handleSearch}
            className="relative flex w-full items-center justify-center"
          >
            <input
              placeholder="Seach any movies"
              id="search_movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border-2 border-red-600 bg-transparent px-5 py-2 text-white outline-none backdrop-blur-md focus:border-red-800"
            />
            <button
              type="submit"
              className="absolute bottom-1/2 right-2 translate-y-1/2 rounded-full bg-slate-300 p-2 transition-colors"
            >
              <BsSearch className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
