import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [heroes, setHeroes] = useState([]);
  const [detailsModal, setDetailsModal] = useState([]);

  const heroRequest = () => {
    axios
      .get(`${BASE_URL}/search/A`)
      .then((res) => {
        setHeroes(res.data.results);
      })
      .catch((err) => console.error(err));
  };
  const detailsRequest = (id) => {
    axios
      .get(`${BASE_URL}/${id}`)
      .then((res) => {
        setDetailsModal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const data = {
    heroes,
    setHeroes,
    heroRequest,
    detailsRequest,
    detailsModal,
    setDetailsModal,
  };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
