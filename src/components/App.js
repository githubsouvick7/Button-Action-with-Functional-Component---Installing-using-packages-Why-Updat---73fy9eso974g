import React, { useState } from 'react';

function MyButton() {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <>
      <button id="click" onClick={() => setShowParagraph(!showParagraph)}>
        Click me
      </button>
      {showParagraph && (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      )}
    </>
  );
}

export default MyButton;
