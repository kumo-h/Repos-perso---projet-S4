function Header({ currentPage, onChangePage }) {
  return (
    <header className="navbar-container">
      {/* ZONE GAUCHE : Nom de l'app (Cliquable) */}
      <div className="navbar-left" onClick={() => onChangePage("presentation")}>
        <h1 className="navbar-logo">BrainApp 🧠</h1>
      </div>

      {/* ZONE MILIEU : Titre de la page actuelle */}
      <div className="navbar-center">
        <span className="current-page-title">
          {currentPage === "presentation" ? "Présentation" : "Catalogue"}
        </span>
      </div>

      {/* ZONE DROITE : Les boutons de navigation */}
      <nav className="navbar-right">
        <button
          type="button"
          className={currentPage === "presentation" ? "nav-btn active" : "nav-btn"}
          onClick={() => onChangePage("presentation")}
        >
          Présentation
        </button>

        <button
          type="button"
          className={currentPage === "catalogue" ? "nav-btn active" : "nav-btn"}
          onClick={() => onChangePage("catalogue")}
        >
          Catalogue
        </button>
      </nav>
    </header>
  );
}

export default Header;