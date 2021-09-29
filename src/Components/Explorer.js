import React from 'react';
import { Link } from 'react-router-dom';
import ExploreBy from './ExplorerBy';

function Explorer() {
  return (
    <div>
      <Link to="/explorar/comidas">
        <button
          type="button"
          data-testid="explore-food"
        >
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explorar Bebidas
        </button>
      </Link>
      <ExploreBy />
    </div>
  );
}

export default Explorer;