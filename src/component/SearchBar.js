import React from 'react';
import RadialInput from '../mini-components/RadialInput';
import Button from '../mini-components/Button';

function SearchBar() {
  return (
    <div>
      <input data-testid="search-input" type="text" placeholder="DIGITE SUA COMIDA" />
      <RadialInput
        dataTest="ingredient-search-radio"
        radialId="ingredient"
        radialName="search-checkbox"
        radialText="Ingrediente"
      />
      <RadialInput
        dataTest="name-search-radio"
        radialId="food-name"
        radialName="search-checkbox"
        radialText="Nome"
      />
      <RadialInput
        dataTest="first-letter-search-radio"
        radialId="food-first-letter"
        radialName="search-checkbox"
        radialText="Primeira Letra"
      />
      <Button btnText="Buscar" data-testid="exec-search-btn" />
    </div>
  );
}

export default SearchBar;