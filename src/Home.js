import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import "./index.css";
import Content from "./components/Content";
import pdf from "./assets/Taha_Zulfiqar_Resume.pdf";
import taha from "./assets/taha.JPG";

export const Home = () => (
  <div className="content-container">
    <h4 className="content-title">About Me</h4>
    <Image className="photo" src={taha}></Image>
    <div className="content-section">
      <Content>
        <p>Hi, and welcome to my personal website. </p>

        <p>
          {" "}
          I am a Software System Designer at{" "}
          <a href="https://www.amd.com/">Advanced Micro Devices</a>. I
          previously worked at <a href="https://www.milacron.com/">Milacron</a>{" "}
          as an IT Help Desk Intern.
        </p>

        <p>
          I graduated from the{" "}
          <a href="https://www.utoronto.ca/">University of Toronto</a> with a
          Honours Bachelor of Science in{" "}
          <a href="https://web.cs.toronto.edu/">Computer Science</a> as of
          Winter 2020.
        </p>

        <p>
          I am interested in (and have experience with) Automated Testing,
          Artificial Intelligence/Machine Learning, Cloud Computing and
          Full-Stack Development.
        </p>

        <p>
          My current hobbies include cooking, playing volleyball, web
          development and gaming.{" "}
        </p>

        <p>
          If you would like to get in touch, please reach out to me via{" "}
          <a href="mailto:taha.zulfiqar@mail.utoronto.ca">e-mail</a>. You can
          also download a copy of my{" "}
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            resume
          </a>
          , or view some of my past and ongoing{" "}
          <a href="https://github.com/tahazulfiqar">projects</a>.
        </p>
      </Content>
    </div>
  </div>
);
