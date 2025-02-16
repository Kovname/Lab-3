import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PaletteList />} />
        <Route path="/palette/:id" element={<Palette />} />
      </Routes>
    </div>
  );
}

export default App;
