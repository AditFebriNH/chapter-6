import { useEffect, useState } from "react";
import { IMAGE_URL_CARD, IMAGE_URL_HEADER } from "../../constants/config";
import { convertDate } from "../../utils";
import { useParams } from "react-router-dom";
import { BiPlayCircle, BiSolidStar } from "react-icons/bi";
import DetailsSkeleton from "./skeleton";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../../redux/actions/movieActions";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const { detail } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getDetailMovie(id, setIsLoading));
  }, [id, dispatch, setIsLoading]);

  return (
    <>
      <Navbar />
      <div className="bg-slate-950 text-white">
        {isLoading ? (
          <DetailsSkeleton />
        ) : (
          <>
            <div className="relative h-[100vh] max-h-[100vh] w-full">
              <div className="absolute left-0 right-0 top-0 z-10 h-full w-full bg-gradient-to-r from-slate-950 to-slate-950/30"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-slate-950/0"></div>
              <img
                src={
                  detail.backdrop_path
                    ? IMAGE_URL_HEADER + detail.backdrop_path
                    : "/images/image-not-found.jpg"
                }
                alt={detail.title}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute bottom-1/3 left-10 z-20 w-11/12 translate-y-1/3 text-white">
                <div className="flex items-start gap-5">
                  <img
                    src={
                      detail.poster_path
                        ? IMAGE_URL_CARD + detail.poster_path
                        : "/images/image-not-found.jpg"
                    }
                    className="w-80"
                  />
                  <div className="flex flex-col items-start gap-5 ">
                    <h1 className="text-5xl font-bold tracking-wide">
                      {detail.title} ({detail?.release_date?.slice(0, 4)})
                    </h1>
                    <p className="text-xl ">
                      <span>{convertDate(detail.release_date)} |</span>
                      {detail?.genres?.map((genre, i) => {
                        const firstIndex = i === 0;
                        return (
                          <span key={genre.id}>
                            {firstIndex ? " " : ","} {genre.name}
                          </span>
                        );
                      })}
                    </p>
                    <p className="text-xl leading-relaxed">{detail.overview}</p>
                    <div className="flex items-center justify-center gap-2">
                      <BiSolidStar className="h-6 w-6 text-yellow-600" />
                      <p className="text-lg font-semibold">
                        {detail.vote_average} / 10
                      </p>
                    </div>
                    <a
                      href={detail.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-xl"
                    >
                      <BiPlayCircle className="h-6 w-6" />
                      <p className="font-semibold">Watch Movies</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailsPage;
