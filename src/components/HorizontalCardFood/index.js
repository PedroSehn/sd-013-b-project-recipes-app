import React from 'react';
import propTypes from 'prop-types';

function HorizontalCardFood({ recipe, index }) {
  const { image, category, name, area, date, link, tags } = recipe;

  const handleClick = () => {
    const elem = document.createElement('textarea');
    elem.value = link;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');

    document.body.removeChild(elem);
  };

  return (
    <section>

      <img src={ image } alt="recipe" data-testid={ `${index}-horizontal-image` } />
      <p data-testid={ `${index}-horizontal-top-text` }>{category}</p>
      <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
      <p data-testid={ `${index}-horizontal-done-date` }>{date}</p>
      <p>{area}</p>
      <button
        type="button"
        onClick={ handleClick }
        data-testid={ `${index}-horizontal-share-btn` }
      >
        Share
      </button>

      {tags.map((tag, tagIndex) => (
        <p
          key={ tagIndex }
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          {tag}
        </p>))}

    </section>

  );
}

HorizontalCardFood.propTypes = {
  recipe: propTypes.shape({
    image: propTypes.string,
    category: propTypes.string,
    name: propTypes.string,
    date: propTypes.string,
    link: propTypes.string,
    tags: propTypes.arrayOf(propTypes.string),
    area: propTypes.string,

  }).isRequired,
  index: propTypes.number.isRequired,
};

export default HorizontalCardFood;