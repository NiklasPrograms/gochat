import './App.css';
import React, { useEffect } from 'react';
import { connect, sendMsg } from './api';
import Header from './components/Header/Header';

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
      <Header/>
      <button onClick={send}>Hit me</button>
    </div>
  )
};

export default App;
