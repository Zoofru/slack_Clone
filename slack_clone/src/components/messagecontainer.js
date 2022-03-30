import SendMessageInput from "./sendmessageinput"

const MessageContainer = () => {
    return( 
        <div className="messageContainer">
            <div className="placeholder-messages">Messages</div>
            <SendMessageInput></SendMessageInput>
        </div>
    )
}

export default MessageContainer