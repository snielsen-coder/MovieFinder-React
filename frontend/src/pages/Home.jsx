import { useState, useEffect } from "react"; // called a hook
import MovieCard from "../components/MovieCard"
import {searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

// npm run dev - to run the vita web server

function Home() {
    // preserves state because the component is constantly being re-rendered. need to list all elements that should preserve value
    const [searchQuery, setSearchQuery]  = useState("");
    // will store the popular movies in a state list
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    //will run only once when the pages loads OR when the dependency array changes -> []
    // calls api in the api.js
    useEffect(() => {
        const loadPopularMovies = async() => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")

            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies()
    }, [])

    // const movies = [
    //     { id: 1, title: "john Wick", release_date: "2001" },
    //     { id: 2, title: "Terminator", release_date: "1983" },
    //     { id: 3, title: "The Matrix", release_date: "1999" }
    // ]

    // define function 
    // calls api in the api.js
    const handleSearch =  async (e) => {
        // allows you to type into the textbox
        e.preventDefault();
        if (!~searchQuery.trim()) return

        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to Search movies...")
        } finally {
            setLoading(false)
        }
        //alert(searchQuery)S
        //setSearchQuery("")
    }

    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="search for movies" className="search-input" 
                value={searchQuery} // connects component to searchQuery state
                onChange={(e) => setSearchQuery(e.target.value)}/> 
                <button type="submit" className="search-button" >Search </button>
            </form>
            {error && <div className="error-message">{error}</div>}
            
            {loading ? (<div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {/* display all movies in the const movies structure.
                    movie.title.toLowerCase().startsWith(searchQuery) - will match anything typed in textbox with the title
                    Remember - this component constantly re-renders 

                    .map - iterates through all mnembers in the movies object
                    */}
                    
                    {movies.map(
                        (movie) =>
                            //movie.title.toLowerCase().startsWith(searchQuery) && (
                            (
                                <MovieCard movie={movie} key={movie.id} />
                            )   
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;