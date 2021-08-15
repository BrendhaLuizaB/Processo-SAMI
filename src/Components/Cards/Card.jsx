import React from "react";
import {
  ButtonDetails,
  ContainerCard,
  ContainerInfoCard,
  DivImageCard,
  ImageHero,
} from "./Card.styled";

export default function Card(props) {
  return (
    <ContainerCard>
      <DivImageCard>
        <ImageHero src={props.image} alt="imagem" />
      </DivImageCard>
      <ContainerInfoCard>
        <div>{props.name}</div>
        <ButtonDetails>Detalhes</ButtonDetails>
      </ContainerInfoCard>
    </ContainerCard>
  );
}
