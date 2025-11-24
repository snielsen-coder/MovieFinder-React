import "../css/favorites.css"
import { useMovieContext } from "../contexts/movieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="move-grid">
                    {
                        favorites.map(
                            (movie) =>
                            (
                                <MovieCard movie={movie} key={movie.id} />
                            )
                        )
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to you favorites and they will appear here</p>
        </div>
    )


    return <div className="favorites-empty">
        <h2>No Favorite Movies yet</h2>
        <p>Start adding movies to your favorites and they'll appear here</p>
    </div>
}
// get add router to your app for menu nav
// npm install react-router-dom

export default Favorites