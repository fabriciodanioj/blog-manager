import React from "react";

import Selectors from "../../components/Selectors";
import Article from "../../components/Article";
import View from "../../components/View";

import { Container, Title, Content } from "./styles";

export default function Dashboard() {
  return (
    <>
      <Container>
        <Title>Lixeira</Title>
        <Selectors />
        <Content>
          <Article />
        </Content>
      </Container>
      <View />
    </>
  );
}
