import React from 'react';
import DoneRecipesFilter from '../components/DoneRecipesFilters';
import Header from '../components/Header';
import DoneCard from '../components/DoneCard';

function ReceitasFeitas() {
  return (
    <div>
      <Header pageTitle="Receitas Feitas" haveHeader={ false } />
      <DoneRecipesFilter />
      <DoneCard />
    </div>
  );
}

export default ReceitasFeitas;

/*
[{
    id: id-da-receita,
    type: comida-ou-bebida,
    area: area-da-receita-ou-texto-vazio,
    category: categoria-da-receita-ou-texto-vazio,
    alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
    name: nome-da-receita,
    image: imagem-da-receita,
    doneDate: quando-a-receita-foi-concluida,
    tags: array-de-tags-da-receita-ou-array-vazio
}]
*/
