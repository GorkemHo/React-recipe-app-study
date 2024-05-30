import React from 'react';
import Card from './Card';

const CardList = ({ recipes, deleteRecipe }) => {
  return (
    <div className="card-list">
      {recipes.map((recipe) => (
        <Card recipe={recipe} key={recipe.id} deleteRecipe={deleteRecipe} />
      ))}
    </div>
  );
};

export default CardList;
