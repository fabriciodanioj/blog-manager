import React from "react";

import Selectors from "../../components/Selectors";
import Article from "../../components/Article";
import View from "../../components/View";

import api from "../../services/api";

import { Container, Title, Content } from "./styles";

export default function Trash() {
  const [articles, setArticles] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/post?active=false");

      setArticles(response.data);
    };

    fetchData();
  }, [articles]);

  return (
    <>
      <Container>
        <Title>Lixeira</Title>
        <Selectors trash={true} />
        <Content>
          {(articles &&
            articles.map(article => (
              <Article
                key={article._id}
                id={article._id}
                name={article.author}
                title={article.title}
                date={article.createdAt}
                checkbox={true}
              />
            ))) ?? (
            <Title style={{ marginTop: 20 }}>Nenhum artigo para mostrar</Title>
          )}
        </Content>
      </Container>
      <View />
    </>
  );
}
