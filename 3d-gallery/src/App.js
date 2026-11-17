import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Gallery from './components/Gallery';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Blog from './components/BlogPage1';
import DressDesignPage from './components/DressDesignPage';

// Individual Pages
import PeacockPage from './components/PeacockPage';
import TigerPage from './components/TigerPage';
import NaturePage from './components/NaturePage';
import ArtPage from './components/ArtPage';
import DolphinPage from './components/DolphinPage';
import PenguinPage from './components/PenguinPage';
import SnackePage from './components/SnackePage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/BlogPage1" element={<Blog />} />
      <Route path="/DressDesignPage" element={<DressDesignPage />} />

      {/* Individual Pages */}
      <Route path="/PeacockPage" element={<PeacockPage/>} />
      <Route path="/ArtPage" element={<ArtPage />} />
      <Route path="/TigerPage" element={<TigerPage />} />
      <Route path="/NaturePage" element={<NaturePage />} />
      <Route path="/DolphinPage" element={<DolphinPage />} />
      <Route path="/PenguinPage" element={<PenguinPage />} />
      <Route path="/SnackePage" element={<SnackePage />} /> {/* ✅ Fixed spelling */}

      {/* Dynamic Route */}
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  );
}

export default App;
