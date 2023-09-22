import "./flippable-card.css";
import Card from "../card/card.jsx";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const FlippableCard = ({ item }) => {

    const[showFront, setShowFront] = useState(true);
    
    return(
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames="flip"
            >
                <Card item={item} onClick={() =>{
                    setShowFront((value) => !value);
                }}/>
            </CSSTransition>
        </div>
    );
};

export default FlippableCard;