import React from "react";

const WorkoutCard = ({ workout, onDeleteWorkout }) => {
  const { id, name, image } = workout;

  const handleDelete = () => {
    console.log("Initiating delete for workout ID:", id);
    fetch(`http://localhost:6001/workouts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Deleted workout with ID:", id);
          onDeleteWorkout(id);
        } else {
          console.error(
            "Failed to delete workout with ID:",
            id,
            "Status:",
            response.status
          );
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <li className="workoutCards">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default WorkoutCard;
