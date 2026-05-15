import "./header.css";
import {default as LogoTitulo} from "../../media/logo-dragon-porteno.svg";

const Header = () => {
    return(
        <img src={LogoTitulo} className="logoTitulo" alt="Dragón Porteño" />
    )
};

export default Header;
