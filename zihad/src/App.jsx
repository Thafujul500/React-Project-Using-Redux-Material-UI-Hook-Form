import React from "react";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Empty from "./components/Empty";

const App = () => {
  let value = useSelector((state) => state.friendDetails.friend);

  return <div>{value.length > 0 ? <Home /> : <Empty />}</div>;
};

export default App;
