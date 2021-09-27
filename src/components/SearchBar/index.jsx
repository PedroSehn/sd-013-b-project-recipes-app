import React, { useState } from 'react';

import { useSearch } from '../../context/SearchBarContext';

import './SearchBar.css';

function SearchBar() {
  const { handleSearch } = useSearch();
  const [searchTerm, setSearchTerm] = useState();
  const [searchOption, setSearchOption] = useState();

  return (
    <div className="search-bar-inputs">
      <input
        className="text-input"
        data-testid="search-input"
        type="text "
        placeholder="Buscar receita"
        onChange={ (e) => setSearchTerm(e.target.value) }
      />
      <div className="radio-btns">
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          name="radio-search"
          value="ingredient"
          onClick={ (e) => setSearchOption(e.target.value) }
        />
        Ingrediente
        <input
          data-testid="name-search-radio"
          type="radio"
          name="radio-search"
          value="name"
          onClick={ (e) => setSearchOption(e.target.value) }
        />
        Nome
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          name="radio-search"
          value="first-letter"
          onClick={ (e) => setSearchOption(e.target.value) }
        />
        Primeira letra
      </div>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => handleSearch(searchTerm, searchOption) }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;