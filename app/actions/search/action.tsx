"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function searchMovie(movie: string | null) {
    const apiKey = process.env.TMDB_KEY;
    
    

    const results = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${apiKey}`);
    const data = await results.json();
    const movies = data.results;
    console.log(movie)

    return (
        movies
    );



}