import React from "react";

import { Container } from "./styles";
import { useSelector } from "react-redux";

import api from "../../services/api";

import DataParse from "../../utils/ParseDate";

export default function View() {
  const data = useSelector(state => state.ArticleToView);
  const [article, setArticle] = React.useState(null);

  if (data) {
    const fetchData = async () => {
      const response = await api.get(`/post/${data}`);
      setArticle(response.data);
    };
    fetchData();
  }

  if (!article) {
    return null;
  }

  return (
    <Container>
      <h1>{article.title}</h1>
      <div>
        <span>Publicado por: {article.author}</span>
        <span>{DataParse(article.createdAt)}</span>
      </div>
      <img
        src="https://designshack.net/wp-content/uploads/placeholder-image-368x246.png"
        alt=""
      />
      <p>{article.content}</p>
    </Container>
  );
}
