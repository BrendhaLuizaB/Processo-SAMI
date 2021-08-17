import styled from "styled-components";

export const ContainerModal = styled.div`
  background-color: rgb(233, 233, 233);
  /* display: flex; */
  justify-content: center;
  margin-left: 15%;
  height: 80vh;
  position: fixed;
  border-radius: 8px;
  box-shadow: 1em 1em 1em 1em rgba(36, 36, 36, 0.404);
  flex-wrap: wrap;
  width: 80%;
  padding-right: 10px;
`;
export const CloseModal = styled.p`
  cursor: pointer;
`;
export const ContainerNameCloseModal = styled.div`
  border: solid 2px brown;
  display: flex;
  margin-left: 40%;
  justify-content: space-between;
`;
export const ContainerName = styled.div`
  border: solid 2px red;
`;
export const ContainerInfos = styled.div`
  border: solid red 2px;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerAppearance = styled.div`
  border: solid 2px blue;
`;
export const ContainerBiography = styled.div`
  border: solid 2px green;
`;
export const ContainerPowestats = styled.div`
  border: solid 2px black;
`;
export const ContainerWork = styled.div`
  border: solid 2px purple;
`;
export const ContainerCloseModal = styled.div`
  border: red solid 2px;
  margin-left: 10px;
`;
