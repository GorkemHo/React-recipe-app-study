import React from 'react';
import Card from './Card';

const CardList = ({ recipes, deleteRecipe, updateRecipe }) => {
  return (
    <div className="card-list">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          recipe={recipe}
          id={recipe.id}
          title={recipe.title}
          description={recipe.description}
          image={recipe.image}
          deleteRecipe={deleteRecipe}
          updateRecipe={updateRecipe}
        />
      ))}
    </div>
  );
};

export default CardList;
