import React, { useEffect, useState } from 'react';
import '../assets/styles/card.scss';

const Card = ({ recipe, title = '', description = '', image = '', id, deleteRecipe, updateRecipe, isLoading }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ title, description, image });

  const [errors, setErrors] = useState({});

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    let errors = {};
    if (!editData.title.trim()) errors.title = 'Title is required.';
    if (!editData.description.trim()) errors.description = 'Description is required.';
    if (!editData.image.trim()) errors.image = 'Image URL is required.';
    if (Object.keys(errors).length === 0) {
      await updateRecipe(id, editData);
      setIsEditing(false);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="recipe-card">
      {isEditing && <div className="edit-background" onClick={() => setIsEditing(false)}></div>}
      {isEditing ? (
        <div className="edit-form">
          <input type="text" name="title" value={editData.title} onChange={handleEditChange} placeholder="Title" />
          {errors.title && <span className="error">{errors.title}</span>}
          <input
            type="text"
            name="description"
            value={editData.description}
            onChange={handleEditChange}
            placeholder="Description"
          />
          {errors.description && <span className="error">{errors.description}</span>}
          <input type="text" name="image" value={editData.image} onChange={handleEditChange} placeholder="Image URL" />
          {errors.image && <span className="error">{errors.image}</span>}
          <hr />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="card" key={recipe.id}>
          <button onClick={() => deleteRecipe(recipe.id)} className="delete">
            {isLoading.delete ? 'Deleting...' : 'X'}
          </button>
          <button className="edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <img src={recipe.image} alt="RecipeImage" />

          <div className="card-body">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
