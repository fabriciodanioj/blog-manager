import React from "react";
import RichTextEditor from "react-rte";

import { Container } from "./styles";

export default function NewArticle() {
  const [text, setText] = React.useState(RichTextEditor.createEmptyValue());

  return (
    <Container>
      <RichTextEditor className="editor" value={text} onChange={setText} />
    </Container>
  );
}
