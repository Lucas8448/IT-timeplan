import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import VRTimeplan from './VRTimeplan';
import Timeplan from './Timeplan';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Hjem</Link>
            </li>
            <li>
              <Link to="/vr">VR Timeplan</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/vr" element={<VRTimeplan />} />
          <Route path="/" element={<Timeplan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;