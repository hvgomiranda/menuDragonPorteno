import { useMemo } from "react";
import '../../App.css';
import Section from "../../components/section/section.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import {ReactComponent as Logo} from "../../media/logo.svg";
import useMenuData from "../../dataBase/useMenuData";
import TIPOS from "../../dataBase/categorias";

const MenuPage = () => {

  const { data, loading, error } = useMenuData();

  const itemsPorTipo = useMemo(() => {
    const grouped = {};
    data.forEach(item => {
      (grouped[item.Tipo] ??= []).push(item);
    });
    return grouped;
  }, [data]);

  return (
    <div className="App" style={{backgroundImage: `url($(backGroundImage))`}}>
      <div className='wrapper'>
        <Header/>
        <Logo className='logo'/>
        <div className='seccion'>
          {loading && <p>Cargando menú...</p>}
          {error && <p>No se pudo cargar el menú.</p>}
          {!loading && !error && TIPOS.map(tipo => (
            <Section key={tipo} title={tipo} items={itemsPorTipo[tipo] ?? []}/>
          ))}
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default MenuPage;
