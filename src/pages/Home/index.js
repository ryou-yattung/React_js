import { useState } from "react";

import Edit from "./conponents/Edit";
import List from "./conponents/List";
import "./index.css";

// const app = {
//      color: 'red'
// }

const Home = () => {
  const [date, setDate] = useState([]);
  // return <div style={app}>
  return (
    <div className="app">
      <Edit add={setDate} />
      <List listDate={date} deletDate={setDate} />
    </div>
  );
};
export default Home;
