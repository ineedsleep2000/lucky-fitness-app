import { useState, useEffect } from "react";
import WorkoutList from "./WorkoutList";
import AddWorkout from "./AddWorkout";
import EditWorkout from "./EditWorkout";

function WorkoutPage() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/workouts")
      .then((response) => response.json())
      .then((data) => {
        setWorkouts(data);
      });
  }, []);

  const handleDelete = (deleteWorkoutId) =>
    setWorkouts(workouts.filter((workout) => workout.id !== deleteWorkoutId));

  return (
    <div>
      <AddWorkout workouts={workouts} setWorkouts={setWorkouts} />
      <WorkoutList workouts={workouts} onDeleteWorkout={handleDelete} />
    </div>
  );
}

export default WorkoutPage;
