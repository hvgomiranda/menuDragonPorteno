import "./header.css";
import {default as LogoTitulo} from "../../media/logo-dragon-porteno2.svg";

const Header = () => {
    return(
        <img src={LogoTitulo} className="logoTitulo" />
    )
};

export default Header;