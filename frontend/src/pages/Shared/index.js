import React from "react";

import Filter from "../../components/Filter";
import Selectors from "../../components/Selectors";
import Article from "../../components/Article";
import View from "../../components/View";

import { Container, Title, Content } from "./styles";

export default function Dashboard() {
  return (
    <>
      <Container>
        <Title>Compartilhados</Title>
        <Filter />
        <Selectors />
        <Content>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </Content>
      </Container>
      <View />
    </>
  );
}
