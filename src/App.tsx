import Achievements from "./assets/components/Achievements";
import Clients from "./assets/components/Clients";
import Community from "./assets/components/Community";
import Hero from "./assets/components/Hero";
import NavBar from "./assets/components/NavBar";
import Unlock from "./assets/components/Unlock";

function App() {
  return (
    <div>
      <div className="bg-silver flex flex-col">
        <NavBar />
        <Hero />
      </div>
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
    </div>
  );
}

export default App;
