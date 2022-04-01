import {Button, InputGroup, Form} from 'react-bootstrap'
import axios from 'axios'

const SendMessageInput = () => {

    const handleMessageSubmit = async () => {
        console.log('hi')
        const res = await axios.get('http://localhost:4000/user/test')
        console.log(res);
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