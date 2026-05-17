function GameCard({ title, description , status }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{status}</p>
    </section>
  );
}

export default GameCard;