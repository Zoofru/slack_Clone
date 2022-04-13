import SendMessageInput from "./sendmessageinput"
import axios from 'axios'
import { useEffect, useState } from "react"

const MessageContainer = props => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        async function getAllMessages() {
            const res = await axios.post('http://localhost:4000/message/getAll', {
                room: props.roomid
            })
            setMessages(res.data)
        }
        getAllMessages()
        console.log(messages)
    }, [])

    return( 
        <div className="messageContainer">
            <div className="messages">
                {messages.map((msg, i) => (
                    <div key={i}>
                        <p>{msg.username}</p>
                        <p >{msg.text}</p>
                    </div>
                ))}
            </div>
            <SendMessageInput roomid={props.roomid}></SendMessageInput>
        </div>
    )
}

export default MessageContainer