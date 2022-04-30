import './App.css';
import React, { useEffect, useState } from 'react';
import { connect, sendMsg } from './api';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';

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

  const send = () => {
    console.log("Hello");
    sendMsg("Hello");
  }

  return (
    <div className='App'>
      <Header/>
      <ChatHistory chatHistory={chatHistory}/>
      <button onClick={send}>Hit me</button>
    </div>
  )
};

export default App;
