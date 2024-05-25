import "../Header.css";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import WorkoutPage from "./WorkoutPage";

function App() {
  return (
    <div className="container">
      <Header />
      <Contact />
      <About />
      <WorkoutPage />
    </div>
  );
}

export default App;
