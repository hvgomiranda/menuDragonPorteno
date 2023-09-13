import "./section.css";
import Accordion from 'react-bootstrap/Accordion';
import data from "../../dataBase/menuDragonPorteno.json";
import {ReactComponent as Logo} from "../../media/logo.svg";

const Section = ({title}) => {

    const filteredData = data.filter(item => item.Tipo === title);

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
    
    return(
        <Accordion className="section">
                <Accordion.Item eventKey="0" className="section_item">
                    <Accordion.Header className="section_title">{title}</Accordion.Header>
                    <div style={{backgroundImage: `url(${Logo}))`}}>
                        
                    </div>
                    <Accordion.Body className="section_body">
                        {filteredData.map(item => (
                            <div className="section_card" key={item.ID}>
                                <div className="section_card_title">{item.ID}. {item.Nombre}</div>
                                <div className="section_card_description">{descripcion(item)}</div>
                                <div className="section_card_price">{item.Precio}</div>
                            </div>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>
    );
};

export default Section;