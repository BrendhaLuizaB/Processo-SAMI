import React from "react";
import Card from "../../Components/Cards/Card";
import { ContainerMain } from "./Main.styled";

export default function Main(props) {
  return (
    <ContainerMain>
      {props.heroes
        .filter((val) => {
          if (props.inputSearch === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(props.inputSearch.toLowerCase())
          ) {
            return val;
          }
        })
        .map((hero) => {
          return (
            <Card
              key={hero.id}
              inputSearch={props.inputSearch}
              setInputSearch={props.setInputSearch}
              setModalIsOpen={props.setModalIsOpen}
              modalIsOpen={props.modalIsOpen}
              heroes={props.heroes}
              name={hero.name}
              image={hero.image.url}
              hero={hero}
            />
          );
        })}
    </ContainerMain>
  );
}
