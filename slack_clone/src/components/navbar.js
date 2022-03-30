import NavItem from "./navitem"

const NavBar = () => {
    const navItems = ['Home']

    return(
        <div className="navBar">
            {navItems.map((item, i) => {
                return(
                    <NavItem title={item} key={i}></NavItem>
                )
            })}
        </div>
    )
}

export default NavBar