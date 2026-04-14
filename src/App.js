import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;