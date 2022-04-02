import { useState } from "react"
import NavItem from "./navitem"
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

const NavBar = () => {
    const navItems = ['Home', 'Login']
    const [loggedIn, setLoggedIn] = useState(false)
    const [modalOpen, setOpenModal] = useState(false)
    const [showCreateAccount, SetShowCreateAccount] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const Styles = {
        icons: {
            color: 'white',
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

    const handleLogin = () => {
        closeModal()
        //Login
        setUsername("")
        setPassword("")
    }

    const handleCreateAccount = async () => {
        const res = await axios.post("http://localhost:4000/user/create", {
            usern: username,
            passw: password
        })
        console.log(res)
        setUsername("")
        setPassword("")
        closeModal()
    }

    return(
        <div className="navBar">
            <div className="navBar-items">
                {navItems.map((item, i) => (
                    <NavItem title={item} key={i}></NavItem>
                ))}
            </div>

            <div className="navBar-account">
                <div className="account" style={Styles.accountIcons} onClick={openLoginModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                </div>

                <div className="settingsCog" style={Styles.accountIcons}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </div>
            </div>

            <Modal show={modalOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    { showCreateAccount ? <Modal.Title>Create Account</Modal.Title> : <Modal.Title>Login</Modal.Title> }
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="usernameInput" placeholder="Enter Username" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className="form-group" style={Styles.passwordInputSpacing}>
                    <label for="password">Password</label>
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