import './App.css';
import React, { useEffect } from 'react';
import { connect, sendMsg } from './api';

const App = () => {
  useEffect(() => {
    connect();
  }, [])

  const send = () => {
    console.log("Hello");
    sendMsg("Hello");
  }

  return (
    <div className='App'>
      <button onClick={send}>Hit</button>
    </div>
  )
};

export default App;
