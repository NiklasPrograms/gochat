import React from "react";
import "./ChatInput.scss"
import { sendMsg } from "../../api";

const ChatInput = (props) => {
    const send = (event) => {
        if (event.key === "Enter") {
          sendMsg(event.target.value);
          event.target.value="";
        }
      }

    return(
        <div className="chat-input">
            <input onKeyDown={send}/>
        </div>
    )
}

export default ChatInput;