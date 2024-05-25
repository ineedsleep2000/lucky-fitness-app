import { useState, useEffect } from "react";
import WorkoutList from "./WorkoutList";
import AddWorkout from "./AddWorkout";
import EditWorkout from "./EditWorkout";

function WorkoutPage() {
  const [workouts, setWorkouts] = useState([]);
  console.log("🚀 ~ WorkoutPage ~ workouts:", workouts);

  useEffect(() => {
    fetch("http://localhost:6001/workouts")
      .then((response) => response.json())
      .then((data) => {
        setWorkouts(data);
      });
  }, []);

  return (
    <div>
      <WorkoutList workouts={workouts} />
      <AddWorkout />
      <EditWorkout />
    </div>
  );
}

export default WorkoutPage;
