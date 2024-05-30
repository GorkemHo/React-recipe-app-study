import React, { useState } from 'react';
import '../assets/styles/card.scss';

const Card = ({ recipe, deleteRecipe }) => {
  return (
    <div className="card" key={recipe.id}>
      <button onClick={() => deleteRecipe(recipe.id)} className="delete">
        X
      </button>
      <img src={recipe.image} alt="RecipeImage" />

      <div className="card-body">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default Card;
