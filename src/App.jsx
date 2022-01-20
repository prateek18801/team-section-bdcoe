import Team from "./components/Team";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";

function App() {
  return (
    <div className="team__app">
      <ParticleBackground />
      <Team />
    </div>
  );
}

export default App;