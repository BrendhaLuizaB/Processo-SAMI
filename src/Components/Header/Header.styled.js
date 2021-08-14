import styled from "styled-components";

export const ContainerHeader = styled.header`
  background: linear-gradient(180deg, #000000 0%, #211c21 100%);
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputSearch = styled.input`
  width: 361px;
  height: 41px;
  padding-left: 16px;
  text-align: left;
  border: none;
  outline: none;
  font-weight: 700;
  font-style: normal;
  font-size: 15px;

  background: #f5efef;
  border-radius: 31px;
`;

export const ButtonSearch = styled.button`
  background: linear-gradient(180deg, #450246 0%, #432a43 100%);
  border-radius: 26px;
  margin-left: 15px;
  width: 107px;
  height: 41px;
  color: white;
  border: none;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
`;
