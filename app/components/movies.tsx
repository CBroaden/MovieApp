"use client"
import { useEffect, useState } from 'react'



export default function Movies() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=47409cd77a0ae9552851e6b7d55b9c02"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);

  

  return (
    <main className="flex flex-col min-h-screen bg-slate-400  items-center justify-between p-14">
    
      

      <div className='container rounded-3xl shadow-lg shadow-black pb-2 bg-gray-700 mx-auto'>
        <h1
          className='mb-4 text-2xl py-2 text-center font-semibold bg-slate-600 rounded-t-3xl shadow-sm shadow-black mx-auto'>
          Discover</h1>
        <div className="flex flex-wrap justify-center ">
          {movieList.map((movie) => (
            <div className='m-2'>
              <img
                className="h-[150px] w-[100px] md:h-[200px] md:w-[150px]"
                src={`https://image.tmdb.org/t/p/w500${movie['poster_path']}`}
                alt={movie['title']}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
