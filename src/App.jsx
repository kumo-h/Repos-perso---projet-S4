import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PagePresentation from "./pages/PagePresentation";
import Catalogue from "./pages/Catalogue";
import Memory from "./pages/Memory";

function App() {
  const [currentPage, setCurrentPage] = useState("presentation");

  return (
    <div>
      <Header
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />

      {currentPage === "presentation" && <PagePresentation />}
      {currentPage === "catalogue" && <Catalogue onChangePage={setCurrentPage} />}
      {currentPage === "memory" && <Memory />}

      <Footer />
    </div>
  );
}

export default App;