import React from "react";
import { ButtonSearch, ContainerHeader, InputSearch } from "./Header.styled";

export default function Header() {
  return (
    <div>
      <ContainerHeader>
        <InputSearch placeholder="Nome/Poder" />
        <ButtonSearch>Buscar</ButtonSearch>
      </ContainerHeader>
    </div>
  );
}

// background: linear-gradient(180deg, #000000 0%, #653966 100%);
