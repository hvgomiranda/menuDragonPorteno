import './App.css';
import Section from "./components/section/section.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Section title={"Entrada"}/>
      <Section title={"Sopa"}/>
      <Section title={"Chao-Fan (arroz)"}/>
      <Section title={"Chao-Mien (tallarines)"}/>
      <Section title={"Mi-Fen (fideos finos de arroz)"}/>
      <Section title={"Pan-Tiao (fideos anchos de arroz)"}/>
      <Section title={"Arroz con salsa de soja"}/>
      <Section title={"Chop-Suey"}/>
      <Section title={"Pollo"}/>
      <Section title={"Carne"}/>
      <Section title={"Cerdo"}/>  
      <Section title={"Tofu"}/>
      <Section title={"Mariscos"}/>
      <Section title={"Especialidades"}/>
      <Section title={"Fideos con sopa"}/>
      <Section title={"Arroz con salsa especial"}/>
      <Section title={"Za-Mien (Fideos crocantes con salsa de soja)"}/>
      <Section title={"Sushi (solo sábados y domingos)"}/>
      <Section title={"Postres"}/>
      <Section title={"Bebidas"}/>
      <Section title={"Cerveza"}/>
      <Section title={"Café y Té"}/>
      <Footer/>
    </div>
  );
}

export default App;
