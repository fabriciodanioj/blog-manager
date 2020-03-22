import React from "react";

import api from "../../services/api";

import { Container } from "./styles";

export default function NewArticle() {
  const [text, setText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [img, setImg] = React.useState("");
  const [categories, setCategories] = React.useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post("/post", {
      title,
      content: text,
      author: "Fabricio Dani",
      img,
      categories
    });

    console.log(response);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Criar artigo</label>
        <input type="text" onChange={setTitle} placeholder="Título do Artigo" />
        <input type="text" onChange={setImg} placeholder="URL de imagem" />
        <input type="text" onChange={setText} className="text-input" />
        <button>Criar Artigo</button>
      </form>
    </Container>
  );
}
