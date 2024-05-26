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
        console.log("Fetched Workouts: ", data);
        setWorkouts(data);
      });
  }, []);

  const handleDelete = (deleteWorkoutId) => {
    console.log("Deleting workout with ID:", deleteWorkoutId);
    fetch(`http://localhost:6001/workouts/${deleteWorkoutId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Workout deleted successfully.");
          setWorkouts(
            workouts.filter((workout) => workout.id !== deleteWorkoutId)
          );
        } else {
          console.error("Failed to delete workout. Status:", response.status);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <AddWorkout workouts={workouts} setWorkouts={setWorkouts} />
      <WorkoutList workouts={workouts} onDeleteWorkout={handleDelete} />
      <EditWorkout />
    </div>
  );
}

export default WorkoutPage;
// Add into the return, this is to add a link to the add workout form
// <Link className="button" to="/add-workout-to-page">
// <button>Add Workout</button>
// </Link>
