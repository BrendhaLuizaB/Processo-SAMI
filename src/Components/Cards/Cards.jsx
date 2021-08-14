import React from "react";
import {
  ButtonDetails,
  ContainerCard,
  ContainerInfoCard,
  DivImageCard,
} from "./Cards.styled";

export default function Cards() {
  return (
    <ContainerCard>
      <DivImageCard>
        <img src={""} alt="image" />
      </DivImageCard>
      <ContainerInfoCard>
        <div>Nome - Poder</div>
        <ButtonDetails>Detalhes</ButtonDetails>
      </ContainerInfoCard>
    </ContainerCard>
  );
}
