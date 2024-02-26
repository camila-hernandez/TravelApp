import React from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import HomePage from './HomePage';
import MeowPage from './MeowPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meow" element ={ <MeowPage />} />
      </Routes>
    </Router>
  );
}

export default App;
