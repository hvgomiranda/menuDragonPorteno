import "./parallax-background.css";
import { default as DragonMark } from "../../media/logo.svg";

const ParallaxBackground = () => {
    return (
        <div className="parallax-background">
            <img src={DragonMark} className="parallax-background__logo" alt="" aria-hidden="true" />
        </div>
    );
};

export default ParallaxBackground;
