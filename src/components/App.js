import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import WorkoutPage from './WorkoutPage';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        {/* Routes */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workoutpage" element={<WorkoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



