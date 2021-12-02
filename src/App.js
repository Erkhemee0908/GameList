import './App.css';
import Games from './components/Games'
import AppBar from './components/AppBar'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWWgbsUV0Bf14mjPfMnIkAmvbscjF8dfA",
  authDomain: "gamelist-f00b7.firebaseapp.com",
  projectId: "gamelist-f00b7",
  storageBucket: "gamelist-f00b7.appspot.com",
  messagingSenderId: "381261455022",
  appId: "1:381261455022:web:f1230226174260276e173f",
  measurementId: "G-SCQ01LKVTY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <>
      <AppBar />
      <Games />
    </>
  );
}

export default App;
