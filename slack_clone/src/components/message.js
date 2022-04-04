import { useContext } from "react"
import { UserContext } from "../userContext"

const Message = props => {
    const { user } = useContext(UserContext)

    return (
        <div>
            <p>{props.messageValue}</p>
        </div>
    )    
}

export default Message