import "./section.css";
import Accordion from 'react-bootstrap/Accordion';
import data from "../../dataBase/menuDragonPorteno.json";
import FlippableCard from "../flippable-card/flippable-card";
import {ReactComponent as Logo} from "../../media/logo.svg";

const Section = ({title}) => {

    const filteredData = data.filter(item => item.Tipo === title);
    
    return(
        <Accordion className="section">
                <Accordion.Item eventKey="0" className="section_item">
                    <Accordion.Header className="section_title">{title}</Accordion.Header>
                    <div style={{backgroundImage: `url(${Logo}))`}}>
                        
                    </div>
                    <Accordion.Body className="section_body">
                        {filteredData.map(item => (
                            <FlippableCard key={item.ID} item={item} />
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>
    );
};

export default Section;