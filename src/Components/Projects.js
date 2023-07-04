import React from "react";
import ticTacToe from "../assets/ticTacToe.jpeg";
import treasureHunt from "../assets/treasureHunt.png";
import gamerVault from "../assets/GamerVault.png";

const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="heading">
          Check Out <span>My Projects</span>
        </h2>

        <div className="portfolio-container">
          <div className="portfolio-box">
            <a href="https://jricks86.github.io/tic-tac-toe" target="_blank">
              <img src={ticTacToe} alt="" width="200" height="200" />
            </a>
            <p>
              Classic game of Tic Tac Toe involving two players alternatively
              marking squares on a three-by-three grid.
              <br />
              <br />
              Built with React
            </p>
          </div>
        </div>

        <div className="portfolio-container">
          <div className="portfolio-box">
            <a href="https://jricks86.github.io/" target="_blank">
              <img src={treasureHunt} alt="" width="200" height="200" />
            </a>
            <p>
              Seek and find treasure hunt game <br />
              <br />
              Built with HTML, CSS, and JavaScript
            </p>
          </div>
        </div>

        <div className="portfolio-container">
          <div className="portfolio-box">
            <a href="https://gamer-vault.onrender.com/" target="_blank">
              <img src={gamerVault} alt="" width="200" height="200" />
            </a>
            <p>
              This application allows users to create an account and manage
              their list of video games. Users can browse available games,
              search and add games to their list, update game attributes, and
              delete games from their list. It also pulls data from the RAWG API{" "}
              <br />
              <br />
              Built with Rails and React
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
