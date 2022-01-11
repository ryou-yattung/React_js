import { useEffect, useState } from "react";
import { API_GET_DATA } from "../../globel/constants";

import Edit from "./conponents/Edit";
import List from "./conponents/List";
import "./index.css";

// const app = {    //cssの部分
//      color: 'red'
// }

const Home = () => {
  const [date, setDate] = useState([]);
  // return <div style={app}>

  useEffect(() => {
     fetch(API_GET_DATA)
     .then(res => res.json())
     .then(data => {
          console.log(data);
     })
  },[]) 

  return (
    <div className="app">
      <Edit add={setDate} />
      <List listDate={date} deletDate={setDate} />
    </div>
  );
};
export default Home;
