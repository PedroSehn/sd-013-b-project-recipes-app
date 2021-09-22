import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../mini-components/Button';

function PerfilPage() {
  function getEmail() {
    const localStorageEmail = JSON.parse(localStorage.getItem('user'));
    return localStorageEmail.email;
  }

  function getOut() {
    localStorage.clear();
  }

  return (
    <main>
      <h1 data-testid="profile-email">{ getEmail() }</h1>
      <Link to="/receitas-feitas">
        <Button
          btnText="Receitas Feitas"
          dataTest="profile-done-btn"
        />
      </Link>
      <Link to="/receitas-favoritas">
        <Button
          btnText="Receitas Favoritas"
          dataTest="profile-favorite-btn"
        />
      </Link>
      <Link to="/">
        <Button
          btnText="Sair"
          dataTest="profile-logout-btn"
          btnFunction={ getOut }
        />
      </Link>
    </main>
  );
}

export default PerfilPage;