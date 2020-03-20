import React from "react";

import Filter from "../../components/Filter";
import Selectors from "../../components/Selectors";
import Article from "../../components/Article";
import View from "../../components/View";
import Modal from "../../components/AddArticlesModal";

import api from "../../services/api";

import { Container, Title, Content } from "./styles";

export default function Dashboard() {
  const [articles, setArticles] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/post");

      setArticles(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <div className="top">
          <Title>Meus Artigos</Title>
          <Modal />
        </div>
        <Filter />
        <Selectors />
        <Content>
          {articles &&
            articles.map(article => (
              <Article
                key={article._id}
                id={article._id}
                name={article.name}
                title={article.title}
                date={article.createdAt}
              />
            ))}
        </Content>
      </Container>
      <View />
    </>
  );
}
