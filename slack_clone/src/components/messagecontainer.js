import SendMessageInput from "./sendmessageinput"
import axios from 'axios'
import { useEffect, useState, useContext } from "react"
import { UserContext } from "../userContext"

const MessageContainer = props => {
    const [messages, setMessages] = useState([])
    const { user } = useContext(UserContext)

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

    const Styles = {
        messageContentContainer: {
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "20%",
        },
        msgInfo: {
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "5%"
        },
        currentUserMessage: {
            minWidth: "30%",
            backgroundColor: "lightGray",
            border: "1px solid black",
            borderRadius: "5px"
        },
        textSpacingMsgInfo: {
            margin: "0",
            padding: "5% 0 0 0"
        },
        messageTextLayout: {
            display: "flex",
            justifyContent: "flex-start"
        },
        messageText: {
            margin: "0",
            padding: "0 5%",
        }
    }

    const messagesLayout = messages.map((msg, i) => (
                                user.username === msg.username ?
                                    <div style={Styles.messageContentContainer}>
                                        <div key={i} style={Styles.currentUserMessage}>
                                            <div style={Styles.messageTextLayout}>
                                                <p style={Styles.messageText}>{msg.text}</p>
                                            </div>
                                            <div style={Styles.msgInfo}>
                                                <p style={Styles.textSpacingMsgInfo}>{msg.username}</p>
                                            </div>
                                        </div>
                                    </div>
                                :
                                    <div key={i} className="notCurrentUserMessage">
                                        <p>{msg.username}</p>
                                        <p>{msg.text}</p>
                                    </div>
                            ))

    return( 
        <div className="messageContainer">
            <div className="messages">
                {messagesLayout}
            </div>
            <SendMessageInput roomid={props.roomid}></SendMessageInput>
        </div>
    )
}

export default MessageContainer