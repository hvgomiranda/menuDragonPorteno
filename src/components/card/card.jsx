import "./card.css";

const Card = ({ item }) => {

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

    const description = descripcion(item);

    return(
        <div className="card">
            <div className="card_row">
                <span className="card_id">{item.ID}.</span>
                <span className="card_title">{item.Nombre}</span>
                <span className="card_price">{precio(item)}</span>
            </div>
            {description && <div className="card_description">{description}</div>}
        </div>
    );
};

export default Card;
