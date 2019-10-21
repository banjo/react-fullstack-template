import React, { useState } from 'react';
import './app.css';

const App = (props) => {
  const state = useState('Hello world');

  return (<div>{state}</div>);
};

export default App;
