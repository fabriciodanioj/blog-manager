import React from "react";

import { useParams } from "react-router-dom";

import Filter from "../../components/Filter";
import Selectors from "../../components/Selectors";
import Article from "../../components/Article";
import View from "../../components/View";

import api from "../../services/api";

import { Container, Title, Content } from "./styles";

export default function Categories() {
  const [articles, setArticles] = React.useState([]);

  let { id } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/post?categoryId=${id}`);
      setArticles(response.data);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Container>
        <div className="top">
          <Title>Meus Artigos</Title>
        </div>
        <Filter />
        <Selectors />
        <Content>
          {articles &&
            articles.map(article => (
              <Article
                key={article._id}
                id={article._id}
                name={article.author}
                title={article.title}
                date={article.createdAt}
                checkbox={true}
              />
            ))}
        </Content>
      </Container>
      <View />
    </>
  );
}
