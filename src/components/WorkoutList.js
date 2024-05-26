import React from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts, onDeleteWorkout }) => {
  return (
    <ul>
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          onDeleteWorkout={() => onDeleteWorkout(workout.id)} // Pass down a function that directly deletes the workout
        />
      ))}
    </ul>
  );
};

export default WorkoutList;



