import React, { useState } from "react";

const AddWorkout = ({ onAddWorkout }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newWorkout = { ...formData };

    fetch("http://localhost:6001/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newWorkout),
    })
      .then((response) => response.json())
      .then((data) => onAddWorkout(data));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
