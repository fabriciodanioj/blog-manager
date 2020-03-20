import React from "react";

import { Container } from "./styles";

import { useSelector } from "react-redux";

export default function Selectors() {
  const data = useSelector(state => state.ArticleSelectedList);
  const count = data.length;

  console.log(data);

  return (
    <Container>
      <p>{count} artigo(s) selecionado(s)</p>
      <div>
        <i class="material-icons">edit</i>
        <i class="material-icons">delete</i>
      </div>
    </Container>
  );
}
