import React, { useContext } from 'react';
import Card from './Card';
import DataContext from '../context/DataContext';

const CardList = () => {
  const { recipes, isLoading, deleteRecipe, updateRecipe } = useContext(DataContext);

  return (
    <div className="card-list">
      {isLoading.read && <p>Loading...</p>}
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
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default CardList;
