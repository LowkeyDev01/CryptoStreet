import NavBar from "./components/navbar.jsx";
import About from "./pages/AboutSection.jsx";
import Episodes from "./pages/EpisodeSection.jsx";
import Hero from "./pages/HeroSection.jsx";
import MeetTheFounder from "./pages/MeetTheFounder.jsx";

export default function App(){
  return(
    <div className="flex flex-col w-full min-h-screen bg-white relative">
      <NavBar />
      <Hero />
      <About />
      <Episodes />
      <MeetTheFounder />
    </div>
  )
}