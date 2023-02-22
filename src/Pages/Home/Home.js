import React from "react";
import './Home.css'
const Home = () => {
  return (
    <div>
      <h1>Select image to upload</h1>
      <input
        type={"file"}
        onChange={(e) => {
          console.log(e.target.files);
        }}
      />
    </div>
  );
};
export default Home;
