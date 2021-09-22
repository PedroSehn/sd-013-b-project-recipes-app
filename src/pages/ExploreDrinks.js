import React from 'react';
import { useHistory } from 'react-router';

export default function ExploreDrinks() {
  const history = useHistory();
  return (
    <>
      <button
        onClick={ () => history.push('/explorar/bebidas/ingredientes') }
        data-testid="explore-by-ingredient"
        type="button"
      >
        Por Ingredientes
      </button>
      {/* <button
        onClick={ () => history.push('/explorar/bebidas/ingredientes') }
        data-testid="explore-by-area"
        type="button"
      >
        Por Local de Origem
      </button> */}
      <button
        onClick={ () => history.push('') }
        data-testid="explore-surprise"
        type="button"
      >
        Me Surpreenda!
      </button>
    </>
  );
}
