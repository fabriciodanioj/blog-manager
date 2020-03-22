import React from "react";
import Select from "react-select";

import { Container } from "./styles";

const options = [
  { value: "Mais recentes", label: "Mais recentes" },
  { value: "Mais antigos", label: "Mais antigos" },
  { value: "Ordem alfabética", label: "Ordem alfabética" }
];

export default function Filter() {
  return (
    <Container>
      <i class="material-icons">sort</i>
      <Select
        options={options}
        placeholder="Escolha um filtro"
        className="selector"
      />
      <i class="material-icons">cancel</i>
    </Container>
  );
}
