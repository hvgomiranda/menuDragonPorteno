import './App.css';
import Section from "./components/section/section.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as Logo} from "./media/logo.svg";


function App() {

  const tipos = [
    "Entrada", "Sopa", "Chao-Fan (arroz)", "Chao-Mien (tallarines)", "Mi-Fen (fideos finos de arroz)",
    "Pan-Tiao (fideos anchos de arroz)", "Arroz con salsa de soja", "Chop-Suey", "Pollo", "Carne", "Cerdo",
    "Tofu", "Mariscos", "Especialidades", "Fideos con sopa", "Arroz con salsa especial",
    "Za-Mien (Fideos crocantes con salsa de soja)", "Sushi (solo sábados y domingos)", "Postres",
    "Bebidas", "Cerveza", "Café e infusiones", "Vinos tintos", "Vinos blancos"
  ];
  const tiposVinos = [

  ]

  return (
    <div className="App" style={{backgroundImage: `url($(backGroundImage))`}}>
      <div className='wrapper'>
        <Header/>
        <Logo className='logo'/>
        <div className='seccion'>
          {tipos.map((tipo, index) => (
            <Section key={index} title={tipo}/>
          ))}
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
