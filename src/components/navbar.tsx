import NavItem from "./navbar-item"
import "../styles/navbar.scss"

type Navprops ={
    img?: string
}

function Navbar(Props:Navprops){
    return(
        <header>
            <img src="https://music.youtube.com/img/on_platform_logo_dark.svg"/>
            <ul>
                <NavItem type="ativo" icon="fa-solid fa-house" text="Início"/>
                <NavItem icon="fa-solid fa-compass" text="Explorar"/>
                <NavItem icon="fa-solid fa-music" text="Biblioteca"/>
                <NavItem icon="fa-solid fa-record-vinyl" text="Upgrade"/>
                <NavItem type="search" icon="fa-solid fa-magnifying-glass" text="Pesquisar"/>
            </ul>
            <div>
                <i className="fa-brands fa-chromecast"></i>
                <img src={Props.img}/>
            </div>
        </header>
    )
}

export default Navbar