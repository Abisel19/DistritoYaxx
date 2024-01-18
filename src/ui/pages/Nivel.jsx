import React, { useState, useEffect } from 'react';
import ImageMapper from 'react-img-mapper';
import { useParams } from 'react-router-dom';

function Nivel() {
  const { nivelUrl, departamentoUrl} = useParams();
  const [dynamicImageSrc, setDynamicImageSrc] = useState(null);
  const [departamentoimg, setDepartamentoimg] = useState(null);
  const [departamentoicons, setDepartamentoicons] = useState(null);
  const [departamentoname, setDepartamentoname] = useState(null);
  const [nivel, setNivel] = useState(null);
  const [popUpPosition, setPopUpPosition] = useState({ x: 0, y: 0 });


    useEffect(() => {
      // Construir la URL completa según el nivel proporcionado
      const dynamicImageURL = `/img/nivel-${nivelUrl}.png`;
      const departamentoimg=`/img/departamento-${departamentoUrl}.png`
      const departamentoicons=`/img/icons-${departamentoUrl}.png`

      // Cargar la imagen dinámica
      const image = new Image();
      image.src = dynamicImageURL;
      image.onload = () => {
        setDynamicImageSrc(dynamicImageURL);
      };
       setDepartamentoimg(departamentoimg);
       setDepartamentoicons(departamentoicons);
       setDepartamentoname(departamentoUrl);


    }, [nivelUrl, departamentoUrl]);  

    const handleMouseEnter = (area) => {
      setNivel(area.name);
      setPopUpPosition({ x: area.coords[0], y: area.coords[1] }); // Ajusta según tus necesidades
    };
  
    const handleMouseLeave = () => {
      setNivel(null);
    };

    const load = () => {
        // Función de carga si es necesaria
      };

    const URL = "/img/pisos.png";

    const MAP = {
      name: "my-map",
      areas: [
        { name: "1", shape: "poly", coords: [54,400, 54,375, 185,375, 185,400, ], fillColor: "rgba(0, 0, 0, 0.6)" },
        { name: "2", shape: "poly", coords: [54,376, 54,351, 185,351, 185,376, ], preFillColor: "black", fillColor: "rgba(0, 0, 0, 0.6)" },
      ]
    };

    
    const NIVEL = {
      name: "my-nivel",
      areas: [
        { name: "1", shape: "poly", coords: [237, 485, 380, 478, 450, 492, 450, 505, 380, 500, 235, 505], fillColor: "rgba(171, 186, 109, 0.6)" },
      ]
    };

  return (
    <>

    <section>
        <div className='w-full flex px-5 md:pr-16 2xl:pr-32 md:pl-0 md:pt-48 md:pb-20'>
            <div className='w-1/2 flex items-center'>
                <div className='w-full'>
                    <div className='w-full'>
                      <div className='bg-black py-6 rounded-r-3xl'>
                        <h1 className='tertiary text-white text-2xl md:text-[80px] tracking-wider md:pl-36'>TORRE ITZE</h1>
                      </div>
                    </div>
                    <div className='md:pl-36'>
                    <h2 className='primary text-gl md:text-[24px] mt-10 ml-2'>Elige el piso que prefieras y posteriormente el <span className='hidden md:block'></span>espacio en el que estés interesado.</h2>
                    <div className='cuadro py-4 mt-5'>
                        <p className='text-white primary ml-12 text-sm md:text-[24px] -mt-1'>EXPLORA TU NUEVO HOGAR</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex justify-center'>
                <div>
                    <ImageMapper
                    className='w-10'
                    src={URL}
                    map={MAP}
                    width={240}
                    onLoad={load}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    />
                  {nivel && (
                    <div
                      style={{
                        position: 'absolute',
                        right: 200 + 'px',
                        top: popUpPosition.y + 'px',
                        padding: '8px',
                        borderRadius: '4px',
                        zIndex: 999,
                      }}
                    >
                    <div className='cuadro2 py-4 mt-36'>
                        <p className='text-white primary ml-20 text-sm md:text-[24px] -m-1'>NIVEL {nivel}</p>
                    </div>
                    </div>
                  )}
                </div>
            </div>
        </div>
    </section>

    <section className='bg-black py-1'></section>

    <section>
        <div className='w-full flex px-5 md:px-16 py-20'>
        <div className='w-1/2 flex md:pl-20 items-center'>
                <div className=''>
                    <h3 className='tertiary text-2xl md:text-[80px] leading-[80px] tracking-wider'>VISTA<span className='md:block'></span> GENERAL</h3>
                    <p className='primary text-2xl md:text-[60px] mt-8'>DEL PROYECTO</p>
                    <h4 className='primary text-gl md:text-[24px] mt-8 ml-2'>Elige el modelo de departamento que <span className='hidden md:block'></span>quieras explorar.</h4>
                </div>
            </div>
            <div className='w-1/2 flex justify-center'>
                <ImageMapper
                  src={dynamicImageSrc}
                  map={NIVEL}
                  width={480}
                  alt={`Nivel ${nivelUrl}`}
                  onLoad={load}
                />
            </div>
        </div>
    </section>

    <section className='bg-black py-1'></section>

    <section>
        <div className='w-full flex px-5 md:pl-16 md:pr-0 py-20'>
        <div className='w-1/2 flex md:pl-20 items-center'>
                <div className=''>
                   <img className='w-[500px]' src={departamentoimg} alt="" />
                </div>
            </div>
            <div className='w-1/2 flex ml-14'>
              <div className='w-full'>
                <div className='bg-black py-0 rounded-l-3xl'>
                  <p className='text-white uppercase tertiary ml-4 text-[70px] tracking-wider'>{departamentoname}</p>
                </div>
                <div className='mt-8 ml-2'>
                  <p className='primary text-base md:text-[24px]'>BARRA DESAYUNADORA</p>
                  <p className='primary text-base md:text-[24px] mt-2'>COCINA EQUIPADA</p>
                  <p className='primary text-base md:text-[24px] mt-2'>01 BAÑO</p>
                  <p className='primary text-base md:text-[24px] mt-2'>BALCÓN</p>
                  <p className='primary text-base md:text-[24px] mt-2'>01 CAJÓN DE ESTACIONAMIENTO</p>
                  <div className='flex mr-20 mt-6'>
                    <img className="w-[400px]" src={departamentoicons} alt="" />
                  </div>
                  <div className='flex mt-4'>
                      <div className='w-3/12'>
                      <p className='primary text-right text-base 2xl:text-lg'>INTERIOR: 39.95 m2</p>
                      <p className='primary text-right text-base 2xl:text-lg mt-1 md:mt-1'>EXTERIOR: 7.85 m2</p>
                      <p className='sextary text-right text-base 2xl:text-lg mt-1 md:mt-1'>TOTAL: 47.80 m2</p>
                      </div>
                      <div className='w-1/12 flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="103.481" viewBox="0 0 3 103.481">
                          <path id="Trazado_644" data-name="Trazado 644" d="M-7421,4973.607v103.481" transform="translate(7422.5 -4973.607)" fill="none" stroke="#000" stroke-width="3"/>
                        </svg>
                      </div>
                      <div className='w-4/12'>
                      <p className='primary text-left text-base 2xl:text-lg'>INTERIOR: 430.02 sqft</p>
                      <p className='primary text-left text-base 2xl:text-lg mt-1 md:mt-1'>EXTERIOR: 84.50 sqft</p>
                      <p className='sextary text-left text-base 2xl:text-lg mt-1 md:mt-1'>TOTAL: 514.52 sqft</p>
                      </div>
                      <div className='w-4/12'>

                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>

    </>
  );
}

export default Nivel;
