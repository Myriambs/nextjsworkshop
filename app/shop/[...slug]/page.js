export default function Shop({ params }) {
    // Vérifie si "params.slug" est défini et contient au moins 2 segments
    if (params.slug && params.slug.length === 2) {
      return (
        <>
          <h1>
            Lecture contenu : {params.slug[0]} et {params.slug[1]}
          </h1>
        </>
      );
    }
  
    // Gestion des cas où "params.slug" n'a pas 2 segments
    return (
      <h1>
        Veuillez fournir deux paramètres dans l URL (exemple : /shop/cravatte/robe)
      </h1>
    );
  }
  