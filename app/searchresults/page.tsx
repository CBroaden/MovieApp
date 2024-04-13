'use client'
import Image from "next/image";
import { useSearchParams } from "next/navigation";


// eslint-disable-next-line @next/next/no-async-client-component
export default async function SearchResults() {
    const apiKey = process.env.TMDB_KEY;    
    const movie = useSearchParams().get("search");
    const results = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${apiKey}`);
    const data = await results.json();
    const movies = data.results;

    return (
        <div className=" watching mx-auto mt-6 pt-6 text-white">
            

            {movies && movies.length > 0 ? (
                
                <div>
                    <h1 className=" w-fit underline px-10 py-2 mx-auto text-center bg-main font-bold text-3xl">Search Results</h1>
                    <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {movies.map((movie: any) => (
                        <div key={movie.id} className="p-5 my-4 bg-main">
                            
                            {movie.poster_path ? (
                                <Image 
                                className="shadow-lg shadow-black mx-auto rounded-3xl"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                alt={movie.title} 
                                width={250} 
                                height={250} 
                                />
                            ) : (
                                <div className="text-center flex justify-center items-center center min-h-[250px] w-full">
                                    <h1>No Poster Available</h1>
                                </div>
                            )}
                            
                            <h2 className="text-xl my-2 italic font-bold underline text-center">
                                {movie.title}
                            </h2>
                            
                            <p>
                                {movie.overview}
                            </p>

                        </div>
                        ))}
                    </div>
                </div>)
                : (
                    
                    <h1 className="mt-10 text-center text-xl">No results found</h1>
                )}
        

        </div>
    )
}