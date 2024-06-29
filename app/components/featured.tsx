import { useEffect, useState } from "react";
import Image from "next/image";

export default function Featured() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=47409cd77a0ae9552851e6b7d55b9c02`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="mx-auto flex flex-col w-full h-auto relative mt-4 overflow-y-scroll">
      <h1 className="text-xl underline ml-1 mb-1 font-semibold">
        Featured
      </h1>
        {movieList.map((movie) => (
          <div className="m-auto border-b mb-2 border-black flex h-24 relative w-full" key={movie["id"]}>
            <Image
              height={100}
              width={60}
              className="shadow-lg h-auto w-auto shadow-black m-1 rounded-sm"
              src={`https://image.tmdb.org/t/p/w500${movie["poster_path"]}`}
              alt={movie["title"]}
            />
            <div className="flex flex-col w-[70%]">
                <h2 className="text-lg overflow-hidden block whitespace-nowrap text-ellipsis w-[90%]">{movie["title"]}</h2>
                <p className="text-xs elipsis w-[90%]">{movie["overview"]}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
