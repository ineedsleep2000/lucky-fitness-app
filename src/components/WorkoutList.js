import React from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts, onDeleteWorkout }) => {
  return (
    <ul>
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          onDeleteWorkout={() => onDeleteWorkout(workout.id)}
        />
      ))}
    </ul>
  );
};

export default WorkoutList;
