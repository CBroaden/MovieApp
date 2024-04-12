'use client'
import Image from "next/image";
import searchMovie from "../actions/search/action";
import { useSearchParams } from "next/navigation";


// eslint-disable-next-line @next/next/no-async-client-component
export default async function SearchResults() {
    const apiKey = process.env.TMDB_KEY;    
    const movie = useSearchParams().get("search");
    const results = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${apiKey}`);
    const data = await results.json();
    const movies = data.results;

    return (
        <div className="container mx-auto mt-6 text-white">
            

            {movies && movies.length > 0 ? (
                
                <div>
                    <h1 className="mt-10 text-center text-xl">Search Results</h1>
                    <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {movies.map((movie: any) => (
                        <div key={movie.id} className="p-5 my-4 ">
                            <h2 className="text-xl italic font-bold underline">{movie.title}</h2>
                            {movie.poster_path && (
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={250} height={250} />
                            )}
                            <p>{movie.overview}</p>
                        </div>
                        ))}
                    </div>
                </div>)
                : (
                    <p>No results found</p>
                )}
        

        </div>
    )
}