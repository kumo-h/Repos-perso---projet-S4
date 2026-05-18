import GameCard from "../components/GameCard";

function Catalogue({ onChangePage }) {
  const games = [
  {
    title: "Memory",
    description:
      "Un jeu de mémoire dans lequel l'utilisateur doit retrouver les paires de cartes identiques.",
    status: "Disponible",
    category: "Mémoire",
    couleur : "var(--rouge)",
  },
  {
    title: "Simon",
    description:
      "Un jeu de mémoire dans lequel l'utilisateur doit rejouer des sécances de couleurs et de sons.",
    status: "Bientot disponible",
    category: "Mémoire",
    couleur : "var(--bleu)",
  },
  {
    title: "Réflexes",
    description:
      "Un mini-jeu basé sur la rapidité de réaction de l'utilisateur.",
    status: "Bientot disponible",
    category: "Rapidité",
    couleur : "var(--jaune)",
  },
];


  return (
    <main>
      <h1>Catalogue de jeux</h1>
      <div className="games-grid">  
      {games.map((game) => (
        <GameCard
          key={game.title}
          title={game.title}
          description={game.description}
          status={game.status}
          category={game.category}
          color={game.couleur}
          onplay={() => {
            console.log("Le bouton Jouer a bien été cliqué pour le jeu :", game.title);
            // On transforme le titre en minuscules (.toLowerCase()) pour éviter les pièges de majuscules !
            const gameKey = game.title.toLowerCase();

            if (gameKey === "memory") {
              onChangePage("memory");
            } else if (gameKey === "simon") {
              alert("Le jeu de Simon sera bientôt disponible !");
            } else if (gameKey === "réflexes" || gameKey === "reflexes") {
              alert("Le jeu de Réflexes sera bientôt disponible !");
            } else {
              alert(`${game.title} sera bientôt disponible !`);
            }
          }}
        />
      ))}
    </div>
  </main>
);
}

export default Catalogue;