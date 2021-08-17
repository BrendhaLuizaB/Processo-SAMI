import React from "react";
import Cards from "../Cards/Card";
import {
  CloseModal,
  ContainerAppearance,
  ContainerBiography,
  ContainerCloseModal,
  ContainerInfos,
  ContainerModal,
  ContainerName,
  ContainerNameCloseModal,
  ContainerPowestats,
  ContainerWork,
} from "./Details.styled";

export default function Details(props) {
  return (
    <div>
      <ContainerModal>
        <ContainerNameCloseModal>
          <ContainerName>
            <h1>{props.detailsModal.name}</h1>
          </ContainerName>
          <ContainerCloseModal>
            <CloseModal onClick={() => props.setModalIsOpen(false)}>
              X
            </CloseModal>
          </ContainerCloseModal>
        </ContainerNameCloseModal>
        <div>{props.detailsModal.image.url}</div>
        <ContainerInfos>
          <ContainerAppearance className="APARENCIA">
            <h3>Aparência</h3>
            <p>
              <strong>Eye color: </strong>
              {props.detailsModal.appearance?.["eye-color"]}
            </p>
            <p>
              <strong>Gender:</strong> {props.detailsModal.appearance?.gender}
            </p>
            <p>
              <strong>Race:</strong> {props.detailsModal.appearance?.race}
            </p>
          </ContainerAppearance>
          <ContainerBiography className="BIOGRAFIA">
            <h3>Biografia</h3>
            <p>
              <strong>Aliases:</strong>{" "}
            </p>
            <ul>
              <li>
                <p> {props.detailsModal.biography?.aliases}</p>
              </li>
            </ul>
            <p>
              <strong>First Appearance:</strong> <br />
            </p>
            <p>{props.detailsModal.biography?.["first-appearance"]}</p>
            <p>
              <strong>Full Name:</strong> <br />
            </p>
            <p>{props.detailsModal.biography?.["full-name"]}</p>
            <p>
              <strong>Publisher:</strong> <br />
            </p>
            <p>{props.detailsModal.biography?.publisher}</p>
          </ContainerBiography>
          <ContainerPowestats className="POWESTATS">
            <h3>Super poderes</h3>
            <p>
              <strong>Combat: </strong>
              {props.detailsModal.powerstats?.combat}
            </p>
            <p>
              <strong>Durability: </strong>
              {props.detailsModal.powerstats?.durability}
            </p>
            <p>
              <strong>Intelligence: </strong>
              {props.detailsModal.powerstats?.intelligence}
            </p>
            <p>
              <strong>Power: </strong>
              {props.detailsModal.powerstats?.power}
            </p>
            <p>
              <strong>Speed: </strong>
              {props.detailsModal.powerstats?.speed}
            </p>
            <p>
              <strong>Strength: </strong>
              {props.detailsModal.powerstats?.strength}
            </p>
          </ContainerPowestats>
          <ContainerWork className="WORK">
            <h3>Trabalho</h3>
            <p>
              <strong>Occupation:</strong>{" "}
            </p>
            <p>{props.detailsModal.work?.occupation}</p>
          </ContainerWork>
        </ContainerInfos>
      </ContainerModal>
    </div>
  );
}
// background-color: rgb(233, 233, 233);
