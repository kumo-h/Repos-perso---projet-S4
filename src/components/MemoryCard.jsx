function MemoryCard({ card, onCardClick }) {
  const isVisible = card.isFlipped || card.isMatched;

  return (
    <button
      type="button"
      className={`memory-card ${isVisible ? "flipped" : ""}`}
      onClick={() => onCardClick(card)}
      disabled={card.isFlipped || card.isMatched}
    >
      {isVisible ? card.symbol : "?"}
    </button>
  );
}

export default MemoryCard;