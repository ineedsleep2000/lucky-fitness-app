import React from "react";
import "../WorkoutCard.css";


const WorkoutCard = ({ workout, onDeleteWorkout }) => {
  const { id, name, image } = workout;

  const handleDelete = () => {
    console.log("Initiating delete for workout ID:", id);
    fetch(`http://localhost:6001/workouts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        console.log("Deleted workout with ID:", id);
        onDeleteWorkout(id); // Update parent component state after successful deletion
      }
    });
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



