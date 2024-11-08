import Achievements from "./assets/components/Achievements";
import Calender from "./assets/components/Calender";
import Clients from "./assets/components/Clients";
import Community from "./assets/components/Community";
import CommunityUpdate from "./assets/components/CommunityUpdate";
import Customers from "./assets/components/Customers";
import Footer from "./assets/components/Footer";
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
      <Calender />
      <Customers />
      <CommunityUpdate />
      <Footer />
    </div>
  );
}

export default App;
