import React from "react";
import {
  ButtonDetails,
  ContainerCard,
  ContainerInfoCard,
  DivImageCard,
  ImageHero,
} from "./Card.styled";
import { useContext } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";

export default function Card({ hero, setModalIsOpen }) {
  const { detailsRequest } = useContext(GlobalStateContext);

  const details = (id) => {
    setModalIsOpen(true);
    detailsRequest(id);
  };
  return (
    <div>
      <ContainerCard>
        <DivImageCard>
          <ImageHero src={hero.image.url} alt="imagem" />
        </DivImageCard>
        <ContainerInfoCard>
          <div>{hero.name}</div>
          <ButtonDetails onClick={() => details(hero.id)}>
            Detalhes
          </ButtonDetails>
        </ContainerInfoCard>
      </ContainerCard>
    </div>
  );
}
