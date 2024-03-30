import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovies] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:4000/movies`)
    .then(resp => resp.json())
    .then(json => setMovies(json))
  }, [])

  return (
    <>
      <header>
       <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <section>
          {movies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title}/>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
