import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PagePresentation from "./pages/PagePresentation";
import Catalogue from "./pages/Catalogue";

function App() {
  const [currentPage, setCurrentPage] = useState("presentation");

  return (
    <div>
      <Header
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />

      {currentPage === "presentation" && <PagePresentation />}
      {currentPage === "catalogue" && <Catalogue />}

      <Footer />
    </div>
  );
}

export default App;