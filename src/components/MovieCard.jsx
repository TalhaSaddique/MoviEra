import React from "react";

const MovieCard = ({ movies }) => {
  return (
    <div
      className={`item-center justify-center border-none overflow-hidden mt-20 bg-slate-900 w-[300px] h-[440px] sm:w-[320px] sm:h-[460px] rounded-2xl `}
    >
      <div>
        <div className="relative">
          <img
            className="w-full h-[330px] sm:h-[350px] "
            src={
              movies.Poster ? movies.Poster : "https://via.placeholder.com/400"
            }
            alt={movies.Title}
          />
        </div>
        <div className="flex flex-row items-center justify-center space-x-[180px] sm:space-x-[210px] text-[16px] font-semibold pt-2 px-2 uppercase tracking-wider ">
          <div className="  text-cyan-400  ">{movies.Type}</div>
          <div className=" text-zinc-300 ">{movies.Year}</div>
        </div>
        <div className="text-[21px] font-bold pt-2 pb-1 pl-2  text-orange-400 uppercase ">
          {movies.Title}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
