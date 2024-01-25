import React, { useState, useEffect } from 'react';
import ImageMapper from 'react-img-mapper';
import { useParams } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


function Nivel() {
  const { nivelUrl} = useParams();
  const [departamentoUrl, setDepartamentoUrl] = useState(null);
  const [dynamicImageSrc, setDynamicImageSrc] = useState(null);
  const [departamentoimg, setDepartamentoimg] = useState(null);
  const [departamentoicons, setDepartamentoicons] = useState(null);
  const [departamentoname, setDepartamentoname] = useState(null);
  const [departamentoGallery, setDepartamentoGallery] = useState(null);
  const [nivel, setNivel] = useState(null);
  const [popUpPosition, setPopUpPosition] = useState({ x: 0, y: 0 });
  const [showNivel, setShowNivel] = useState(true);
  const [seccionVisible, setSeccionVisible] = useState(false);


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

       if (departamentoUrl === 'recamara') {
        setDepartamentoname('1 Recámara');
      } else if (departamentoUrl === 'lock-off') {
        setDepartamentoname('Lock Off');
      } else if (departamentoUrl === 'lock-off-a') {
        setDepartamentoname('Lock Off A');
      } else {
        setDepartamentoname(departamentoUrl);
      }

    }, [nivelUrl, departamentoUrl]);  

    const createMap = (nivel) => {
      const map = {
        name: "my-map",
        areas: [
          { name: "2", shape: "poly", coords: [54,400, 54,375, 185,375, 185,400], fillColor: "rgba(0, 0, 0, 0.6)" },
          { name: "3", shape: "poly", coords: [54,376, 54,353, 185,353, 185,376], fillColor: "rgba(0, 0, 0, 0.6)" },
          { name: "4", shape: "poly", coords: [54,354, 54,331, 185,331, 185,354], fillColor: "rgba(0, 0, 0, 0.6)" },
          { name: "5", shape: "poly", coords: [54,332, 54,309, 185,309, 185,332], fillColor: "rgba(0, 0, 0, 0.6)" },
          { name: "6", shape: "poly", coords: [54,310, 54,289, 185,289, 185,310], fillColor: "rgba(0, 0, 0, 0.6)" },
          { name: "7", shape: "poly", coords: [54,289, 54,266, 185,266, 185,289], fillColor: "rgba(0, 0, 0, 0.6)" },
          { name: "8", shape: "poly", coords: [54,266, 54,244, 185,244, 185,266], fillColor: "rgba(0, 0, 0, 0.6)" },
          { name: "9", shape: "poly", coords: [54,244, 54,222, 185,222, 185,244], fillColor: "rgba(0, 0, 0, 0.6)" },
          { name: "10", shape: "poly", coords: [54,222, 54,200, 185,200, 185,222], fillColor: "rgba(0, 0, 0, 0.6)" },
        ],
      };
  
      const areaToUpdate = map.areas.find((area) => area.name === nivel);

      if (areaToUpdate) {
        areaToUpdate.preFillColor = "black";
      }
  
      return map;
    };

    const handleMouseEnter = (area) => {
      setShowNivel(false);
      setNivel(area.name);
      setPopUpPosition({ x: area.coords[0], y: area.coords[1] }); // Ajusta según tus necesidades
    };
  
    const handleMouseLeave = () => {
      setShowNivel(true);
      setNivel(null);
    };

    const load = () => {
        // Función de carga si es necesaria
      };

    const URL = "/img/pisos.png";

    const createMapNivel = (habitacion) => {
      const room = {
        name: "my-nivel",
        areas: [
          { name: "estudio", shape: "poly", coords: [187,85,  187,192,  240,192,  240,85,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "estudio", shape: "poly", coords: [240,85,  240,192,  292,192,  292,85,], fillColor: "rgba(73, 190, 227, 0.5)" },  
          { name: "estudio", shape: "poly", coords: [187,282,  187,390,  240,390,  240,282,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "estudio", shape: "poly", coords: [240,282,  240,390,  292,390,  292,282,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "Lock Off", shape: "poly", coords: [70,280,  75,395,  170,390,  170,280,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "Lock Off", shape: "poly", coords: [74,80,  75,195,  170,195,  170,85,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "Lock Off", shape: "poly", coords: [310,85,  310,195,  405,195,  405,80,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "Lock Off", shape: "poly", coords: [310,280,  310,390,  405,395,  408,280,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "1 recámara", shape: "poly", coords: [79,195,  79,280,  170,280,  170,195,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "1 recámara", shape: "poly", coords: [310,195,  310,280,  400,280,  400,195,], fillColor: "rgba(73, 190, 227, 0.5)" },        
        ]
      };
  
      room.areas.forEach((area) => {
        if (area.name === habitacion) {
          area.preFillColor = "rgba(73, 190, 227, 0.4)";
        }
      });
  
      return room;
    };

    const createMapNivelMovil = (habitacion) => {
      const roomMovil = {
        name: "my-nivel-movil",
        areas: [
          { name: "estudio", shape: "poly", coords: [138,62,  138,140,  174,140,  174,62,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "estudio", shape: "poly", coords: [174,62,  174,140,  212,140,  212,62,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "estudio", shape: "poly", coords: [138,205,  138,284,  174,284,  174,205,], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "estudio", shape: "poly", coords: [174,205,  174,284,  212,284,  212,205,], fillColor: "rgba(73, 190, 227, 0.5)" },

          { name: "Lock Off", shape: "poly", coords: [52,58, 52,143, 125,143, 125,62], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "Lock Off", shape: "poly", coords: [225,62, 225,143, 300,143, 300,58], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "Lock Off", shape: "poly", coords: [225,204, 225,285, 300,288, 300,204], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "Lock Off", shape: "poly", coords: [52,204, 52,288, 125,285, 125,204], fillColor: "rgba(73, 190, 227, 0.5)" },

          { name: "1 recámara", shape: "poly", coords: [58,143, 58,205, 125,205, 125,143], fillColor: "rgba(73, 190, 227, 0.5)" },
          { name: "1 recámara", shape: "poly", coords: [225,143, 225,205, 290,205, 290,143], fillColor: "rgba(73, 190, 227, 0.5)" },

        ]
      };
  
      roomMovil.areas.forEach((area) => {
        if (area.name === habitacion) {
          area.preFillColor = "rgba(73, 190, 227, 0.4)";
        }
      });
  
      return roomMovil;
    };

    const formatNameForURL = (name) => {
      return name.replace(/\s+/g, '-').toLowerCase();
    };

    const handleRoomClic = (area, index, event) =>{  

      setDepartamentoUrl(area.name);

      const enlaceNivel = `#room`;

      window.location.href = enlaceNivel;

    }

    const handleHover = () =>{
    };

    const handleNivelClic = (area, index, event) =>{  

      const enlaceNivel = `/nivel/${area.name}/#nivel`;

      window.location.href = enlaceNivel;

    }

    useEffect(() => {
      if (departamentoname === 'Lock Off') {
        setDepartamentoGallery('lock-off');
      }else if (departamentoname === '1 recámara') {
        setDepartamentoGallery('recamara');
      }else if (departamentoname === 'Lock Off A') {
        setDepartamentoGallery('lock-off-a');
      } else {
        setDepartamentoGallery(departamentoname);
      }
    }, [departamentoname]); 

    const images = [
      { original: `/img/${departamentoGallery}/${departamentoGallery}-1.jpg`, thumbnail: `/img/${departamentoGallery}/${departamentoGallery}-1.jpg` },
      { original: `/img/${departamentoGallery}/${departamentoGallery}-2.jpg`, thumbnail: `/img/${departamentoGallery}/${departamentoGallery}-2.jpg` },
      { original: `/img/${departamentoGallery}/${departamentoGallery}-3.jpg`, thumbnail: `/img/${departamentoGallery}/${departamentoGallery}-3.jpg` },
    ];

    const mapConfig = createMap(nivelUrl);

    const mapNivel = createMapNivel(departamentoname);

    console.log(departamentoname);

    const mapNivelMovil = createMapNivelMovil(departamentoname);

    const initialy = mapConfig.areas[0].coords[1];

    const mostrarSeccion = () => {
      setSeccionVisible(true);
    };
  
    const cerrarSeccion = () => {
      setSeccionVisible(false);
    };

  return (
    <>
    {/* <section>
        <div className='w-full flex px-5 md:pr-16 2xl:pr-32 md:pl-0 md:pt-48 md:pb-56'>
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
                      map={mapConfig}
                      width={240}
                      onLoad={load}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleNivelClic}
                    />
                    {showNivel && (
                    <div
                      id= "nivel"
                      style={{
                        position: 'absolute',
                        right: 200 + 'px',
                        top: initialy.y + 'px',
                        padding: '8px',
                        borderRadius: '4px',
                        zIndex: 999,
                      }}
                    >
                      <div className='cuadro2 py-4 -mt-[65px]'>
                          <p className='text-white primary ml-20 text-sm md:text-[24px] -m-1'>NIVEL {nivelUrl}</p>
                      </div>
                    </div>
                    )}
                    
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
    </section> */}

    <section id="nivel" className='bg-black py-1'></section>

    <section>
        <div className='w-full md:flex px-0 md:px-16 py-10 mt-8 md:py-36'>
          <div className='w-full md:w-5/12 md:flex md:pl-20 items-center'>
                <div className='w-full'>
                    <p className='sextary text-[15px] text-center md:text-left md:text-2xl md:text-[25px] mt-3 md:mt-0 md:ml-2'>NIVEL {nivelUrl}</p>
                    <h3 className='tertiary text-center md:text-left text-[50px] md:text-[80px] leading-[55px] md:leading-[80px] tracking-wider mt-0 md:mt-0'>VISTA<span className='block'></span> GENERAL</h3>
                    <p className='primary text-center md:text-left text-2xl md:text-[60px] mt-3 md:mt-8'>DEL PROYECTO</p>
                    <h4 className='primary text-center md:text-left text-[18px] md:text-[24px] mt-3 md:mt-8 md:ml-2'>Elige el modelo de departamento<span className='block md:hidden'></span> que <span className='hidden md:block'></span>quieras explorar.</h4>
                </div>
          </div>
          <div className='w-full md:w-7/12 hidden md:flex justify-center'>
                <ImageMapper
                  src={dynamicImageSrc}
                  map={mapNivel}
                  width={480}
                  alt={`Nivel ${nivelUrl}`}
                  onLoad={load}
                  onMouseEnter={handleHover}
                  onClick={handleRoomClic}
                />
          </div>
          <div className='w-full flex md:hidden justify-center'>
                <ImageMapper
                  src={dynamicImageSrc}
                  map={mapNivelMovil}
                  width={350}
                  alt={`Nivel ${nivelUrl}`}
                  onLoad={load}
                  onMouseEnter={handleHover}
                  onClick={handleRoomClic}
                />
          </div>
        </div>
    </section>

    <section id="room" className='bg-black py-1'></section>

    <section>
    {departamentoname !== null && (

        <div className='w-full md:flex px-0 md:pl-16 md:pr-0 py-10 md:py-36'>
            <div className='w-full md:w-1/2 flex pl-10 md:pl-20 items-center pb-8'>
                <div className='w-full'>
                <button className='Poppins text-white md:text-[16px] bg-black py-2 px-5 rounded-3xl	transition-transform transform hover:scale-95' onClick={mostrarSeccion}>Galería</button>
                   <img className='w-[300px] md:w-[500px]' src={departamentoimg} alt="" />
                </div>
            </div>
            <div className='w-full md:w-1/2 md:flex md:ml-14 pl-2'>
              <div className='w-full'>
                <div className='bg-black py-0 rounded-l-3xl'>
                  <p className='text-white uppercase tertiary ml-4 text-[40px] md:text-[70px] tracking-wider'>{departamentoname}</p>
                </div>
                <div className='mt-8 ml-2'>

                {departamentoname === 'estudio' && (
                  <div>
                    <p className='primary text-base md:text-[24px]'>BARRA DESAYUNADORA</p>
                    <p className='primary text-base md:text-[24px] mt-2'>COCINA EQUIPADA</p>
                    <p className='primary text-base md:text-[24px] mt-2'>01 BAÑO</p>
                    <p className='primary text-base md:text-[24px] mt-2'>BALCÓN</p>
                    <p className='primary text-base md:text-[24px] mt-2'>01 CAJÓN DE ESTACIONAMIENTO</p>
                  </div>
                )}

                {departamentoname === '1 recámara' && (
                  <div>
                    <p className='primary text-base md:text-[22px]'>SALA - COMEDOR</p>
                    <p className='primary text-base md:text-[22px] mt-2'>COCINA EQUIPADA</p>
                    <p className='primary text-base md:text-[22px] mt-2'>ÁREA DE LAVADO</p>
                    <p className='primary text-base md:text-[22px] mt-2'>01 RECÁMARAS</p>
                    <p className='primary text-base md:text-[22px] mt-2'>1.5 BAÑOS</p>
                    <p className='primary text-base md:text-[22px] mt-2'>BALCÓN</p>
                    <p className='primary text-base md:text-[22px] mt-2'>01 CAJÓN DE ESTACIONAMIENTO</p>

                  </div>
                )}

                {departamentoname === 'Lock Off' && (
                  <div>
                    <p className='primary text-base md:text-[22px]'>SALA - COMEDOR</p>
                    <p className='primary text-base md:text-[22px] mt-2'>COCINA EQUIPADA</p>
                    <p className='primary text-base md:text-[22px] mt-2'>ÁREA DE LAVADO</p>
                    <p className='primary text-base md:text-[22px] mt-2'>02 RECÁMARAS</p>
                    <p className='primary text-base md:text-[22px] mt-2'>2.5 BAÑOS</p>
                    <p className='primary text-base md:text-[22px] mt-2'>BALCÓN</p>
                    <p className='primary text-base md:text-[22px] mt-2'>01 CAJÓN DE ESTACIONAMIENTO</p>

                  </div>
                )}

                  <div className='md:flex mr-8 md:mr-20 mt-6 mb-6 md:mt-8 md:mb-8'>
                    <img className="w-[400px]" src={departamentoicons} alt="" />
                  </div>

                  {departamentoname === 'estudio' && (
                    <div className='flex mt-8 md:mt-4'>
                        <div className='w-5/12 md:w-3/12'>
                        <p className='primary text-right text-[15px] 2xl:text-lg'>INTERIOR: 39.95 m2</p>
                        <p className='primary text-right text-[15px] 2xl:text-lg mt-1 md:mt-1'>EXTERIOR: 7.85 m2</p>
                        <p className='sextary text-right text-[15px] 2xl:text-lg mt-1 md:mt-1'>TOTAL: 47.80 m2</p>
                        </div>
                        <div className='w-1/12 md:w-1/12 flex justify-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="3" height="103.481" viewBox="0 0 3 103.481">
                            <path id="Trazado_644" data-name="Trazado 644" d="M-7421,4973.607v103.481" transform="translate(7422.5 -4973.607)" fill="none" stroke="#000" stroke-width="3"/>
                          </svg>
                        </div>
                        <div className='w-6/12 md:w-4/12'>
                        <p className='primary text-left text-[15px] 2xl:text-lg'>INTERIOR: 430.02 sqft</p>
                        <p className='primary text-left text-[15px] 2xl:text-lg mt-1 md:mt-1'>EXTERIOR: 84.50 sqft</p>
                        <p className='sextary text-left text-[15px] 2xl:text-lg mt-1 md:mt-1'>TOTAL: 514.52 sqft</p>
                        </div>
                        <div className='md:w-4/12'>
                        </div>
                    </div>
                    )}

                    {departamentoname === '1 recámara' && (
                    <div className='flex mt-8 md:mt-4'>
                        <div className='w-5/12 md:w-3/12'>
                        <p className='primary text-right text-[15px] 2xl:text-lg'>INTERIOR: 53.85 m2</p>
                        <p className='primary text-right text-[15px] 2xl:text-lg mt-1 md:mt-1'>EXTERIOR: 11.70 m2</p>
                        <p className='sextary text-right text-[15px] 2xl:text-lg mt-1 md:mt-1'>TOTAL: 65.55 m2</p>
                        </div>
                        <div className='w-1/12 md:w-1/12 flex justify-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="3" height="103.481" viewBox="0 0 3 103.481">
                            <path id="Trazado_644" data-name="Trazado 644" d="M-7421,4973.607v103.481" transform="translate(7422.5 -4973.607)" fill="none" stroke="#000" stroke-width="3"/>
                          </svg>
                        </div>
                        <div className='w-6/12 md:w-4/12'>
                        <p className='primary text-left text-[15px] 2xl:text-lg'>INTERIOR: 579.65 sqft</p>
                        <p className='primary text-left text-[15px] 2xl:text-lg mt-1 md:mt-1'>EXTERIOR: 125.94 sqft</p>
                        <p className='sextary text-left text-[15px] 2xl:text-lg mt-1 md:mt-1'>TOTAL: 705.58 sqft</p>
                        </div>
                        <div className='md:w-4/12'>
                        </div>
                    </div>
                    )}

                    {departamentoname === 'Lock Off' && (
                    <div className='flex mt-8 md:mt-4'>
                        <div className='w-5/12 md:w-3/12'>
                        <p className='primary text-right text-[15px] 2xl:text-lg'>INTERIOR: 85.30 m2</p>
                        <p className='primary text-right text-[15px] 2xl:text-lg mt-1 md:mt-1'>EXTERIOR: 14.30 m2</p>
                        <p className='sextary text-right text-[15px] 2xl:text-lg mt-1 md:mt-1'>TOTAL: 99.60 m2</p>
                        </div>
                        <div className='w-1/12 md:w-1/12 flex justify-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="3" height="103.481" viewBox="0 0 3 103.481">
                            <path id="Trazado_644" data-name="Trazado 644" d="M-7421,4973.607v103.481" transform="translate(7422.5 -4973.607)" fill="none" stroke="#000" stroke-width="3"/>
                          </svg>
                        </div>
                        <div className='w-6/12 md:w-4/12'>
                        <p className='primary text-left text-[15px] 2xl:text-lg'>INTERIOR: 918.16 sqft</p>
                        <p className='primary text-left text-[15px] 2xl:text-lg mt-1 md:mt-1'>EXTERIOR: 153.92 sqft</p>
                        <p className='sextary text-left text-[15px] 2xl:text-lg mt-1 md:mt-1'>TOTAL: 1072.08 sqft</p>
                        </div>
                        <div className='md:w-4/12'>
                        </div>
                    </div>
                    )}

                </div>
              </div>
            </div>
        </div>
    )}
    </section>

    {seccionVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-10">
          <div className="w-[100vw] relative">
            <section className="flex justify-center">
              <div className="w-[100vw]">
                <ImageGallery
                  items={images}
                  showPlayButton={false}
                  autoPlay={true}
                  showNav={true}
                  showBullets={true}
                  showFullscreenButton={false}
                  slideInterval={3000}
                />
              </div>
            </section>
            
          </div>
          <button
              className="tertiary absolute top-24 right-4 text-white text-2xl cursor-pointer z-100 transition-transform transform hover:scale-125"
              onClick={cerrarSeccion}
            >
              X
          </button>
        </div>
    )}
    </>
  );
}

export default Nivel;
