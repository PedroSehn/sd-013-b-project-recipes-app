import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';

function Bebidas() {
  const { drinks } = useContext(RecipesContext);

  const renderDrinks = () => (
    drinks.map(({ strDrink, strDrinkThumb }, index) => (
      <div key={ strDrink }>
        <RecipeCard
          name={ strDrink }
          thumb={ strDrinkThumb }
          index={ index }
        />
      </div>
    ))
  );

  return (
    <div>
      <Header pageTitle="Bebidas" haveHeader="active" />
      <div>Bebidas</div>
      { drinks && renderDrinks() }
    </div>
  );
}

export default Bebidas;
