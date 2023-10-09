import "./card.css";

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

    return(
        <div className="card" onClick={onClick}>
            <div className="card-front">
                <div className="card_title">{item.ID}. {item.Nombre}</div>
                <div className="card_price">{precio(item)}</div>
            </div>
            <div className="card-back">
                <div className="card_description">{descripcion(item)}</div>
            </div>
        </div>
    );
};

export default Card;