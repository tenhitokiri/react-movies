import logo from './logo.svg';
import './App.css';
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Viewport from './components/viewport';
import Buscador from './components/buscador';
import { Favorites } from './components/favorites';

function App() {
  return (
    <React.Fragment>
      <Router >
        <Routes>
          <Route path="/" element={<Viewport />} >
            <Route index element={<Buscador />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment >
  );
}

export default App;
