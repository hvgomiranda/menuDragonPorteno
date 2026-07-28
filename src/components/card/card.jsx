import "./card.css";
import { BsInfoCircle } from "react-icons/bs";

const Card = ({ item, onClick }) => {

    function descripcion(item){
        let retorno;
        if(item.Aclaración && item.Ingredientes){
            retorno = `${item.Ingredientes} - ${item.Aclaración}`;
        } else if(item.Aclaración && !item.Ingredientes){
            retorno = item.Aclaración;
        } else if(!item.Aclaración && item.Ingredientes){
            retorno = item.Ingredientes;
        }

        return retorno;
    }

    function precio(item){
        let retorno;
        if(item.Tipo === "Vinos"){
            if(item["Precio 350"]) retorno = `${item["Precio 350"]} 350ml | ${item.Precio} 750ml`
            else retorno = `${item.Precio} 750ml`
        }
        else retorno = item.Precio; 

        return retorno;
    }

    const hasDetails = item.Ingredientes || Object.keys(item).some((key) => key.startsWith("Aclaraci") && item[key]);

    return(
        <div className="card" onClick={onClick}>
            <div className="card-front">
                {hasDetails && <BsInfoCircle className="card_info_icon" />}
                <div className="card_title">
                    <span className="card_id">{item.ID}.</span> {item.Nombre}
                </div>
                <div className="card_price">{precio(item)}</div>
            </div>
            <div className="card-back">
                <div className="card_description">{descripcion(item)}</div>
            </div>
        </div>
    );
};

export default Card;
