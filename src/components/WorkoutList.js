import React from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts }) => {
  const workoutCards = workouts.map((workout) => (
    <WorkoutCard key={workout.id} workout={workout} />
  ));

  return <ul>{workoutCards}</ul>;
};

export default WorkoutList;
