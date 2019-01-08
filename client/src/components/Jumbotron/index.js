import React from "react";

const jumbotronStyle = {
  height: 300, 
  clear: "both", 
  paddingTop: 100, 
  textAlign: "center",
  backgroundColor: "#D6BAE0",
  color: "#391F44"
}

function Jumbotron({ children }) {
  return (
    <div
      style={ jumbotronStyle }
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
