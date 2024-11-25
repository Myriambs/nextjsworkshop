import { movies } from "@/app/data";

export default function ArticlesDetails({ params }) {
    console.log("params", params);
    const articleFound = movies.find((movie) => movie.id === parseInt(params.id));

    if (!articleFound) {
        return <h1>Article introuvable</h1>;
    }

    return (
        <>
            <h1>Détails des movies </h1>
            <div>
                <h2>{articleFound.Title}</h2>
                <img 
                    src={articleFound.PosterURL} 
                    alt={articleFound.Title} 
                    style={{ width: "300px", height: "auto" }} 
                />
                <p><strong>Description :</strong> {articleFound.Description}</p>
                <p><strong>Note :</strong> {articleFound.Rate}/5</p>
            </div>
        </>
    );
}
