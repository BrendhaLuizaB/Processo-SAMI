import React from "react";
// import { useState } from "react";
import { ButtonSearch, ContainerHeader, InputSearch } from "./Header.styled";

export default function Header(props) {
  // const [inputSearch, setInputSearch] = useState("");
  return (
    <div>
      <ContainerHeader>
        <InputSearch
          placeholder="Nome/Poder"
          onChange={(event) => {
            props.setInputSearch(event.target.value);
          }}
        />
        <ButtonSearch>Buscar</ButtonSearch>
      </ContainerHeader>
    </div>
  );
}

// background: linear-gradient(180deg, #000000 0%, #653966 100%);
