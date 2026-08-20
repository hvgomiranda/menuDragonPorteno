import { useMemo } from "react";
import '../../App.css';
import Section from "../../components/section/section.jsx";
import Header from "../../components/header/header.jsx";
import Socials from "../../components/socials/socials.jsx";
import SilkBackground from "../../components/silk-background/SilkBackground.jsx";
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
      <SilkBackground speed={2} color="#8d2a33" noiseIntensity={0}/>
      <div className='wrapper'>
        <Header/>
        <Socials/>
        <div className='seccion'>
          {loading && <p>Cargando menú...</p>}
          {error && <p>No se pudo cargar el menú.</p>}
          {!loading && !error && TIPOS.map(tipo => (
            <Section key={tipo} title={tipo} items={itemsPorTipo[tipo] ?? []}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
