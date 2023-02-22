import "./App.css";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";


function App() {
  // const app = initializeApp(firebaseConfig);
  const [images, setImages] = useState([]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>{" "}
      <div
        style={{
          background: "black",
          color: "white",
          paddingTop: "2px",
          minHeight: "80px",
        }}
      >
        {" "}
        <footer>
          <p>
            Developer:Sabir Mondal
            <br />Contact: +91 8617418378
            <br />&copy; {new Date().getFullYear()}
          </p>
        
        </footer>
      </div>
    </div>
  );
}

export default App;
