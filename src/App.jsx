import About from "./Routes/About/About";

import { Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home";

import Contact from "./Pages/Contact";

import Sell from "./Pages/Sell_"

import Buy from "./Pages/Buy_"

import Header from './Components/Header';

import Tmap from './Pages/Tmap'

import Redeem from './Pages/Redeem';

import {useState} from 'react';
import userData from './userdata.json';
import Login from "./Pages/LoginPage";
import Signup from "./Pages/SignupPage";
import { useNavigate } from "react-router-dom";

function App() {
  const [userState, setUserState] = useState({"email": "", "password": "", "type": ""});
  const navigate = useNavigate();

  const handleUserSignin = (email, password) => {
    for(let i=0; i<userData.length; i++) {
      const data = userData[i];
      if((data.email===email || data.phone===email) && data.password===password) {
        setUserState({"email": data.email, "password": data.password, "type": data.type});
        break;
      }
    }
    navigate("/");
  }

  const handleLogout = () => {
    setUserState({"email": "", "password": "", "type": ""});
  }

  return (
    <>
    
      <Header authDetails={userState} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="about" element={<About />} />
          <Route path="map/:product/:quantity" element={<Tmap authDetails={userState} />} />
          <Route path="sell" element={<Sell />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login hangleLogin={handleUserSignin} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="redeem" element={<Redeem />} />
          <Route path="*" element={
              <main style={{ padding: '1rem' }}>
                <h1>Error 404</h1>
                <p>Page not found !</p>
              </main>
            }
          />
        
      </Routes>

    </>
  );
}

export default App;
