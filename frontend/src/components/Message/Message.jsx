import React, { useEffect, useState } from "react";
import "./Message.scss"

const Message = (props) => {
    const [message, setMessage] = useState({});

    useEffect(() => {
        const newMessage = JSON.parse(props.message);
        setMessage(() => newMessage);
    }, [props.message]);

    return(
        <div className="message">
            {message.body}
        </div>
    );
}

export default Message;