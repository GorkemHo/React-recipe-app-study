import { useState } from 'react';
import { data } from './assets/data/recipes'; // .js uzantısını kaldırabilirsiniz
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import CardList from './components/CardList';
import NewRecipeForm from './components/NewRecipeForm';

function App() {
  const [recipes, setRecipes] = useState(data);

  const addRecipe = (recipe) => setRecipes((prev) => [...prev, recipe]);

  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((statedenGelen) => statedenGelen.id !== id));
  };
  return (
    <>
      <Header />
      <Section />
      <NewRecipeForm recipes={recipes} addRecipe={addRecipe} />
      <CardList recipes={recipes} deleteRecipe={deleteRecipe} />
    </>
  );
}

export default App;
