import Image from "next/image"
import Link from "next/link";
import { FaStar, FaExternalLinkAlt, FaChartLine } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";



export default async function Page({ params }: { params: { movie: string } }) {
  

  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const apiKey = process.env.TMDB_KEY;
  
  const results = await fetch(`https://api.themoviedb.org/3/movie/${params.movie}?api_key=${apiKey}`, options);
  const movie = await results.json()
  
    return (
      <main className="pt-6  flex flex-col items-center">
        <h1 className="page-title">Movie Details</h1>
        <div className="bg-2 mb-2 w-full p-4 rounded-3xl flex flex-col">
          <section className="flex flex-col ml-2 mb-4">
            <h1 className="text-2xl font-semibold">{movie.title}</h1>
            <h2 className="text-md ">{movie.status}: {movie.release_date}</h2>
          </section>
          <div className="flex w-full flex-col lg:flex-row gap-4 items-start pb-6">
            {movie.poster_path ? (
              <Image className="rounded-3xl shadow mx-auto shadow-black" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={250} height={250} alt={movie.title} />
            ) : (
              <div className="mx-auto text-4xl text-center"><h1>No Poster Available</h1></div>
            )}
            
            <div className="flex flex-col w-full h-full">
              
              <div className="flex text-center justify-around py-4 border-y-2 border-white border-dashed mb-4">

                <section className="flex flex-col items-center">
                  <h1 className="text-lg underline ">Runtime</h1>
                  <h1 className="text-xl  font-semibold"><FaClockRotateLeft className="inline mb-1 text-sm"/> {movie.runtime}mins</h1>
                </section>

                <section className="flex flex-col items-center">
                  <h1 className="text-lg underline">Rating</h1>
                  <h1 className="text-xl font-semibold"><FaStar className="text-yellow-500 inline mb-1 text-sm" /> {movie.vote_average.toFixed(1)}/10</h1>
                </section>

                <section className="flex flex-col items-center">
                  <h1 className="text-lg underline ">Popularity</h1>
                  <h1 className=" text-xl font-semibold"><FaChartLine className="inline mb-1 text-sm"/> {movie.popularity.toFixed(2)}</h1>
                </section>

                
              </div>

              <section className="flex flex-col mx-4 gap-1">
                {movie.tagline ? (
                    <h1 className="text-xl uppercase font-semibold text-shadow">{movie.tagline}</h1>) 
                  : (
                    <h1 className="text-xl font-semibold">Overview</h1>
                  )}
                {movie.overview ? 
                  <p className="text-lg">{movie.overview}</p> 
                : 
                  <p className="text-lg capitalize ">No overview available</p>}
                
                {movie.homepage ? (
                  <Link href={movie.homepage} className="text-lg border border-white rounded-3xl px-2 py-1 w-fit ml-auto  hover:underline hover:bg-white hover:text-black hover:font-bold"><FaExternalLinkAlt className="inline mb-1"/> Find Out More</Link>
                  
                ) : null}
              </section>

            </div>
          </div>

          <div className="flex text-center gap-4 w-full py-4 flex-col lg:flex-row items-center justify-around border-y-2 border-white border-dashed">
            
            <section className="flex w-1/4 flex-col items-center">
              <h1 className="text-lg underline font-semibold">Genres</h1>
              <h1 className="text-xl">{movie.genres?.map((genre: { name: any; }) => genre.name).join(", ")}</h1>
            </section>

            <section className="flex flex-col items-center">
                <h1 className="text-lg underline font-semibold">Language</h1>
                <h1 className="text-xl ">{movie.spoken_languages?.map((language: { name: any; }) => language.name).join(", ")}</h1>
            </section>
            
            <section className="flex flex-col items-center">
                <h1 className="text-lg underline font-semibold">Budget</h1>
                {movie.budget === 0 ? <h1 className="text-xl text-green-500 text-shadow font-semibold">N/A</h1> 
                : 
                  <h1 className="text-xl text-green-500 text-shadow font-semibold">${movie.budget.toLocaleString()}</h1>
                }
            </section>

            <section className="flex flex-col items-center">
                <h1 className="text-lg underline font-semibold">Revenue</h1>
                {movie.revenue === 0 ? <h1 className="text-xl text-green-500 text-shadow font-semibold">N/A</h1> 
                : 
                  <h1 className="text-xl text-green-500 text-shadow font-semibold">${movie.revenue.toLocaleString()}</h1>
                }
                
            </section>

          </div>

        </div>
      </main>
    )
  }