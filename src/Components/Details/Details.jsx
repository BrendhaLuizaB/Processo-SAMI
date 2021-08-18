import React from "react";
import Close from "../../assets/x.svg";
import { ProgressBar } from "../ProgressBar";
import {
  CloseModal,
  ContainerAppearance,
  ContainerBiography,
  ContainerCardModal,
  ContainerCloseModal,
  ContainerInfos,
  ContainerModal,
  ContainerName,
  ContainerNameCardModal,
  ContainerPowestats,
  ContainerWork,
  DivImgModal,
  ImgHeroModal,
  TitleAppearance,
  TitleBiography,
  TitlePowerStats,
  TitleWork,
} from "./Details.styled";

export default function Details(props) {
  return (
    <ContainerModal>
      <ContainerName>
        <h1>{props.detailsModal.name}</h1>
      </ContainerName>
      <ContainerCloseModal>
        <CloseModal src={Close} onClick={() => props.setModalIsOpen(false)} />
      </ContainerCloseModal>
      <ContainerInfos>
        <ContainerCardModal>
          <DivImgModal>
            <ImgHeroModal src={props.detailsModal.image?.url} alt="imagem" />
          </DivImgModal>
          <ContainerNameCardModal>
            <div>{props.detailsModal.name}</div>
          </ContainerNameCardModal>
        </ContainerCardModal>
        <ContainerPowestats className="POWESTATS">
          <TitlePowerStats>Habilidades</TitlePowerStats>
          <p>
            <strong>
              Combat:{" "}
              <ProgressBar done={props.detailsModal.powerstats?.combat} />
            </strong>
          </p>
          <p>
            <strong>
              Durability:{" "}
              <ProgressBar
                done={props.detailsModal.powerstats?.durability}
              ></ProgressBar>
            </strong>
          </p>
          <p>
            <strong>Intelligence: </strong>
            <ProgressBar done={props.detailsModal.powerstats?.intelligence} />
          </p>
          <p>
            <strong>Power: </strong>
            <ProgressBar done={props.detailsModal.powerstats?.power} />
          </p>
          <p>
            <strong>Speed: </strong>
            <ProgressBar done={props.detailsModal.powerstats?.speed} />
          </p>
          <p>
            <strong>Strength: </strong>
            <ProgressBar done={props.detailsModal.powerstats?.strength} />
          </p>{" "}
        </ContainerPowestats>
        <ContainerAppearance className="APARENCIA">
          <TitleAppearance>Aparência</TitleAppearance>
          <p>
            <strong>Eye color: </strong>
            {props.detailsModal.appearance?.["eye-color"]}
          </p>
          <p>
            <strong>Gender:</strong> {props.detailsModal.appearance?.gender}
          </p>
          <p>
            <strong>Race:</strong> {props.detailsModal.appearance?.race}
          </p>{" "}
          <br />
          <ContainerWork className="WORK">
            <TitleWork>Trabalho</TitleWork>
            <p>
              <strong>Occupation:</strong>{" "}
            </p>
            <p>{props.detailsModal.work?.occupation}</p>
          </ContainerWork>
        </ContainerAppearance>
        <ContainerBiography className="BIOGRAFIA">
          <TitleBiography>Biografia</TitleBiography>
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
      </ContainerInfos>
    </ContainerModal>
  );
}
