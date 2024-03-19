// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

function App() {
  return (
    <Router>
      <div style={{ height: '700px', width: '393px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Welcome to My App</h1>
        <div style={{ margin: '20px' }}>
          <Link to="/screen2" style={{ marginRight: '20px', textDecoration: 'none' }}>
            <button>Go to Screen 2</button>
          </Link>
          <Link to="/screen3" style={{ textDecoration: 'none' }}>
            <button>Go to Screen 3</button>
          </Link>
        </div>
        <Route path="/screen2" component={Screen2} />
        <Route path="/screen3" component={Screen3} />
      </div>
    </Router>
  );
}

export default App;
