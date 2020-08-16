import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <SocialIcon
          url="https://www.linkedin.com/in/tahazulfiqar/"
          style={{ height: 35, width: 35 }}
          bgColor="black"
        />{" "}
        <a href="https://www.linkedin.com/in/tahazulfiqar/">
          linkedin.com/in/tahazulfiqar
        </a>
        {"     "} {"     "} {"     "} {"     "} {"     "} {"     "} {"     "}
        <SocialIcon
          url="https://github.com/tahazulfiqar"
          style={{ height: 35, width: 35 }}
          bgColor="Black"
        />{" "}
        <a href="https://github.com/tahazulfiqar">github.com/tahazulfiqar</a>
      </div>
    </div>
  );
};
