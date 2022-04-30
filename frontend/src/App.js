import './App.css';
import React, { useEffect, useState } from 'react';
import { connect, sendMsg } from './api';
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

  const send = (event) => {
    if (event.key === "Enter") {
      sendMsg(event.target.value);
      event.target.value="";
    }
  }

  return (
    <div className='App'>
      <Header/>
      <ChatHistory chatHistory={chatHistory}/>
      <ChatInput send={send}/>
    </div>
  )
};

export default App;
