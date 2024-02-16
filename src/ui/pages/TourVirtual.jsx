import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import { useNavigate } from 'react-router-dom';

function TourVirtual() {
  const [nivel, setNivel] = useState(null);
  const [popUpPosition, setPopUpPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const [departamentoname, setDepartamentoname] = useState(null);


  const handleMouseEnter = (area) => {
    setNivel(area.name);
    setPopUpPosition({ x: area.coords[0], y: area.coords[1] }); // Ajusta según tus necesidades
  };

  const handleMouseLeave = () => {
    setNivel(null);
  };

  const handleImageClick = (area) => {
    setNivel(area.name);

    const enlaceNivel = `/nivel/${area.name}`;

    window.location.href = enlaceNivel;
  };

  const URL = "./img/departamentos.png";

  const MAP = {
    name: "my-map",
    areas: [
      { name: "2", shape: "poly", coords: [145,442,  145,470,  350,470,  350,444,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "3", shape: "poly", coords: [145,420,  145,442,  350,442,  350,420,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "4", shape: "poly", coords: [145,395,  145,420,  350,420,  350,397,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "5", shape: "poly", coords: [145,375,  145,397,  350,397,  350,377,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "6", shape: "poly", coords: [145,350,  145,376,  350,376,  350,352,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "7", shape: "poly", coords: [145,328,  145,350,  350,350,  350,329,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "8", shape: "poly", coords: [145,308,  145,328,  350,328,  350,307,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "9", shape: "poly", coords: [145,284,  145,308,  350,308,  350,284,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "10", shape: "poly", coords: [145,262,  145,285,  350,285,  350,262,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "11", shape: "poly", coords: [145,238,  145,262,  350,262,  350,238,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "12", shape: "poly", coords: [145,216,  145,240,  350,240,  350,216,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "13", shape: "poly", coords: [145,194,  145,218,  350,218,  350,194,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "14", shape: "poly", coords: [145,170,  145,195,  350,195,  350,170,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "15", shape: "poly", coords: [145,148,  145,171,  350,171,  350,148,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "16", shape: "poly", coords: [145,124,  145,148,  350,148,  350,124,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "17", shape: "poly", coords: [145,102,  145,124,  350,124,  350,102,], fillColor: "rgba(73, 190, 227, 0.5)" },
      { name: "18", shape: "poly", coords: [145,74,  145,100,  350,100,  350,74,], fillColor: "rgba(73, 190, 227, 0.5)" },

    ]
  };

  const createMapNivelMovil = (habitacion) => {
    const roomMovil = {
      name: "my-nivel-movil",
      areas: [
        { name: "2", shape: "poly", coords: [55,172, 55,182, 140,182, 140,172], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "3", shape: "poly", coords: [55,164, 55,172, 140,172, 140,164], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "4", shape: "poly", coords: [55,155, 55,164, 140,164, 140,155], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "5", shape: "poly", coords: [55,146, 55,156, 140,156, 140,146], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "6", shape: "poly", coords: [55,137, 55,146, 140,146, 140,137], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "7", shape: "poly", coords: [55,128, 55,138, 140,138, 140,128], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "8", shape: "poly", coords: [55,119, 55,129, 140,129, 140,119], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "9", shape: "poly", coords: [55,110, 55,120, 140,120, 140,110], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "10", shape: "poly", coords: [55,101, 55,111, 140,111, 140,101], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "11", shape: "poly", coords: [55,92, 55,102, 140,102, 140,92], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "12", shape: "poly", coords: [55,83, 55,93, 140,93, 140,83], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "13", shape: "poly", coords: [55,74, 55,84, 140,84, 140,74], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "14", shape: "poly", coords: [55,65, 55,75, 140,75, 140,65], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "15", shape: "poly", coords: [55,56, 55,66, 140,66, 140,56], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "16", shape: "poly", coords: [55,47, 55,57, 140,57, 140,47], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "17", shape: "poly", coords: [55,38, 55,48, 140,48, 140,38], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "18", shape: "poly", coords: [55,29, 55,39, 140,39, 140,29], fillColor: "rgba(73, 190, 227, 0.5)" },

      ]
    };

    roomMovil.areas.forEach((area) => {
      if (area.name === habitacion) {
        area.preFillColor = "rgba(73, 190, 227, 0.4)";
      }
    });

    return roomMovil;
  };

  const mapNivelMovil = createMapNivelMovil(departamentoname);


  return (
    <>
      <section className="w-full mt-32 md:mt-28 flex flex-col justify-center items-center container mx-auto 2xl:px-10 3xl:px-96" style={{ position: 'relative' }}>
        <div className='w-full px-5 md:px-20 mb-12 md:mb-10'>
          <h1 className='tertiary text-black text-[30px] md:text-[90px] tracking-wider'>TOUR VIRTUAL:</h1>
          <p className='primary text-[14px] md:text-[20px] mt-4 md:mt-12 md:ml-2'>Elige el piso que prefieras y posteriormente el espacio en el que estés interesado.</p>
        </div>
        <div className='md:ml-24'>
          <div className='hidden md:block'>
            <ImageMapper
            src={URL}
            map={MAP}
            width={900}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleImageClick}
          />
          {nivel && (
              <div
                style={{
                  position: 'absolute',
                  top: popUpPosition.y + 'px',
                  padding: '8px',
                  borderRadius: '4px',
                  zIndex: 999,
                }}
                className={`md:left-10 2xl:left-40 3xl:left-80`}
              >
                <h1 className='tertiary md:text-[30px] 2xl:text-[40px] 3xl:text-[50px] mt-48'>TORRE ITZ<span className='letter-comma2'>E</span><span className='block text-lg ml-2'>NIVEL {nivel}</span></h1>
              </div>
          )}
               <div
                style={{
                  position: 'absolute',
                  padding: '8px',
                  borderRadius: '4px',
                  zIndex: 999,
                }}
                className={`md:right-0 2xl:right-20 3xl:right-60 md:top-10 2xl:-top-20`}
              >
                <h1 className='tertiary md:text-[20px] 2xl:text-[40px] 3xl:text-[50px] mt-48'>TORRE SAASIL<span className='block primary text-lg ml-2'>PRÓXIMAMENTE</span></h1>
              </div>
          </div>
          <div className='block md:hidden'>
            <ImageMapper
            src={URL}
            map={mapNivelMovil}
            width={350}
            onClick={handleImageClick}
          />
          </div>
        </div>
      </section>
    {/* <main class="h-screen w-full flex flex-col justify-center items-center bg-black">
        <h1 className='secondary text-[#b48c51] text-[40px] md:text-[80px]'>EN CONSTRUCCIÓN</h1>
        <a className='secondary' href="/">
        <span class="relative border rounded-2xl block px-8 py-3 bg-[#b48c51] mt-4 md:mt-6 transition-transform transform hover:scale-95 text-[18px] md:text-[20px]">
            Volver al Inicio
        </span>
        </a>
    </main> */}
    </>
  );
}

export default TourVirtual;
