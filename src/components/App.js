import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../Header.css";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import WorkoutPage from "./WorkoutPage";
import WelcomePage from "./WelcomePage";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workoutpage" element={<WorkoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
