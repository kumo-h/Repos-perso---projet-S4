import { useState } from "react";
import MemoryCard from "../components/MemoryCard";

const symbols = ["🍎", "🍌", "🍇", "🍓", "🍒", "🥝"];

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
}

function createCards() {
  const pairs = [...symbols, ...symbols];

  const cards = pairs.map((symbol, index) => ({
    id: index + 1,
    symbol,
    isFlipped: false,
    isMatched: false,
  }));

  return shuffleArray(cards);
}

function Memory() {
  const [cards, setCards] = useState(createCards);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  function handleCardClick(clickedCard) {
    if (isLocked) {
      return;
    }

    if (clickedCard.isFlipped || clickedCard.isMatched) {
      return;
    }

    const updatedCards = cards.map((card) =>
      card.id === clickedCard.id
        ? { ...card, isFlipped: true }
        : card
    );

    setCards(updatedCards);

    if (firstCard === null) {
      setFirstCard(clickedCard);
      return;
    }

    setSecondCard(clickedCard);
    setMoves((previousMoves) => previousMoves + 1);

    const isMatch = firstCard.symbol === clickedCard.symbol;

    if (isMatch) {
      handleMatch(firstCard, clickedCard, updatedCards);
    } else {
      handleMismatch(firstCard, clickedCard, updatedCards);
    }
  }

  function handleMatch(cardA, cardB, currentCards) {
    const matchedCards = currentCards.map((card) =>
      card.id === cardA.id || card.id === cardB.id
        ? { ...card, isMatched: true }
        : card
    );

    setCards(matchedCards);
    resetSelection();
  }

  function handleMismatch(cardA, cardB, currentCards) {
    setIsLocked(true);

    setTimeout(() => {
      const hiddenCards = currentCards.map((card) =>
        card.id === cardA.id || card.id === cardB.id
          ? { ...card, isFlipped: false }
          : card
      );

      setCards(hiddenCards);
      resetSelection();
      setIsLocked(false);
    }, 800);
  }

  function resetSelection() {
    setFirstCard(null);
    setSecondCard(null);
  }

  function restartGame() {
    setCards(createCards());
    setFirstCard(null);
    setSecondCard(null);
    setMoves(0);
    setIsLocked(false);
  }

  const hasWon = cards.every((card) => card.isMatched);

  return (
    <main className="memory-page">
      <section className="memory-header">
        <h1>Memory</h1>
        <p>
          Retrouvez toutes les paires en retournant deux cartes à chaque tour.
        </p>

        <div className="memory-stats">
          <p>Coups joués : {moves}</p>
          <button type="button" onClick={restartGame}>
            Recommencer
          </button>
        </div>

        {hasWon && (
          <p className="victory-message">
            Bravo, vous avez gagné en {moves} coups !
          </p>
        )}
      </section>

      <section className="memory-grid">
        {cards.map((card) => (
          <MemoryCard
            key={card.id}
            card={card}
            onCardClick={handleCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Memory;