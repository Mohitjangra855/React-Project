import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marque from "./Components/Marque";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Cards from "./Components/Cards";
import StartProject from "./Components/StartProject";
import Footer from "./Components/Footer";
//scroll/locomotive .....
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <StartProject />
      <Footer />
    </div>
  );
};

export default App;
