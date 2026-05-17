function MemoryCard({ card, onCardClick, isDisabled }) {
  const isVisible = card.isFlipped || card.isMatched;

  return (
    <button
      type="button"
      className={`memory-card ${isVisible ? "flipped" : ""} ${
        card.isMatched ? "matched" : ""
      }`}
      onClick={() => onCardClick(card)}
      disabled={isDisabled || card.isFlipped || card.isMatched}
    >
      {isVisible ? card.symbol : "?"}
    </button>
  );
}

export default MemoryCard;