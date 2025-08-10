// App.jsx
    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Nav from './components/Nav';
    import Home from './components/Home';
    import Admin from './components/Admin';
    import Dashboard from './components/Dashboard';

    function App() {
      return (
        <Routes>
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      );
    }

    export default App;