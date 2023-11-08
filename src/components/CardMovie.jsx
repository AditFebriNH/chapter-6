import { IMAGE_URL_CARD } from "../constants/config";
import { convertDate } from "../utils";
import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
  return (
    <Link to={`/details/${movie.id}`}>
      <div className="relative w-full rounded-md border-2 border-slate-900 bg-transparent transition-transform hover:-translate-y-1">
        <img
          src={
            movie.poster_path
              ? IMAGE_URL_CARD + movie.poster_path
              : "/images/image-not-found.jpg"
          }
          alt={movie.title}
          className="h-[369px] max-h-[369px] w-full rounded-md object-cover"
        ></img>
        <div className="absolute bottom-0 left-0 right-0 rounded-b-md bg-gradient-to-t from-black to-white/0 px-3 pb-4 pt-10 text-white">
          <h1 className="line-clamp-3 text-2xl font-bold">{movie.title}</h1>
          <p className="font-semibold">{convertDate(movie.release_date)}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
