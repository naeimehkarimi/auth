import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Profile from '../components/pages/Profile';

const App = () => {
    return ( 
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="login" element={<Login />} />
          </Routes>
        </Router>
      </div>
     );
}
 
export default App;