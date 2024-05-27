import React from "react";
import "../WorkoutCard.css";


const WorkoutCard = ({ workout, onDeleteWorkout }) => {
  const { id, name, image } = workout;

  const handleDelete = () => {
    fetch(`http://localhost:6001/workouts/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => onDeleteWorkout(id));
  };

  return (
    <div className="workout-card">
      
      <img src={image} alt={name} className="workout-image"/>

        <h3 className="workout-name">{name}</h3>

        <button className="delete-button" onClick={handleDelete}>Delete</button>

        </div>
  );
};

export default WorkoutCard;



