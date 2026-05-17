import { useState } from "react";
import MemoryCard from "../components/MemoryCard";

const allSymbols = [
  "🍎",
  "🍌",
  "🍇",
  "🍓",
  "🍒",
  "🥝",
  "🍍",
  "🥥",
  "🍉",
  "🍑",
];

const levels = [
  {
    id: 1,
    name: "Facile",
    pairs: 4,
    maxMoves: 10,
    columns: 4,
  },
  {
    id: 2,
    name: "Moyen",
    pairs: 6,
    maxMoves: 16,
    columns: 4,
  },
  {
    id: 3,
    name: "Difficile",
    pairs: 8,
    maxMoves: 22,
    columns: 4,
  },
  {
    id: 4,
    name: "Expert",
    pairs: 10,
    maxMoves: 28,
    columns: 5,
  },
];

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

function createCards(numberOfPairs) {
  const selectedSymbols = allSymbols.slice(0, numberOfPairs);
  const pairs = [...selectedSymbols, ...selectedSymbols];

  const cards = pairs.map((symbol, index) => ({
    id: `${symbol}-${index}`,
    symbol,
    isFlipped: false,
    isMatched: false,
  }));

  return shuffleArray(cards);
}

function Memory() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [cards, setCards] = useState(() => createCards(levels[0].pairs));
  const [firstCard, setFirstCard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [gameStatus, setGameStatus] = useState("playing");

  const currentLevel = levels[levelIndex];
  const remainingMoves = currentLevel.maxMoves - moves;
  const isLastLevel = levelIndex === levels.length - 1;

  function handleCardClick(clickedCard) {
    if (isLocked || gameStatus !== "playing") {
      return;
    }

    if (clickedCard.isFlipped || clickedCard.isMatched) {
      return;
    }

    if (firstCard !== null && clickedCard.id === firstCard.id) {
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

    const newMoves = moves + 1;
    setMoves(newMoves);

    const isMatch = firstCard.symbol === clickedCard.symbol;

    if (isMatch) {
      handleMatch(firstCard, clickedCard, updatedCards, newMoves);
    } else {
      handleMismatch(firstCard, clickedCard, updatedCards, newMoves);
    }
  }

  function handleMatch(cardA, cardB, currentCards, currentMoves) {
    const matchedCards = currentCards.map((card) =>
      card.id === cardA.id || card.id === cardB.id
        ? { ...card, isMatched: true }
        : card
    );

    setCards(matchedCards);
    setFirstCard(null);

    const hasWon = matchedCards.every((card) => card.isMatched);

    if (hasWon) {
      setGameStatus("won");
      return;
    }

    if (currentMoves >= currentLevel.maxMoves) {
      setGameStatus("lost");
    }
  }

  function handleMismatch(cardA, cardB, currentCards, currentMoves) {
    setIsLocked(true);

    setTimeout(() => {
      const hiddenCards = currentCards.map((card) =>
        card.id === cardA.id || card.id === cardB.id
          ? { ...card, isFlipped: false }
          : card
      );

      setCards(hiddenCards);
      setFirstCard(null);
      setIsLocked(false);

      if (currentMoves >= currentLevel.maxMoves) {
        setGameStatus("lost");
      }
    }, 800);
  }

  function restartLevel() {
    setCards(createCards(currentLevel.pairs));
    setFirstCard(null);
    setMoves(0);
    setIsLocked(false);
    setGameStatus("playing");
  }

  function goToNextLevel() {
    if (isLastLevel) {
      return;
    }

    const nextLevelIndex = levelIndex + 1;
    const nextLevel = levels[nextLevelIndex];

    setLevelIndex(nextLevelIndex);
    setCards(createCards(nextLevel.pairs));
    setFirstCard(null);
    setMoves(0);
    setIsLocked(false);
    setGameStatus("playing");
  }

  function restartGame() {
    setLevelIndex(0);
    setCards(createCards(levels[0].pairs));
    setFirstCard(null);
    setMoves(0);
    setIsLocked(false);
    setGameStatus("playing");
  }

  return (
    <main className="memory-page">
      <section className="memory-header">
        <h1>Memory</h1>

        <p>
          Retrouvez toutes les paires. La difficulté augmente à chaque niveau.
        </p>

        <div className="memory-stats">
          <p>Niveau : {currentLevel.name}</p>
          <p>Paires : {currentLevel.pairs}</p>
          <p>Coups joués : {moves}</p>
          <p>Coups restants : {remainingMoves}</p>
        </div>

        {gameStatus === "won" && !isLastLevel && (
          <div className="memory-message success">
            <p>Bravo ! Niveau terminé en {moves} coups.</p>
            <button type="button" onClick={goToNextLevel}>
              Niveau suivant
            </button>
          </div>
        )}

        {gameStatus === "won" && isLastLevel && (
          <div className="memory-message success">
            <p>Excellent ! Vous avez terminé tous les niveaux.</p>
            <button type="button" onClick={restartGame}>
              Recommencer depuis le début
            </button>
          </div>
        )}

        {gameStatus === "lost" && (
          <div className="memory-message danger">
            <p>Perdu ! Vous avez dépassé le nombre de coups autorisés.</p>
            <button type="button" onClick={restartLevel}>
              Recommencer le niveau
            </button>
          </div>
        )}

        {gameStatus === "playing" && (
          <button
            type="button"
            className="restart-button"
            onClick={restartLevel}
          >
            Recommencer le niveau
          </button>
        )}
      </section>

      <section
        className="memory-grid"
        style={{
          gridTemplateColumns: `repeat(${currentLevel.columns}, 1fr)`,
        }}
      >
        {cards.map((card) => (
          <MemoryCard
            key={card.id}
            card={card}
            onCardClick={handleCardClick}
            isDisabled={isLocked || gameStatus !== "playing"}
          />
        ))}
      </section>
    </main>
  );
}

export default Memory;