import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./Components/Footer/Footer";
// import { HeroesRequest } from "./Requests/heroesRequests";
import axios from "axios";
import { BASE_URL } from "./constants/url";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [heroes, setHeroes] = useState([]);
  console.log("HEROES", heroes);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/search/A`)
      .then((res) => {
        console.log(res.data);
        setHeroes(res.data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Main
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        heroes={heroes}
      />
      {/* <HeroesRequest setHeroes={setHeroes} /> */}
      <Footer />
    </div>
  );
}

export default App;
