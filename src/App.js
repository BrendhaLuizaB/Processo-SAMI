import React, { useContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./Components/Footer/Footer";
import GlobalStateContext from "./Components/Global/GlobalStateContext";
import Details from "./Components/Details/Details";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { heroes, heroRequest, detailsModal, setDetailsModal } =
    useContext(GlobalStateContext);

  useEffect(() => {
    heroRequest();
  }, []);

  return (
    <>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      {modalIsOpen ? (
        <Details
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          heroes={heroes}
          detailsModal={detailsModal}
          setDetailsModal={setDetailsModal}
        />
      ) : null}
      <Main
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        heroes={heroes}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <Footer />
    </>
  );
}

export default App;
