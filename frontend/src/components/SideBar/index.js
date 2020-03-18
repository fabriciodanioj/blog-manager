import React from "react";
import { Container, Section, Profile } from "./styles";

export default function SideBar() {
  return (
    <Container>
      <img
        src="https://agenciarazzo.com.br/wp-content/uploads/2019/09/cropped-logo-agencia-razzo.png"
        alt="logo"
        className="logo"
      />
      <button>
        <i class="material-icons">folder</i> Meu diretório
      </button>

      <Section>
        <h1>Arquivos</h1>
        <a href="/articles">Meus Artigos</a>
        <a href="/shared">Compartilhados</a>
        <a href="/trash">Lixeira</a>
      </Section>

      <Section>
        <h1>Categorias</h1>
        <ul>
          <li>Sem categoria</li>
          <li>Desenvolvimento Mobile</li>
          <li>TI</li>
          <li>Design</li>
          <li>Desenvolvimento Web</li>
        </ul>
      </Section>

      <Profile>
        <img
          src="https://m.media-amazon.com/images/M/MV5BODEwMjkzNDIzOV5BMl5BanBnXkFtZTgwOTQ4NTU0NzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
          alt="avatar"
          className="avatar"
        />
        <div>
          <h1>Fabricio Dani</h1>
          <h2>Usuário Premium</h2>
        </div>
        <i class="material-icons">exit_to_app</i>
      </Profile>
    </Container>
  );
}
