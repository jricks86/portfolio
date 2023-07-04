import React from "react";
import { Document, Page } from "react-pdf";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, my name is</h3>
          <h1>Jessica Ricks</h1>
          <h3>
            Welcome to my <span className="span">portfolio!</span>
          </h3>

          <div className="social-media">
            <a href="https://www.linkedin.com/in/jricks86" target="_blank">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="mailto: jricks86@gmail.com">
              <i className="bx bxs-envelope"></i>
            </a>
            <a href="https://github.com/jricks86" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <a href="https://career.io/r/L7aIuuak5" class="btn">
            Resume
          </a>
        </div>
        <div className="home-img">
          <img
            src="https://media.licdn.com/dms/image/C4E03AQGV6PBANgw0vA/profile-displayphoto-shrink_400_400/0/1516859082892?e=1689206400&v=beta&t=SShxfhWDQ-fdxx1OQTmTuPYGs_x3shssOqRAcR0R_tQ"
            alt="Picture of Jessica"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
