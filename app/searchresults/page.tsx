import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ContentBar from "../components/contentbar";





export default async function SearchResults( {
    params,
    searchParams,
    }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
    }) {



    const apiKey = process.env.TMDB_KEY;    
    const movie = searchParams?.search;
    const results = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${apiKey}`);
    const data = await results.json();
    const movies = data.results;
    console.log(data.results);

    return (
        <main className=" pt-6">
            
            {movies && movies.length > 0 ? (
                
                <div>
                    <h1 className=" w-fit underline px-10 py-2 mx-auto text-center font-bold text-3xl">Search Results</h1>
                    <div className=" mx-auto grid grid-cols-1 md:grid-cols-2">
                    {movies.map((movie: any) => (
                        <div key={movie.id} className="p-5 my-4">
                            
                            {movie.poster_path ? (
                                <Image 
                                className="shadow-lg shadow-black mx-auto rounded-3xl"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                alt={movie.title} 
                                width={150} 
                                height={150} 
                                />
                            ) : (
                                <div className="text-center flex justify-center items-center min-h-[250px] w-full">
                                    <h1>No Poster Available</h1>
                                </div>
                            )}
                            
                            <h2 className="text-xl my-2 italic font-bold underline text-center">
                                {movie.title}
                            </h2>
                            
                            <p className="">
                                {movie.overview}
                            </p>

                        </div>
                        ))}
                    </div>
                </div>)
                : (
                    
                    <h1 className="mt-10 text-center text-xl">No results found</h1>
                )}
            

        </main>
    )
}