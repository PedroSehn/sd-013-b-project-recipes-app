import React, { useContext } from 'react';
import Context from '../../Context/Context';

const ARRAY_NUMBER = 32;
const START_ARRAY_NUMBER = 17;
const START_ARRAY_MEASURE = 15;

function DrinkDetailsIngredients() {
  const { drinkDetails } = useContext(Context);

  const ingredients = Object.values(drinkDetails);
  const ingredientsArray2 = [];

  const createArrayIngredients = () => {
    for (let index = START_ARRAY_NUMBER; index < ARRAY_NUMBER; index += 1) {
      const position = index + START_ARRAY_MEASURE;
      const ingredientName = ingredients[index];
      const ingredientMeasure = ingredients[position];

      if (ingredientName !== '' && ingredientName !== null) {
        ingredientsArray2.push(`${ingredientName} ${ingredientMeasure}`);
      }
    }
  };

  function callIngredientsArray() {
    if (ingredients.length > 0) {
      createArrayIngredients();
    }
  }
  callIngredientsArray();
  return (
    <>
      <h2>Ingredients</h2>

      {
        ingredientsArray2.map((ingredient, index) => (
          <p
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingredient}

          </p>
        ))
      }

    </>
  );
}

export default DrinkDetailsIngredients;
