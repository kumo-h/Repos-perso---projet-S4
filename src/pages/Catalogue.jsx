import GameCard from "../components/GameCard";

function Catalogue() {
  const games = [
  {
    title: "Memory",
    description:
      "Un jeu de mémoire dans lequel l'utilisateur doit retrouver les paires de cartes identiques.",
    status: "Disponible",
  },
  {
    title: "Simon",
    description:
      "Un jeu de mémoire dans lequel l'utilisateur doit rejouer des sécances de couleurs et de sons.",
    status: "Bientot disponible",
  },
  {
    title: "Réflexes",
    description:
      "Un mini-jeu basé sur la rapidité de réaction de l'utilisateur.",
    status: "Bientot disponible",
  },
];

  return (
    <main>
      <h1>Catalogue de jeux</h1>

      {games.map((game) => (
        <GameCard
          key={game.title}
          title={game.title}
          description={game.description}
          status={game.status}
        />
      ))}
    </main>
  );
}

export default Catalogue;