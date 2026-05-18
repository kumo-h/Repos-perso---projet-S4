function GameCard({ title, description, status, color, onplay, category }) {
  return (
    <div className="game-card-clean" style={{ borderTopColor: color }}>
      
      <h2 style={{ color: color }}>{title}</h2>
      
      <div className="game-card-content">
        <span className="game-description">
          <strong>Description :</strong> {description}
        </span>
        
        <span className="game-description" style={{ marginTop: "5px", display: "block" }}>
          <strong>Catégorie :</strong> {category}
        </span>

        {/* On regroupe le bouton et le statut ensemble dans la zone du bas */}
        <div className="game-status">
          <button 
            type="button"
            className="play-button"
            style={{ backgroundColor: color, borderColor: color }}
            onClick={onplay}
          > 
            Jouer 
          </button>
          
          {/* Un petit conteneur de texte pour espacer le mot "Statut" sous le bouton */}
          <div style={{ marginTop: "15px" }}>
            <strong>Statut :</strong> {status}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;