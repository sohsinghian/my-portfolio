import React from "react";
import IndividualProject from "../components/IndividualProject";
import glassBridge from "../images/glass-bridge-game.png";
import finance from "../images/finance.png";
import happeats from "../images/happeats.png";
import remotr from "../images/remotr.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Projects = () => {
  return (
    <>
      <div class="w-full lg:h-screen p-2" id="projects">
        <div class="max-w-[1240px] mx-auto px-2 py-16">
          <p class="pb-8 font-bold text-5xl tracking-widest text-center">
            Projects
          </p>
          <div>
            <div class="flex">
              <AliceCarousel>
                <IndividualProject
                  src={glassBridge}
                  name="Glass Bridge Game"
                  button1="Play"
                  website="https://sohsinghian.github.io/glass-bridge-game-project"
                  github="https://github.com/sohsinghian/glass-bridge-game-project"
                />
                <IndividualProject
                  src={finance}
                  name="Personal Finance Tracker"
                  button1="App"
                  website="https://shpersonalfinancetracker.netlify.app"
                  github="https://github.com/sohsinghian/personal-finance-tracker"
                />
                <IndividualProject
                  src={remotr}
                  name="Remotr Work"
                  // button1="App"
                  // website="https://shpersonalfinancetracker.netlify.app"
                  github="https://github.com/jamesapprovd/remote-work-app"
                />
                <IndividualProject
                  src={happeats}
                  name="HappEats Food Delivery"
                  // button1="App"
                  // website="https://shpersonalfinancetracker.netlify.app"
                  github="https://github.com/sohsinghian/HappEats"
                />
              </AliceCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
