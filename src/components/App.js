import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
const [readMore,setReadMore] = useState(false);
  const extraContent=<div>
      <p id="para">
      Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
  </div>
  return (
    <div className="App">
      <button id="click" onClick={()=>{setReadMore(!readMore)}}>Click</button>
      {readMore && extraContent}
    </div>
  );
}


export default App;
