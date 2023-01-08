import React, { useState } from 'react';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleClick = () => {
    setShowParagraph(true);
  }

  return (
    <div>
      <button id="click" onClick={handleClick}>Click me</button>
      {showParagraph && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}

export default App;
