import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <div
      className="border-top"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1%",
      }}
    >
      <div style={{ paddingRight: 5 }}>
        <SocialIcon
          url="https://www.linkedin.com/in/tahazulfiqar/"
          style={{ height: 45, width: 45 }}
          bgColor="black"
        />
        <SocialIcon
          url="https://github.com/tahazulfiqar"
          style={{
            height: 45,
            width: 45,
          }}
          bgColor="Black"
        />
      </div>
    </div>
  );
};
