import "./flippable-card.css";
import Card from "../card/card.jsx";

const FlippableCard = ({ item }) => {
    return(
        <div className="flippable-card-container">
            <Card item={item}/>
        </div>
    );
};

export default FlippableCard;
