import React from "react";
import "./ChatInput.scss"

const ChatInput = (props) => {
    return(
        <div className="chat-input">
            <input onKeyDown={props.send}/>
        </div>
    )
}

export default ChatInput;