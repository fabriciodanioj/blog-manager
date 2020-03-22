import React from "react";
import { Container, Section } from "./styles";
import Profile from "../../components/Profile";
import api from "../../services/api";

export default function SideBar() {
  const [categories, setCategories] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/category");

      setCategories(response.data);
    };
    fetchData();
  }, [categories]);

  return (
    <Container>
      <div>
        <div className="header">
          <img
            src="https://agenciarazzo.com.br/wp-content/uploads/2019/09/cropped-logo-agencia-razzo.png"
            alt="logo"
            className="logo"
          />
          <button>
            <i class="material-icons">menu</i>
          </button>
        </div>

        <button>
          <i class="material-icons">folder</i> Meu diretório
        </button>

        <Section>
          <h1>Arquivos</h1>
          <a href="/dashboard">Meus Artigos</a>
          <a href="/shared">Compartilhados</a>
          <a href="/trash">Lixeira</a>
        </Section>

        <Section>
          <h1>Categorias</h1>
          {(categories &&
            categories.map(category => (
              <a key={category._id} href={`/category/${category._id}`}>
                {category.name}
              </a>
            ))) ?? <p>Não existem categorias</p>}
        </Section>
      </div>

      <Profile />
    </Container>
  );
}
