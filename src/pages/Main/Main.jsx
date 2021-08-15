import React from "react";
import Card from "../../Components/Cards/Card";
import { ContainerMain } from "./Main.styled";

export default function Main(props) {
  return (
    <ContainerMain>
      {props.heroes.map((hero) => {
        return (
          <Card
            key={hero.id}
            inputSearch={props.inputSearch}
            setInputSearch={props.setInputSearch}
            name={hero.name}
            image={hero.image.url}
          />
        );
      })}
    </ContainerMain>
  );
}
