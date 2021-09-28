import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from './Icon';
import { toggleFavorite as toggleFavoriteAction } from '../Redux/Actions';

const DetailsHeader = (props) => {
  const { imgSrc, title, subTitle, item, toggleFavorite } = props;
  return (
    <div>

      <img
        data-testid="recipe-photo"
        alt="example"
        src={ `${imgSrc}/preview` }
      />

      <div>
        <h2 data-testid="recipe-title">{title}</h2>
        <Icon icon="share" testid="share-btn" />
        <Icon
          icon="whiteheart"
          testid="favorite-btn"
        />
        <button
          type="button"
          onClick={ () => {
            toggleFavorite(item);
            // A action toggleFavorite recebe como parametro o item recebido diretamente pelo fetch e altera o estado de favorito da receita
            // As receitas favoritadas podem ser acessadas na chave favoriteRecipes do redux, que é um array de objetos na seguinte estrutura:
            // {
            //   id: type === 'comidas' ? item.idMeal : item.idDrink,
            //   type: type === 'comidas' ? 'meals' : 'cocktails',
            //   area: item.strArea,
            //   category: item.strCategory,
            //   name: type === 'comidas' ? item.strMeal : item.strDrink,
            // caso seja bebida possui uma chave  alcoholicOrNot
            // }
          } }
        >
          Teste

        </button>
      </div>
      <h6 data-testid="recipe-category">{subTitle}</h6>

    </div>
  );
};

DetailsHeader.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  item: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strAlcoholic: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
  }).isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (item) => dispatch(toggleFavoriteAction(item)),
});

export default connect(null, mapDispatchToProps)(DetailsHeader);
