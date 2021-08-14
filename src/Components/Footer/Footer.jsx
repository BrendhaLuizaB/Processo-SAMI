import { Divider } from "@material-ui/core";
import React from "react";
import { ContainerFooter, H3Footer } from "./Footer.styled";

export default function Footer() {
  return (
    <div>
      <Divider />
      <ContainerFooter>
        <H3Footer>Desenvolvido por Brendha Barbosa</H3Footer>
      </ContainerFooter>
    </div>
  );
}
