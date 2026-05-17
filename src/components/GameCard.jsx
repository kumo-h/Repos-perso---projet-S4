function GameCard({ title, description , status , category }) {

  return (
    <section>
      <h3 className="mot-hover">{title}</h3>
      <p>{description}</p>
      <p>{status}</p>
      <p>{category}</p>
       
    </section>

  );
}

export default GameCard;