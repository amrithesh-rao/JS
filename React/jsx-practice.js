import React from 'react';
import ReactDOM from 'react-dom';

var yourName = "Amrithesh";
var currentYear = new Date().getFullYear();

ReactDOM.render(<div>
  <p>Created by {yourName}</p>
  <p>Copyright {currentYear}</p>
</div>,document.getElementById('root'));