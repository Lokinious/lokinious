import React, { useState } from 'react';
import './App.css';

function App() {
  const [info, setInfo] = useState('');

  const handleClick = (message) => {
    setInfo(message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Lokinious</h1>
        <p>This is the home page for the Lokinious project.</p>
      </header>
      <div className="Button-row">
        <button onClick={() => handleClick('Merch: Will be announced soon!')}>Merch</button>
        <button onClick={() => handleClick('Streaming: My Streaming information and schedule will be determined soon!')}>Streaming</button>
        <button onClick={() => handleClick('Projects: Code projects will be announced here soon!')}>Projects</button>
        <button onClick={() => handleClick('Support Us: To support us, we will have information uploaded soon!')}>Support Us!</button>
        <button onClick={() => handleClick('Contact Us: Contact information will be uploaded soon!')}>Contact</button>
      </div>
      <div className="Info">
        <p>{info}</p>
      </div>
    </div>
  );
}

export default App;