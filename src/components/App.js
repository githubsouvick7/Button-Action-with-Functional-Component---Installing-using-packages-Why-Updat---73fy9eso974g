import React, { Component, useState } from "react";
import "./../styles/App.css";

  function App(){
    const [cls,setCls] = useState('d-none');
 
    const text = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    return (
      <div id="main">
        <button id="click" onClick={() => setCls((cls) => cls ==='d-none' ? 'show' : 'd-none')}>Click Here</button>
        <h4 id="para" className={cls}>{text}</h4>
      </div>
    );
}


export default App;
