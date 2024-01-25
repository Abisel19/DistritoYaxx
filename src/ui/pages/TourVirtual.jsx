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
    ]
  };

  const createMapNivelMovil = (habitacion) => {
    const roomMovil = {
      name: "my-nivel-movil",
      areas: [
        { name: "2", shape: "poly", coords: [55,172, 55,182, 140,182, 140,172], fillColor: "rgba(73, 190, 227, 0.5)" },
        { name: "3", shape: "poly", coords: [55,164, 55,172, 140,172, 140,164], fillColor: "rgba(73, 190, 227, 0.5)" },
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
      <section className="w-full mt-32 md:mt-52 flex flex-col justify-center items-center" style={{ position: 'relative' }}>
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
                  left: 140 + 'px',
                  top: popUpPosition.y + 'px',
                  padding: '8px',
                  borderRadius: '4px',
                  zIndex: 999,
                }}
              >
                <h1 className='tertiary text-5xl mt-32'>TORRE ITZ<span className='letter-comma'>E</span><span className='block text-lg ml-2'>NIVEL {nivel}</span></h1>
              </div>
          )}
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
    </>
  );
}

export default TourVirtual;
