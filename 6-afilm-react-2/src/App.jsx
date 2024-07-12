/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import "./style/landingPage.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/SuperHero";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <SuperHero />
      </div>

      <div className="foother">
        <Copyright />
      </div>
    </div>
  );
}

export default App;
