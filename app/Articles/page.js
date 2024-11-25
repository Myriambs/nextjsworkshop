import Link from "next/link";
import { movies } from "../data";

export default function Articles() {
    console.log("movies", movies);
    return (
        <>
            <h1>Liste des Articles</h1>
            {movies.map((movie) => {
                const link = `Articles/${movie.id}`;
                return (
                    <div key={movie.id} style={{ margin: "20px 0" }}>
                        <h2>{movie.Title}</h2>
                        <p>{movie.Description}</p>
                        <img 
                            src={movie.PosterURL} 
                            alt={movie.Title} 
                            style={{ width: "200px", height: "auto" }} 
                        />
                        <Link href={link}>Plus de détails</Link>
                    </div>
                );
            })}
        </>
    );
}
