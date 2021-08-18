import styled from "styled-components";

export const ContainerModal = styled.div`
  background-color: rgb(233, 233, 233);
  display: flex;
  margin-left: 15%;
  flex-wrap: wrap;
  height: 80vh;
  position: fixed;
  border-radius: 8px;
  box-shadow: 1em 1em 1em 1em rgba(36, 36, 36, 0.404);
  width: 80%;
  padding-right: 10px;
`;
export const DivImgModal = styled.div`
  flex-grow: 1;
`;
export const ContainerCardModal = styled.div`
  background-color: #653966;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 50vh;
  margin-top: 40px;
  margin-left: 50px;
  border-radius: 16px;
`;
export const ContainerNameCardModal = styled.div`
  width: 100%;
  height: 22vh;
  color: white;
  background: linear-gradient(180deg, #000000 0%, #211c21 100%);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ImgHeroModal = styled.img`
  width: 88%;
  height: 32vh;
  border-radius: 16px;
  margin: 20px 10px 0 10px;
`;
export const CloseModal = styled.img`
  cursor: pointer;
`;

export const ContainerName = styled.div`
  height: 10vh;
  margin-top: 10px;
  margin-left: 35%;
`;
export const ContainerInfos = styled.div`
  border: solid red 2px;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerAppearance = styled.div`
  margin-left: 30px;
  text-align: center;
  width: 25%;
  height: 20vh;
  border: solid 2px orange;
`;
export const ContainerBiography = styled.div`
  width: 15%;
  text-align: center;
  margin-left: 30px;
  height: 40vh;
  border: solid 2px black;
`;
export const ContainerPowestats = styled.div`
  text-align: center;
  margin-left: 20px;
  width: 25%;
  border: 2px solid green;
`;
export const ContainerProgress = styled.div`
  height: 25px;
  width: 200px;
  background-color: #d8d8d8;
  border-radius: 20px;
`;
export const ContainerProgressDone = styled.div`
  height: 100%;
  width: 150px;
  opacity: 1;
  display: flex;
  color: white;
  box-shadow: 0 3px 3px -5px #450246, 0 2px 5px #450246;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #450246 0%, #432a43 100%);
  border-radius: 20px;
`;
export const TitlePowerStats = styled.h3`
  background-color: rgb(240, 143, 143);
  border-radius: 8px;
`;
export const TitleAppearance = styled.h3`
  background-color: rgb(136, 188, 218);
  border-radius: 8px;
`;
export const TitleBiography = styled.h3`
  background-color: rgb(121, 233, 180);
  border-radius: 8px;
`;
export const TitleWork = styled.h3`
  background-color: rgb(188, 135, 238);
  border-radius: 8px;
`;
export const ContainerWork = styled.div`
  text-align: center;
  width: 100%;
  border: solid 2px red;
`;
export const ContainerCloseModal = styled.div`
  border: red solid 2px;
  height: 10vh;
  margin-left: 40%;
  margin-top: 10px;
`;
