import './App.css';
import React, { useEffect, useState } from 'react';
import { connect } from './api';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect(msg => {
      setChatHistory(prevState => [...prevState, msg])
    });
  })

  return (
    <div className='App'>
      <Header/>
      <ChatHistory chatHistory={chatHistory}/>
      <ChatInput/>
    </div>
  )
};

export default App;
