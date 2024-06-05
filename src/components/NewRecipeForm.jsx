import React, { useContext, useEffect, useState } from 'react';
import '../assets/styles/form.scss';
import DataContext from '../context/DataContext';

const NewRecipeForm = ({}) => {
  const { isLoading, addRecipe } = useContext(DataContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  // const [errorBox, setErrorBox] = useState({ title: false, image: false, description: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    addRecipe({
      id: Date.now().toString(),
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
      {/* {!title ? <span>Title is required.</span> : null} */}
      <input
        type="text"
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* {!description ? <span>Description is required</span> : null} */}
      <input type="text" placeholder="Recipe Image(url)" value={image} onChange={(e) => setImage(e.target.value)} />
      {/* {!image ? <span>Image Url is required</span> : null} */}
      <div className="shake">
        <input
          disabled={title === '' || description === '' || image === ''}
          type="submit"
          value={isLoading ? 'Adding...' : 'Add Recipe'}
        />
      </div>
    </form>
  );
};

export default NewRecipeForm;
