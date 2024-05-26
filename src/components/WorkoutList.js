import React from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts, onDeleteWorkout }) => {
  const workoutCards = workouts.map((workout) => (
    <WorkoutCard
      key={workout.id}
      workout={workout}
      onDeleteWorkout={onDeleteWorkout}
    />
  ));

  return (
    <div>
      <ul>{workoutCards}</ul>
    </div>
  );
};

export default WorkoutList;
// onClick={handleAddWorkout}
