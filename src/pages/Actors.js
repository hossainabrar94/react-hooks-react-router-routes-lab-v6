import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
    .then(resp => resp.json())
    .then(json => setActors(json))
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article>
            <h2>{actor.name}</h2>
            <p>Movies:</p>
            <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
