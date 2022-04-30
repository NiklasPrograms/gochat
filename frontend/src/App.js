import './App.css';
import React, { useEffect, useState } from 'react';
import { connect } from './api';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  // On mount
  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory(prevState => {
        return [...prevState, msg]
      })
      console.log(chatHistory);
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
