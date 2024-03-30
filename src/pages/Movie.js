import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const [movie, setMovie] = useState({ genres:[]})
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(resp => resp.json())
    .then(json => setMovie(json))
  }, [movieId])

  return (
    <>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>
          Movie Time: {movie.time} minutes
        </p>
        <p>Genres:</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}<br /></span>
        ))}
      </main>
    </>
  );
};

export default Movie;
