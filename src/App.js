import "./App.css";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import firebaseConfig from "./services/api";

function App() {
  const app = initializeApp(firebaseConfig);
  const [images, setImages] = useState([]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
