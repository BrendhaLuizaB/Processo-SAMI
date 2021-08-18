import styled from "styled-components";

export const ContainerProgress = styled.div`
  height: 25px;
  width: 200px;
  background-color: #d8d8d8;
  border-radius: 20px;
`;
export const ContainerProgressDone = styled.div`
  height: 100%;
  display: flex;
  color: white;
  box-shadow: 0 3px 3px -5px #450246, 0 2px 5px #450246;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #450246 0%, #432a43 100%);
  border-radius: 20px;
  transition: all 1s 0.3s;
`;
