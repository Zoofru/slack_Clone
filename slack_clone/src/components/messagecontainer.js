import SendMessageInput from "./sendmessageinput"
import axios from 'axios'
import { useState } from "react"

const MessageContainer = () => {
    const [messages, setMessages] = useState([])

    const getAllMessages = async () => {
        const res = await axios.get('http://localhost:4000/message/getAll')
        console.log(res)
    }

    return( 
        <div className="messageContainer">
            <div className="messages">Messages</div>
            <SendMessageInput></SendMessageInput>
        </div>
    )
}

export default MessageContainer