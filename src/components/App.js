import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../Header.css";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import WorkoutPage from "./WorkoutPage";
import AddWorkout from "./AddWorkout";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workoutpage" element={<WorkoutPage />} />
          <Route path="/add-workout-to-page" element={<AddWorkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
