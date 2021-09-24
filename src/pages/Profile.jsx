import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const emailLocalStorage = () => {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user')).email;
    }
    return 'Email desconhecido';
  };

  const history = useHistory();
  const doneBtn = (e) => {
    e.preventDefault();
    history.push('/receitas-feitas');
  };
  const favoriteBtn = (e) => {
    e.preventDefault();
    history.push('/receitas-favoritas');
  };
  const logoutBtn = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push('/');
  };
  return (
    <div>
      <h2>Profile</h2>
      <h5 data-testid="profile-email">{emailLocalStorage()}</h5>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ doneBtn }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ favoriteBtn }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ logoutBtn }
      >
        Sair
      </button>

    </div>
  );
}
