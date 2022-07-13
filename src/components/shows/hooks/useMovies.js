import {useEffect, useState} from 'react';
import movieService from "../services/movieService";

const useMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        movieService.fetchAllMovies().then(movies => {
            
            setMovies(movies);
        });
        // eslint-disable-next-line
    }, []);
    return {
        movies: movies,
        
    };
}

export default useMovies;
