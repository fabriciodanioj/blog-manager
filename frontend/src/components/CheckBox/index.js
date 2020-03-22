import React from "react";

import { Container } from "./styles";

export default function CheckBox(onClick) {
  return (
    <Container>
      <input type="checkbox" onClick={onClick.onClick}/>
      <span></span>
    </Container>
  );
}
