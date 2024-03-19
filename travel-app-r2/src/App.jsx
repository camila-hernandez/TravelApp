import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="box">
        <div>
          {/* Your existing content */}
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <div className="footer">
        <button>A</button>
        <button>B</button>
      </div>
      </div>
      {/* Footer with two buttons */}

    </div>
  );
}

export default App;
