import React from 'react';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
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
      </Container>
  );
}
