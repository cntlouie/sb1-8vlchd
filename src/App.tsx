import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Faction from './components/Faction';
import Admin from './components/Admin';
import { StatsProvider } from './context/StatsContext';

function App() {
  return (
    <StatsProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1fe88c123529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/faction" element={<Faction />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </StatsProvider>
  );
}

export default App;