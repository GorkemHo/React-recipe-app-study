import React, { useState } from 'react';
import '../assets/styles/form.scss';

const NewRecipeForm = ({ recipes, addRecipe }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addRecipe({
      id: Number(recipes[recipes.length - 1].id) + 1,
      title: title,
      description: description,
      image: image,
    });

    setTitle('');
    setDescription('');
    setImage('');

    e.target.classList.add('shake');
    setTimeout(() => {
      e.target.classList.remove('shake');
    }, 500);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Recipe!</h3>
      <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
        type="text"
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="text" placeholder="Recipe Image(url)" value={image} onChange={(e) => setImage(e.target.value)} />
      <div className="shake">
        <input disabled={title === '' || description === '' || image === ''} type="submit" value="Add Recipe" />
      </div>
    </form>
  );
};

export default NewRecipeForm;
