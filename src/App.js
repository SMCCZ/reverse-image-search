import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  const app = initializeApp(firebaseConfig);
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const db = getFirestore(app);
    const imagesCollection = collection(db, "images");
    
    const imagesSnapshot = await getDocs(imagesCollection);
    const imagesList = imagesSnapshot.docs.map((doc) => doc.data());
    console.log(imagesList);
    setImages(imagesList);
    return imagesList;
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
const firebaseConfig = {
  apiKey: "AIzaSyCC6I-1-EdT-3RzwoW5Xfg-gmHLryRRv7I",
  authDomain: "team-ion-21.firebaseapp.com",
  projectId: "team-ion-21",
  storageBucket: "team-ion-21.appspot.com",
  messagingSenderId: "322547275203",
  appId: "1:322547275203:web:499f42356d52940db01976",
};

/*


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase

=============================================
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCC6I-1-EdT-3RzwoW5Xfg-gmHLryRRv7I",
    authDomain: "team-ion-21.firebaseapp.com",
    projectId: "team-ion-21",
    storageBucket: "team-ion-21.appspot.com",
    messagingSenderId: "322547275203",
    appId: "1:322547275203:web:499f42356d52940db01976"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
*/
