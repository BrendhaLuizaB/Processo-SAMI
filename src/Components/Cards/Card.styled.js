import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: #653966;
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 50vh;
  margin-top: 40px;
  margin-left: 50px;
  border-radius: 16px;
`;

export const ContainerInfoCard = styled.div`
  width: 20vw;
  height: 22vh;
  color: white;
  background: linear-gradient(180deg, #000000 0%, #211c21 100%);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const DivImageCard = styled.div`
  flex-grow: 1;
`;

export const ButtonDetails = styled.button`
  background: linear-gradient(180deg, #450246 0%, #432a43 100%);
  border-radius: 8px;
  cursor: pointer;
  margin-left: 15px;
  width: 107px;
  height: 41px;
  color: white;
  border: none;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
  margin-top: 10px;
`;

export const ImageHero = styled.img`
  width: 15vw;
  height: 32vh;
  border-radius: 16px;
  margin: 10px 30px 0 30px;
`;
