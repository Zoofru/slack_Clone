
import { useState, useContext, useEffect } from "react"
import NavItem from "./navitem"
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import {io} from 'socket.io-client'
import { UserContext } from "../userContext"

const NavBar = () => {
    const navItems = ['# Home', '# Announcments', '# Hangout', '# Feedback', '# Social-Media']
    const [loggedIn, setLoggedIn] = useState(false)
    const [modalOpen, setOpenModal] = useState(false)
    const [showCreateAccount, SetShowCreateAccount] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {user, setUser} = useContext(UserContext)

    const socket = io('http://localhost:8080')
    socket.on('connect', () => {
        // console.log(`Welcome ${socket.id}`)
    })

    // socket.emit('custom-event', 10, 'hi', {test: 'tube'})

    const Styles = {
        colorWhiteMarginZero: {
            color: 'white',
            margin: "0"
        },
        accountIcons: {
            paddingBottom: '1.5vh',
        },
        passwordInputSpacing: {
            marginTop: '2vh'
        },
        marginTop: {
            marginTop: '2vh',
            marginBottom: '0'
        }
    }

    const openLoginModal = () => setOpenModal(true)
    const closeModal = () => setOpenModal(false)
    const createAccountSwitch = () => {
        if(showCreateAccount) {
            SetShowCreateAccount(false)
        } else {
            SetShowCreateAccount(true)
        }
    }

    const handleLogin = async () => {
        const res = await axios.post("http://localhost:4000/user/login", {
            usern: username.toLowerCase(),
            passw: password
        })

        if(res.data.user) {
            localStorage.setItem('user', res.data.user.id);
            setLoggedIn(true)
            setUser(res.data.user)
        }
        setUsername("")
        setPassword("")
        closeModal()
    }
    
    const handleCreateAccount = async () => {
        await axios.post("http://localhost:4000/user/create", {
            usern: username.toLowerCase(),
            passw: password
        })
        
        setUsername("")
        setPassword("")
        closeModal()
    }

    const handleLogout = async () => {
        if(localStorage.getItem('user')) localStorage.removeItem('user')
        window.location.reload()
        console.log('here')
    }

    useEffect(() => {
        async function getUser() {
            const res = await axios.get(`http://localhost:4000/user/${localStorage.getItem('user')}`)
            setUser(res.data.user)
        }
        //if user is in localstorage get user data and store it
        if(localStorage.getItem('user')) {
            getUser()
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }, [])

    const displayNavItems = navItems.map((item, i) => (
                                <NavItem title={item} key={i}></NavItem>
                            ))

    return(
        <div className="navBar">

            <div className="roomInfo">
                <div className="roomInfoContent">
                    <h5 style={Styles.colorWhiteMarginZero}>Slack Clone Workshop</h5>
                    { user ? <p className="usernameNav">{user.username}</p> : <p></p>}
                </div>
            </div>

            <div className="divider"></div>

            <div className="navBar-items">
                {displayNavItems}
            </div>

            <div className="navBar-account">
                <div className="account" style={Styles.accountIcons} onClick={openLoginModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                </div>
            </div>


            {/* All modal related */}
            <Modal show={modalOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    { showCreateAccount ? <Modal.Title>Create Account</Modal.Title> : <Modal.Title>Login</Modal.Title> }
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="usernameInput" placeholder="Enter Username" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className="form-group" style={Styles.passwordInputSpacing}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" aria-describedby="passwordInput" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}></input>

                    { showCreateAccount ? <small id="passwordInput" className="form-text text-muted">Password must be atleast 8 characters.</small> : null }
                    
                    {showCreateAccount ? <p className="noAccount-Login" style={Styles.marginTop}>Already have an account? <span className="link" onClick={createAccountSwitch}>Login.</span></p> : 
                    <p className="noAccount-Login" style={Styles.marginTop}>Dont have an account? <span className="link" onClick={createAccountSwitch}>Sign up.</span></p> }
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    
                    {showCreateAccount ? 
                        <Button variant="primary" onClick={handleCreateAccount}>
                            Create
                        </Button>
                    :
                        <Button variant="primary" onClick={handleLogin}>
                            Login
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NavBar