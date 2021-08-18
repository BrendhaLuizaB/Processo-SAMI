import React from "react";
import { ButtonSearch, ContainerHeader, InputSearch } from "./Header.styled";

export default function Header(props) {
  return (
    <ContainerHeader>
      <InputSearch
        placeholder="Nome"
        onChange={(event) => {
          props.setInputSearch(event.target.value);
        }}
      />
      <ButtonSearch>Buscar</ButtonSearch>
    </ContainerHeader>
  );
}
