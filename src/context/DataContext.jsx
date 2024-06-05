import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState({
    read: false,
    add: false,
    delete: false,
    update: false,
  });
  //SİL
  useEffect(() => {
    console.log('isLoading state changed:', isLoading);
  }, [isLoading]);

  const getRecipes = async () => {
    const url = 'http://localhost:3000/recipes';
    try {
      setIsLoading((prev) => ({ ...prev, read: true }));
      const response = await axios.get(url);
      setRecipes(response.data);
      setIsLoading((prev) => ({ ...prev, read: false }));
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
    }
  };

  const addRecipe = async ({ title, description, image }) => {
    const newRecipe = { title, description, image };
    try {
      setIsLoading((prev) => ({ ...prev, add: true }));
      const response = await axios.post('http://localhost:3000/recipes', newRecipe);
      setIsLoading((prev) => ({ ...prev, add: false }));
      if (response.status === 201) {
        setRecipes((prevRecipeList) => [...prevRecipeList, response.data]);
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
    } finally {
      setIsLoading(() => ({ add: false }));
    }
  };

  const deleteRecipe = async (id) => {
    const url = `http://localhost:3000/recipes/${id}`;
    //Backend..
    setIsLoading((prev) => ({ ...prev, delete: true }));
    await axios.patch(url, { isDeleted: true });
    console.log('Silme yapıldı');
    setIsLoading((prev) => ({ ...prev, delete: false }));
    //Fronend..
    setRecipes((prev) => prev.filter((statedenGelen) => statedenGelen.id !== id));
  };

  const updateRecipe = async (id, updatedRecipe) => {
    try {
      setIsLoading((prev) => ({ ...prev, update: true }));
      const response = await axios.put(`http://localhost:3000/recipes/${id}`, updatedRecipe);
      if (response.status === 200) {
        setRecipes((prevRecipeList) => prevRecipeList.map((recipe) => (recipe.id === id ? response.data : recipe)));
        setIsLoading((prev) => ({ ...prev, update: false }));
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
    <DataContext.Provider
      value={{
        //Card'a gidenler.
        recipes,
        isLoading,
        addRecipe,
        deleteRecipe,
        updateRecipe,
        getRecipes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
