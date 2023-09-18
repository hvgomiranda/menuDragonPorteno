import "./footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";

const Footer = () => {
    return(
        <div className="footer">
            <h3>Horarios de atención</h3>
            <div className="footer_section">
                <p>Lunes de 17 a 23</p>
                <p>De miércoles a domingo</p>
                <p>de 12 a 16 y de 19 a 23</p>
                <p>Martes cerrado</p>
            </div>
            <div className="footer_section">
                <p>Arribeños 2137, Barrio Chino</p>
                <p>Clave de wifi: dragon2137</p>
            </div>
            <IconContext.Provider value={{ className: "iconos", size: 35}}>
            <>
                <a href="https://www.instagram.com/dragonp/" target="_blank" rel="noreferrer">
                    <AiOutlineInstagram/> 
                </a>
            </>
            </IconContext.Provider>
        </div>
    );
};

export default Footer;