// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Screen_Header';
import Main from './components/Screen_Main';
import Footer from './components/Screen_Footer';
import './App.css'; // Import your CSS file for styling

function App() {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <Router>
      <div className="app-container">
        <Header pageTitle={pageTitle} />
        <Main setPageTitle={setPageTitle} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
