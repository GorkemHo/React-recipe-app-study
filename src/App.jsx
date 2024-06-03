import { useEffect, useState } from 'react';
// import { data } from './assets/data/recipes'; // .js uzantısını kaldırabilirsiniz
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import CardList from './components/CardList';
import NewRecipeForm from './components/NewRecipeForm';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const url = 'http://localhost:3000/recipes';
    await axios.get(url).then((response) => setRecipes(response.data));
  };

  const addRecipe = async ({ title, description, image }) => {
    const newRecipe = { title, description, image };
    const response = await axios.post('http://localhost:300/recipes', newRecipe);
    if (response.status === 201) {
      setRecipes((prevRecipeList) => [...prevRecipeList, response.data]);
    }
  };

  const deleteRecipe = async (id) => {
    const url = `http://localhost:3000/recipes/${id}`;
    //Fronend..
    setRecipes((prev) => prev.filter((statedenGelen) => statedenGelen.id !== id));
    //Backend..
    await axios.patch(url, { isDeleted: true });
    console.log('Silme yapıldı');
  };

  const updateRecipe = async (id, updatedRecipe) => {
    try {
      const response = await axios.put(`http://localhost:3000/recipes/${id}`, updatedRecipe);
      if (response.status === 200) {
        setRecipes((prevRecipeList) => prevRecipeList.map((recipe) => (recipe.id === id ? response.data : recipe)));
      }
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  useEffect(() => {
    getRecipes();
    console.log('Veriler geldi');
  }, []);

  return (
    <>
      <Header />
      <Section />
      <NewRecipeForm recipes={recipes} addRecipe={addRecipe} />
      <CardList recipes={recipes} deleteRecipe={deleteRecipe} updateRecipe={updateRecipe} />
    </>
  );
}

export default App;
