// import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../redux/actions/movieActions";
import CardMovie from "../../components/CardMovie";
import Navbar from "../../components/Navbar";

const SearchMovie = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = searchParams.get("query");
  const page = searchParams.get("page");
  const [isLoading, setIsLoading] = useState(false);

  const { search } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getSearchMovie(query, page, setIsLoading));
  }, [dispatch, query, page, searchParams]);

  const handleClearSearch = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <section className="min-h-[100vh] bg-slate-950 px-14 pb-10 pt-28 text-white md:px-20 ">
        <div className="flex items-center justify-between pb-4 ">
          <h1 className="text-2xl font-bold">
            Search Movie :{" "}
            <span className="font-semibold italic">"{query}"</span>
          </h1>
          <button
            className="rounded-md bg-red-600 px-3 py-2 transition-colors hover:bg-red-800"
            onClick={handleClearSearch}
          >
            Clear search result
          </button>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
            {search.length === 0 ? (
              <p>Movies not found</p>
            ) : (
              search.map((movie) => <CardMovie key={movie.id} movie={movie} />)
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default SearchMovie;
