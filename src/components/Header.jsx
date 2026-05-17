function Header({ currentPage, onChangePage }) {
  return (
    <header>
      <h1>Application web de jeux cognitifs</h1>

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
      </nav>

      <p>Page actuelle : {currentPage}</p>
    </header>
  );
}

export default Header;