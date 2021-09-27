import { toast } from 'react-toastify';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import './details.css';
import myContext from '../context/mycontext';
import ShowRecipeFood from '../Services/ShowRecipeFood';
import 'react-toastify/dist/ReactToastify.css';

export default function DetailsPageComidas() {
  const { recipesInProgress, setRecipeInProgress } = useContext(myContext);
  const notify = () => toast('Link copiado!');
  const history = useHistory();
  const { pathname } = useLocation();
  const [revenue, setRevenue] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const pathID = pathname.split('/')[2];
  const recipeLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'))
    ? JSON.parse(localStorage.getItem('inProgressRecipes')).meals[pathID] : false;

  const fetchDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const fetchURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pathID}`;
    async function fetchApi() {
      const result = await fetch(fetchURL).then((response) => response.json());
      const resultDrikns = await fetch(fetchDrinks).then((response) => response.json());
      setRevenue(result.meals);
      const NUMBER_SIX = 6;
      setDrinks(resultDrikns.drinks.filter((_drink, position) => position < NUMBER_SIX));
      if (localStorage.getItem('inProgressRecipes') === null) {
        localStorage.setItem('inProgressRecipes',
          JSON.stringify({ meals: {}, cocktails: {} }));
      }
    }
    fetchApi();
  }, [pathname, pathID]);

  function startRecipe() {
    const verifyRecipe = recipesInProgress.some((idRecipe) => idRecipe === pathID);
    if (verifyRecipe) return;
    setRecipeInProgress([...recipesInProgress, pathID]);
    const recipesLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const recipeInProgress = {
      ...recipesLocalStorage,
      meals: {
        ...recipesLocalStorage.meals,
        [pathID]: [],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(recipeInProgress));
    history.push(`${pathID}/in-progress`);
  }

  function copyToClipboard() {
    const linkShare = `http://localhost:3000${pathname}`;
    navigator.clipboard.writeText(linkShare);
    notify();
  }

  return (
    <div>
      { revenue && <ShowRecipeFood
        revenue={ revenue }
        favorite={ favorite }
        setFavorite={ setFavorite }
        pathID={ pathID }
        drinks={ drinks }
        recipeLocalStorage={ recipeLocalStorage }
        startRecipe={ startRecipe }
        copyToClipboard={ copyToClipboard }
      /> }
    </div>
  );
}