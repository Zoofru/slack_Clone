import { Link } from 'react-router-dom'

const NavItem = props => {
    return (
        <div>
            <Link to={`/${props.linkTo}`}>
                <h3 className="navItem">{props.title}</h3>
            </Link>
        </div>
    )
}

export default NavItem