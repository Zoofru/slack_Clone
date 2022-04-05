import NavBar from "../components/navbar"
import MessageContainer from "../components/messagecontainer"

const HomePage = () => {
    return (
        <div className="homepage">
            <NavBar></NavBar>
            <MessageContainer roomid={'homeroom'}></MessageContainer>
        </div>
    )
}

export default HomePage