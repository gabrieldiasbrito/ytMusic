interface Props {
    text?: string
    icon?: string
    type?: string
}

const NavItem = ({icon, text, type}: Props) => {
    return(
        <button className={type}><i className={icon}></i>{text}</button>
    )
}

export default NavItem