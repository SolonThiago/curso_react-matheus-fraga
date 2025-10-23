import React from "react";
import { Container, Head, Titulo, BemVindo } from "./styles";

function Apps() {
  return (
    <Container>
      <Head>
        <Titulo>Meu Projeto Estilizado</Titulo>
      </Head>

      <BemVindo cor="0000FF" tamanho={35}>
        Bem vindo ao meu Projeto!
      </BemVindo>
    </Container>
  );
}

export default Apps;
