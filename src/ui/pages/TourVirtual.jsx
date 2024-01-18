import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import { useNavigate } from 'react-router-dom';

function TourVirtual() {
  const [nivel, setNivel] = useState(null);
  const [popUpPosition, setPopUpPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseEnter = (area) => {
    setNivel(area.name);
    setPopUpPosition({ x: area.coords[0], y: area.coords[1] }); // Ajusta según tus necesidades
  };

  const handleMouseLeave = () => {
    setNivel(null);
  };

  const handleImageClick = () => {


    const enlaceNivel = `/nivel/2/estudio`;

    navigate(enlaceNivel);
  };

  const URL = "./img/departamentos.png";

  const MAP = {
    name: "my-map",
    areas: [
      { name: "1", shape: "poly", coords: [237, 485, 380, 478, 450, 492, 450, 505, 380, 500, 235, 505], fillColor: "rgba(171, 186, 109, 0.6)" },
      { name: "2", shape: "poly", coords: [237, 465, 380, 458, 450, 475, 450, 492, 380, 480, 235, 485], fillColor: "rgba(171, 186, 109, 0.6)" },
      { name: "3", shape: "poly", coords: [237, 445, 380, 438, 450, 455, 450, 474, 380, 460, 235, 465], fillColor: "rgba(171, 186, 109, 0.6)" },
    ]
  };

  return (
    <>
      <section className="w-full mt-32 mb-12 flex flex-col justify-center items-center" style={{ position: 'relative' }}>
        <ImageMapper
          className='w-10'
          src={URL}
          map={MAP}
          width={800}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleImageClick}
        />
        {nivel && (
          <div
            style={{
              position: 'absolute',
              left: 280 + 'px',
              top: popUpPosition.y + 'px',
              padding: '8px',
              borderRadius: '4px',
              zIndex: 999,
            }}
          >
            <h1 className='tertiary text-5xl -mt-8'>TORRE ITZE<span className='block text-lg ml-2'>NIVEL {nivel}</span></h1>
          </div>
        )}
      </section>
    </>
  );
}

export default TourVirtual;
