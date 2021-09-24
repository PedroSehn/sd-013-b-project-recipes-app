import React from 'react';

export default function MealIngredientsDetails({ ingredients }) {
  if (!ingredients) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {
          Object.entries(ingredients)
            .filter((item) => item[0]
              .includes('strIngredient') && item[1] && item[1].length > 1)
            .map((ingredient, index) => (
              <li key={ ingredient[1] + index } data-testid={ `${index}-ingredient-name-and-measure` }>{ingredient[1]}</li>
            ))
        }
      </ul>
      <ul>
        {
          Object.entries(ingredients)
            .filter((item) => item[0]
              .includes('strMeasure') && item[1] && item[1].length > 1)
            .map((ingredient, index) => (
              <li key={ ingredient[1] + index } data-testid={ `${index}-ingredient-name-and-measure` }>{ingredient[1]}</li>
            ))
        }
      </ul>
    </div>
  );
}
