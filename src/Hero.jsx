import React from "react";
import "./style.css";

import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div>

      {/* Header */}
      <header>
        <h2 className="logo">
          <span>J</span>oe.
        </h2>

        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        <a href="#" className="btn-talk">
          Let's Talk
        </a>
      </header>


      {/* Home Section */}
      <section className="home">

        <div className="content">

          <h2>
            Hi, I'm <span>Joe Greyson</span>
          </h2>

          <h4>Frontend Developer</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A esse totam provident voluptas similique.
            Impedit incidunt atque recusandae rem quam.
          </p>

          <div className="btn-group">

            <a href="#">Hire Me</a>

            <a href="#">See Projects</a>

          </div>


          {/* React Icons */}
          <div className="social-icons">

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;