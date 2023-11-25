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
    
      <h1 className='mb-12 text-xl font-bold'>Movie Recommendation App</h1>
      
      <ul>
        {movieList.map((movie) => (
          <li>{movie['title']}</li>
        ))}
      </ul>

      <div className='container rounded-3xl shadow-lg shadow-black pb-2 bg-gray-700 mx-auto'>
        <h1
          className='mb-2 text-center font-semibold bg-slate-600 rounded-t-3xl shadow-sm shadow-black mx-auto'>
          Trending</h1>
        <div className="flex flex-wrap justify-center ">
          {movieList.map((movie) => (
            <img
              className="h-[200px] w-[150px] m-1"
              src={`https://image.tmdb.org/t/p/w500${movie['poster_path']}`}
              alt={movie['title']}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
