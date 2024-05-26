import React, { useState } from "react";

const AddWorkout = ({ workouts, setWorkouts }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  console.log("Received Workouts Prop: ", workouts);

  function handleSubmit(event) {
    event.preventDefault();

    // Determine the next ID as a string
    const nextId =
      workouts.length > 0
        ? (
            Math.max(...workouts.map((workout) => parseInt(workout.id))) + 1
          ).toString()
        : "1";

    const newWorkout = { ...formData, id: nextId };

    fetch("http://localhost:6001/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newWorkout),
    })
      .then((response) => response.json())
      .then((data) => setWorkouts([...workouts, data]));
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="new-workout">
      <h2>New Workout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Workout name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;
