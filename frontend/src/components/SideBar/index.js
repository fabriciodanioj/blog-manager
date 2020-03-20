import React from "react";
import { Container, Section } from "./styles";
import Profile from '../../components/Profile'

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
        <a href="/dashboard">Meus Artigos</a>
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

      <Profile />
    </Container>
  );
}
