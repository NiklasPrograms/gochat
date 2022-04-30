import React from "react";
import "./ChatHistory.scss";
import Message from "../Message/Message";

const ChatHistory = (props) => {
    return (
        <div className="chat-history">
            <h2>Chat History</h2>
            {props.chatHistory.map((msg, index) => {
                return <Message key={index} message={msg.data} />
            })}
        </div>
    );
};

export default ChatHistory;
