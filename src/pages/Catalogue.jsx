import GameCard from "../components/GameCard";

function Catalogue() {
  const games = [
  {
    title: "Memory",
    description:
      "Un jeu de mémoire dans lequel l'utilisateur doit retrouver les paires de cartes identiques.",
    status: "Disponible",
    category: "Mémoire",
  },
  {
    title: "Simon",
    description:
      "Un jeu de mémoire dans lequel l'utilisateur doit rejouer des sécances de couleurs et de sons.",
    status: "Bientot disponible",
    category: "Mémoire",
  },
  {
    title: "Réflexes",
    description:
      "Un mini-jeu basé sur la rapidité de réaction de l'utilisateur.",
    status: "Bientot disponible",
    category: "Rapidité",
  },
];


  return (
    <main>

      <h1 className="mot-hover">Catalogue de jeux</h1>

      {games.map((game) => (
        <GameCard
          key={game.title}
          title={game.title}
          description={game.description}
          status={game.status}
          category={game.category}
        />
      ))}
    </main>
  );
}

export default Catalogue;