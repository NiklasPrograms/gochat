import React from "react";
import "./ChatHistory.scss";

const ChatHistory = (props) => {
    return(
        <div className="chat-history">
            <h2>Chat History</h2>
            {props.chatHistory.map((msg, index) => {
                return <p key={index}>{msg.data}</p>
            })}
        </div>
    );
};

export default ChatHistory;
