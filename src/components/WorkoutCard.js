import React from "react";

const WorkoutCard = ({ workout }) => {
  const { id, name, image } = workout;

  return (
    <li>
      <img src={image} alt={name} />
      <h4>{name}</h4>
    </li>
  );
};

export default WorkoutCard;
