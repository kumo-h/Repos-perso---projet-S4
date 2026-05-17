function Header({ currentPage, onChangePage }) {
  return (
    <header>
      <h1 className="mot-hover">Application web de jeux cognitifs</h1>
      <p>Page actuelle : {currentPage}</p>

      <nav>
        <button
          type="button"
          onClick={() => onChangePage("presentation")}
        >
          Présentation
        </button>

        <button
          type="button"
          onClick={() => onChangePage("catalogue")}
        >
          Catalogue
        </button>

        <button
          type="button"
          onClick={() => onChangePage("memory")}
        >
          Memory
        </button>
      </nav>
    </header>
  );
}

export default Header;