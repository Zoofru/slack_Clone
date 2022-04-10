import {Button, InputGroup, Form} from 'react-bootstrap'
import axios from 'axios'
import { io } from "socket.io-client"

const SendMessageInput = () => {
    const socket = io.apply('ws://localhost:3000')
    socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });
    const handleMessageSubmit = async () => {
        const res = await axios.get('http://localhost:4000/user/test')
    }

    const Styles = {
        input: {
            width: '50%'
        },
        centerAlign: {
            display: 'flex',
            justifyContent: 'center'
        }
    }

    return(
        <div style={Styles.centerAlign}>
            <InputGroup className="mb-3" style={Styles.input}>
                <Form.Control
                    placeholder="Type something..."
                    aria-label="user message"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="send" onClick={handleMessageSubmit}>
                    Send
                </Button>
            </InputGroup>
        </div>
    )
}

export default SendMessageInput