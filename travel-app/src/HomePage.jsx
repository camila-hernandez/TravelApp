// HomePage.jsx
import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/meow');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to Meow Page</button>
    </div>
  );
}

export default HomePage;
