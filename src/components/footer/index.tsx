import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        backgroundColor: "skyblue",
      }}
    >
      <h5 style={{ marginRight: "1rem" }}>&copy; {new Date().getFullYear()}</h5>
      <span style={{ marginRight: "1rem" }}>ComfySloth</span>
      <h5>All Rights Reserved</h5>
    </div>
  );
};

export default Footer;
