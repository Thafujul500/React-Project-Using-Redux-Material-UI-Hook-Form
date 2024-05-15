import React from "react";
import Creatre from "./Creatre";

const Empty = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src="public\IMG\pic.jpg" alt="sorry" className="img" />
      <h1 className="para">No Friend Information Found</h1>
      <Creatre />
    </div>
  );
};

export default Empty;
