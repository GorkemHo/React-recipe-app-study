import React, { useState } from 'react';
import '../assets/styles/card.scss';

const Card = ({ recipe, title = '', description = '', image = '', id, deleteRecipe, updateRecipe }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ title, description, image });

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await updateRecipe(id, editData);
    setIsEditing(false);
  };

  return (
    <div className="recipe-card">
      {isEditing ? (
        <div className="edit-form">
          <input type="text" name="title" value={editData.title} onChange={handleEditChange} />
          <input type="text" name="description" value={editData.description} onChange={handleEditChange} />
          <input type="text" name="image" value={editData.image} onChange={handleEditChange} />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="card" key={recipe.id}>
          <button onClick={() => deleteRecipe(recipe.id)} className="delete">
            X
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
