import logo from './logo.svg';
import './App.css';
import Head from "./Components/Head"
import About from "./Components/About"
import BSTC from "./Components/BSTC"
import Contact from "./Components/Contact"
import Video from "./Components/Video";
import Events from './Components/eventWinners';
import Games from "./Components/Games";
import Insights from "./Components/Insights"
import Team from "./Components/Team";
import Poem from "./Components/Poem";
import Tournament from "./Components/Gaming-Tournament";
import TeamIntro from './Components/OurTeam';


function App() {
  return (
    <div className="App">
      <Contact />
      <Head />
      <About />
      <Video />
      <BSTC />
      <Games />
      
      <Poem />
      <Tournament />
      <TeamIntro />
    <Team />
    </div>
  );
}

export default App;
