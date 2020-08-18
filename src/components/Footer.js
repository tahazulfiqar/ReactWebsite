import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

//          Copyright &copy;{new Date().getFullYear()} Taha Zulfiqar

export const Footer = () => {
  return (
    <div>
      <div
        className="border-top"
        style={{
          display: "flex",
          justifyContent: "center",
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
      <div className="row text-center">
        <p style={{ fontSize: 10 }} className="col-sm">
          {" "}
          Designed and built by Taha Zulfiqar using{" "}
          <a href="https://reactjs.org/">React</a>, hosted via{" "}
          <a href="https://aws.amazon.com/amplify/">AWS Amplify</a>.
        </p>
      </div>
    </div>
  );
};
