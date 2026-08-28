import { useMemo, useRef } from "react";
import '../../App.css';
import Section from "../../components/section/section.jsx";
import Header from "../../components/header/header.jsx";
import Socials from "../../components/socials/socials.jsx";
import ParallaxBackground from "../../components/parallax-background/ParallaxBackground.jsx";
import Skeleton from "../../components/skeleton/Skeleton.jsx";
import useMenuData from "../../dataBase/useMenuData";
import TIPOS from "../../dataBase/categorias";

const MenuPage = () => {

  const scrollContainerRef = useRef(null);
  const { data, loading, error } = useMenuData();

  const itemsPorTipo = useMemo(() => {
    const grouped = {};
    data.forEach(item => {
      (grouped[item.Tipo] ??= []).push(item);
    });
    return grouped;
  }, [data]);

  return (
    <div className="App">
      <ParallaxBackground scrollContainerRef={scrollContainerRef} speed={0.16} />
      <div className='wrapper' ref={scrollContainerRef}>
        <Header/>
        <Socials/>
        <div className='seccion'>
          {loading && <Skeleton/>}
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
