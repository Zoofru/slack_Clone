import {Button, InputGroup, Form} from 'react-bootstrap'

const SendMessageInput = () => {

    const handleMessageSubmit = () => {
        console.log('hi')
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