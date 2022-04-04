import {Button, InputGroup, Form} from 'react-bootstrap'
import axios from 'axios'
import { useContext, useState } from 'react'
import { UserContext } from '../userContext'

const SendMessageInput = () => {
    const [messageValue, setMessageValue] = useState('')
    const { user } = useContext(UserContext)
    
    const handleMessageSubmit = async () => {
        console.log(messageValue);
        console.log(user)
        const res = await axios.post('http://localhost:4000/message/new', {
            message: messageValue,
            user: user.username
        })
        console.log(res);

        setMessageValue("")
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
                    onChange={e => {setMessageValue(e.target.value)}}
                />
                <Button variant="outline-secondary" id="send" onClick={handleMessageSubmit}>
                    Send
                </Button>
            </InputGroup>
        </div>
    )
}

export default SendMessageInput