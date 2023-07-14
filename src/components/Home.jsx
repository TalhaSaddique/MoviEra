import { useEffect, useState } from "react";
import Search from "./Search";
import MovieCard from "./MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const API_URL = "https://www.omdbapi.com?apikey=7a827caa";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("AVENGERS");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-32 ">
      <div className="text-6xl font-bold text-transparent tracking-widest bg-clip-text bg-gradient-to-br from-yellow-500 to-slate-900">
        <a href=""> MoviEra </a>
      </div>
      <div className="mt-20">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchMovies={searchMovies}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 justify-items-center mb-10 px-20">
        {movies && movies.length > 0 ? (
          movies.map((movie, index) => <MovieCard key={index} movies={movie} />)
        ) : (
          <h2 className="text-white font-bold flex flex-row items-center justify-center text-2xl mt-48">
            No Movies Found!
          </h2>
        )}
      </div>
    </div>
  );
};

export default Home;
