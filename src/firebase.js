import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCC6I-1-EdT-3RzwoW5Xfg-gmHLryRRv7I",
  authDomain: "team-ion-21.firebaseapp.com",
  projectId: "team-ion-21",
  storageBucket: "team-ion-21.appspot.com",
  messagingSenderId: "322547275203",
  appId: "1:322547275203:web:499f42356d52940db01976",
};

const firebaseAPP = initializeApp(firebaseConfig);
const storage = getStorage(firebaseAPP);
export default storage;
