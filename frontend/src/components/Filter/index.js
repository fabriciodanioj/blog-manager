import React from "react";
import Select from "react-select";

import { Container } from "./styles";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export default function Filter() {
  return (
    <Container>
      <i class="material-icons">sort</i>
      <Select options={options} placeholder="Escolha um filtro" />
      <i class="material-icons">cancel</i>
    </Container>
  );
}
