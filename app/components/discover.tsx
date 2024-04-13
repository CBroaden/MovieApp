"use client";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Discover() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=47409cd77a0ae9552851e6b7d55b9c02`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovie();
  }, []);

  const randomMovie = Math.floor(Math.random() * movieList.length);
  const movie = movieList.at(randomMovie);
  console.log(movieList.length)
  

    return (
    <div className="container mx-auto w-full h-full relative rounded-2xl px-5">
        {movie?.['title'] && (
            <div className="flex flex-col  mx-auto w-min bg-main px-8 pb-4 pt-0 border-black border rounded-xl shadow-lg shadow-black">
                <h1 className="text-xl text-white  text-center my-4 font-semibold mx-auto">Featured</h1>
                <div className="m-auto h-72 w-48 relative ">
                    <h1>{movieList.at(0)?.['title']}</h1>
                    <Image
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className="shadow-lg shadow-black mx-auto rounded-3xl" 
                        src={`https://image.tmdb.org/t/p/w500${movie?.['poster_path']}`}
                        alt="Movie Poster"
                    />
                </div >
                <h1 className="text-xl w-full bg-white bg-opacity-50 rounded-lg p-1 border border-black shadow-lg shadow-black text-black text-center mt-4 font-semibold mx-auto">{movie?.['title']}</h1>
                
            </div>
        )}
        
    </div>
    );
}
