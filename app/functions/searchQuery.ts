
export async function getMovies(search: string | null) {
    const apiKey = process.env.TMDB_KEY;
    const results = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${apiKey}`);
    const data = await results.json();
    const movies = data.results;
    return movies;
}