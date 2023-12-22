import React, { useEffect } from 'react';

function Acerca() {

    useEffect(() => {
        const html = document.querySelector('html');
    
        // Detections
        if (!('ontouchstart' in window)) {
          html.classList.add('noTouch');
        }
        if ('ontouchstart' in window) {
          html.classList.add('isTouch');
        }
        if ('ontouchstart' in window) {
          html.classList.add('isTouch');
        }
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
          if (navigator.appVersion.indexOf('Trident') === -1) {
            html.classList.add('isEDGE');
          } else {
            html.classList.add('isIE', 'isIE11');
          }
        }
        if (navigator.appVersion.indexOf('MSIE') !== -1) {
          html.classList.add('isIE');
        }
        if (
          navigator.userAgent.indexOf('Safari') !== -1 &&
          navigator.userAgent.indexOf('Chrome') === -1
        ) {
          html.classList.add('isSafari');
        }
    
        // On Screen
        const isOnScreen = (element) => {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          const viewportTop = window.scrollY;
          const viewportBottom = viewportTop + window.innerHeight;
          return elementBottom > viewportTop && elementTop < viewportBottom;
        };
    
        const detection = () => {
          items.forEach((item) => {
            const el = item;
    
            if (isOnScreen(el)) {
              el.classList.add('in-view');
            } else {
              el.classList.remove('in-view');
            }
          });
        };
    
        const items = document.querySelectorAll('*[data-animate-in], *[data-detect-viewport]');
        let waiting = false;
    
        const handleResizeScroll = () => {
          if (waiting) {
            return;
          }
          waiting = true;
          detection();
    
          setTimeout(() => {
            waiting = false;
          }, 100);
        };
    
        window.addEventListener('resize', handleResizeScroll);
        window.addEventListener('scroll', handleResizeScroll);
    
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(() => {
            detection();
          }, 500);
    
          items.forEach((item) => {
            let delay = 0;
            const el = item;
            if (item.getAttribute('data-animate-in-delay')) {
              delay = `${item.getAttribute('data-animate-in-delay') / 1000}s`;
            } else {
              delay = 0;
            }
            el.style.transitionDelay = delay;
          });
        });
    
        return () => {
          window.removeEventListener('resize', handleResizeScroll);
          window.removeEventListener('scroll', handleResizeScroll);
        };
      }, []);

  return (
    <>

      <section className='mx-auto py-10 md:py-0 px-4 md:px-20 2xl:px-32 md:mb-10 md:mt-20'>
        <div className='md:flex py-0 md:py-20 xl:py-24'>
            <div className='w-full md:w-1/3 xl:w-1/3 3xl:w-5/12'>
                <div className="flex justify-center md:justify-start">
                    <div className="text-brown text-4xl md:text-5xl xl:text-[55px] 3xl:text-[80px] tracking-wider mt-0 md:-mt-2 ml-0">
                        <h1 className='secondary tracking-normal md:tracking-wide xl:leading-[68px] 3xl:xl:leading-[88px]'><a className='primary'>¿</a>QUI<span className="">É</span>NES<br/><a className='pl-4'>SOMOS</a><a className='primary'>?</a></h1>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/3 lg:w-2/3 2xl:w-2/3'>
                <div className="flex items-center justify-center">
                    <div className="text-brown text-center md:text-left text-[11px] md:text-lg xl:text-[23px] 3xl:text-[28px] px-0 md:px-0 xl:px-0 hidden md:grid">
                        <p className='primary leading-none md:leading-7 3xl:leading-9 py-4 md:py-0 text-justify'><a className='sextary'>Distrito Yaax® </a>es un proyecto conceptualizado y desarrollado por ALMIRA DESARRROLLOS. Empresa 100 % Mexicana comprometida con el desarrollo económico y social de la región. YAAX palabra maya que significa VERDE. Indica el origen y el principio, además de significar la naturaleza en crecimiento.</p>
                    </div>
                    <div className="text-brown text-center md:text-left text-[12px] md:text-lg xl:text-[23px] px-0 md:px-0 xl:px-0 ml-0 md:ml-14 grid md:hidden ">
                        <p className='primary leading-4 md:leading-7 py-4 md:py-0 text-justify mt-5 md:mt-0'><a className='sextary'>Distrito Yaax®</a> es un proyecto conceptualizado y desarrollado por ALMIRA DESARRROLLOS. Empresa 100 % Mexicana comprometida con el desarrollo económico y social de la región.</p>
                        <p className='primary leading-4 md:leading-7 mt-0 md:mt-2 text-justify'><a className='sextary'>YAAX</a> palabra maya que significa <a className='sextary'>VERDE.</a> Indica el origen y el principio, además de significar la naturaleza en  crecimiento.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>


      <section id="sostenible" className='mx-auto py-2 md:py-0 px-4 md:px-20 2xl:px-32'>
        <div className='w-full flex mb-0 md:mb-6'>
          <div className='w-1/12 md:w-1/12'>
            <p className='secondary leading-none md:leading-7 3xl:leading-9 py-4 md:py-0 text-justify text-[14px] md:text-[30px]'>01.</p>
          </div>
          <div className='w-3/12 md:w-6/12'>
            <div className='mt-3 hidden md:flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[10px] md:w-[600px]" height="1" viewBox="0 0 772.77 1">
              <path id="Trazado_680" data-name="Trazado 680" d="M9825.676,1951.076h772.77" transform="translate(-9825.676 -1950.576)" fill="none" stroke="#707070" stroke-width="1"/>
            </svg>
            </div>
            <div className='flex md:hidden mt-5 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="68.545" height="1" viewBox="0 0 68.545 1">
              <path id="Trazado_681" data-name="Trazado 681" d="M9825.672,1951.076h68.545" transform="translate(-9825.672 -1950.576)" fill="none" stroke="#000" stroke-width="1"/>
            </svg>
            </div>
          </div>
          <div className='w-8/12 mt-3 md:-mt-4'>
            <p className='secondary tracking-wide md:tracking-wider md:py-0 md:text-justify text-[14px] md:text-[34px]'>CONSTRUCCIÓN SOSTENIBLE</p>
          </div>
        </div>
        <div className='bg-render-1 h-[260px] md:h-[70vh] 2xl-[110vh] 3xl:[100vh] my-3 md:my-0'></div>
        <div className='md:flex py-0 md:py-20 xl:py-14'>
            <div className='w-full'>
                <div className="flex items-center justify-center">
                    <div className="text-brown text-center md:text-left text-[11px] md:text-lg xl:text-[23px] 3xl:text-[28px] hidden md:grid">
                        <p className='primary leading-none md:leading-7 3xl:leading-9 py-4 md:py-0 text-justify'>En Distrito Yaax, entendemos la construcción sostenible como una filosofía que va más allá de la eficiencia estructural. Para nosotros, significa fusionar la elegancia arquitectónica con la preservación del entorno natural. Cada detalle, desde la elección de materiales respetuosos con el medio ambiente hasta la integración armoniosa con la exuberante vegetación circundante, refleja nuestro compromiso con un mañana más sostenible. Aquí, la construcción sostenible es una expresión de respeto por la naturaleza, un compromiso con la calidad de vida y un testimonio de la belleza que puede surgir cuando la sofisticación se encuentra con la responsabilidad ambiental. </p>
                    </div>
                    <div className="text-brown text-center md:text-left text-[12px] md:text-lg xl:text-[23px] grid md:hidden">
                        <p className='primary leading-4 md:leading-7 py-4 md:py-0 text-justify'>En Distrito Yaax, entendemos la construcción sostenible como una filosofía que va más allá de la eficiencia estructural. Para nosotros, significa fusionar la elegancia arquitectónica con la preservación del entorno natural. Cada detalle, desde la elección de materiales respetuosos con el medio ambiente hasta la integración armoniosa con la exuberante vegetación circundante, refleja nuestro compromiso con un mañana más sostenible. Aquí, la construcción sostenible es una expresión de respeto por la naturaleza, un compromiso con la calidad de vida y un testimonio de la belleza que puede surgir cuando la sofisticación se encuentra con la responsabilidad ambiental. </p>
                    </div>
                </div>
            </div>
        </div>
      </section>


      <section data-animate-in="up" id="smart" className='mx-auto py-2 md:py-0 px-4 md:px-20 2xl:px-32 mt-10 md:mt-24 3xl:mt-28'>
        <div className='w-full flex mb-0 md:mb-6'>
          <div className='w-1/12 md:w-1/12'>
            <p className='secondary leading-none md:leading-7 3xl:leading-9 py-4 md:py-0 text-justify text-[14px] md:text-[30px]'>02.</p>
          </div>
          <div className='w-3/12 md:w-3/12'>
            <div className='mt-3 hidden md:flex'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[10px] md:w-[240px]" height="1" viewBox="0 0 261.325 1">
                <path id="Trazado_679" data-name="Trazado 679" d="M9825.675,1951.076H10087" transform="translate(-9825.675 -1950.576)" fill="none" stroke="#707070" stroke-width="1"/>
              </svg>
            </div>
            <div className='flex md:hidden mt-5 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="68.545" height="1" viewBox="0 0 68.545 1">
              <path id="Trazado_681" data-name="Trazado 681" d="M9825.672,1951.076h68.545" transform="translate(-9825.672 -1950.576)" fill="none" stroke="#000" stroke-width="1"/>
            </svg>
            </div>
          </div>
          <div className='w-7/12 md:w-9/12 mt-2 md:-mt-4'>
            <p className='secondary tracking-wide md:tracking-wider md:py-0 md:text-justify text-[14px] md:text-[34px]'>PRIMER PROYECTO SMART CITY EN CANCÚN</p>
          </div>
        </div>
        <div className='bg-render-2 h-[260px] md:h-[70vh] 2xl-[110vh] 3xl:[100vh] my-3 md:my-0'></div>
        <div className='md:flex py-0 md:py-20 xl:py-14'>
            <div className='w-full'>
                <div className="flex items-center justify-center">
                    <div className="text-brown text-center md:text-left text-[11px] md:text-lg xl:text-[23px] 3xl:text-[28px] hidden md:grid">
                        <p className='primary leading-none md:leading-7 3xl:leading-9 py-4 md:py-0 text-justify'>Bienvenido a Distrito Yaax, el epítome de una Smart City en el corazón de Cancún. Desde tecnologías avanzadas que potencian la eficiencia estructural hasta una ubicación estratégica que facilita la conectividad con aeropuertos, hospitales, universidades, playas y centros comerciales de lujo, todo a menos de 15 minutos de distancia. Distrito Yaax no solo promete un hogar sostenible, sino también una experiencia de vida donde la conveniencia se encuentra a la vuelta de la esquina. Nuestras amenidades, diseñadas para abrazar las necesidades modernas, reflejan un enfoque integral, desde áreas colaborativas de trabajo hasta espacios pet friendly. Cada rincón, cada estructura, está dentro de una arquitectura y diseño inteligente, creando un entorno donde la tecnología y la sostenibilidad convergen para mejorar la calidad de vida de nuestros residentes.</p>
                    </div>
                    <div className="text-brown text-center md:text-left text-[12px] md:text-lg xl:text-[23px] grid md:hidden">
                        <p className='primary leading-4 md:leading-7 py-4 md:py-0 text-justify'>Bienvenido a Distrito Yaax, el epítome de una Smart City en el corazón de Cancún. Desde tecnologías avanzadas que potencian la eficiencia estructural hasta una ubicación estratégica que facilita la conectividad con aeropuertos, hospitales, universidades, playas y centros comerciales de lujo, todo a menos de 15 minutos de distancia. Distrito Yaax no solo promete un hogar sostenible, sino también una experiencia de vida donde la conveniencia se encuentra a la vuelta de la esquina. Nuestras amenidades, diseñadas para abrazar las necesidades modernas, reflejan un enfoque integral, desde áreas colaborativas de trabajo hasta espacios pet friendly. Cada rincón, cada estructura, está dentro de una arquitectura y diseño inteligente, creando un entorno donde la tecnología y la sostenibilidad convergen para mejorar la calidad de vida de nuestros residentes.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>


      <section data-animate-in="up" id="verdes" className='mx-auto py-2 md:py-0 px-4 md:px-20 2xl:px-32 mt-10 md:mt-24 3xl:mt-28 md:mb-24'>
        <div className='w-full flex mb-0 md:mb-6'>
          <div className='w-1/12 md:w-1/12'>
            <p className='secondary leading-none md:leading-7 3xl:leading-9 py-4 md:py-0 text-justify text-[14px] md:text-[30px]'>03.</p>
          </div>
          <div className='w-3/12 md:w-6/12'>
            <div className='mt-3 hidden md:flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[10px] md:w-[600px]" height="1" viewBox="0 0 772.77 1">
              <path id="Trazado_680" data-name="Trazado 680" d="M9825.676,1951.076h772.77" transform="translate(-9825.676 -1950.576)" fill="none" stroke="#707070" stroke-width="1"/>
            </svg>
            </div>
            <div className='flex md:hidden mt-5 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="68.545" height="1" viewBox="0 0 68.545 1">
              <path id="Trazado_681" data-name="Trazado 681" d="M9825.672,1951.076h68.545" transform="translate(-9825.672 -1950.576)" fill="none" stroke="#000" stroke-width="1"/>
            </svg>
            </div>
          </div>
          <div className='w-8/12 mt-3 md:-mt-4'>
            <p className='secondary tracking-wide md:tracking-wider md:py-0 md:text-justify text-[14px] md:text-[34px]'>60% DE ÁREAS VERDES</p>
          </div>
        </div>
        <div className='bg-render-3 h-[260px] md:h-[70vh] 2xl-[110vh] 3xl:[100vh] my-3 md:my-0'></div>
        <div className='md:flex py-0 md:py-20 xl:py-14'>
            <div className='w-full'>
                <div className="flex items-center justify-center">
                    <div className="text-brown text-center md:text-left text-[11px] md:text-lg xl:text-[23px] 3xl:text-[28px] hidden md:grid">
                        <p className='primary leading-none md:leading-7 3xl:leading-9 py-4 md:py-0 text-justify'>Enorgulleciéndonos de nuestro compromiso y cuidado con la naturaleza, Distrito Yaax se presenta como un oasis urbano con un sorprendente 60% de áreas verdes meticulosamente integradas en su diseño, totalizando 4.5 hectáreas de zonas verdes. Como parte integral de nuestro proyecto, estamos llevando a cabo un ambicioso programa de reforestación en el área circundante, guiados por la mano experta de una bióloga dedicada. Trabajamos en estrecha colaboración para asegurar que el ecosistema se regenere y funcione en perfecta armonía con la vida humana. Cada sendero escénico y espacio verde ha sido cuidadosamente planificado para fomentar la conexión con la naturaleza, creando un refugio único donde la sostenibilidad se fusiona con la elegancia. </p>
                    </div>
                    <div className="text-brown text-center md:text-left text-[12px] md:text-lg xl:text-[23px] grid md:hidden">
                        <p className='primary leading-4 md:leading-7 mt-0 md:mt-2 text-justify'>Enorgulleciéndonos de nuestro compromiso y cuidado con la naturaleza, Distrito Yaax se presenta como un oasis urbano con un sorprendente 60% de áreas verdes meticulosamente integradas en su diseño, totalizando 4.5 hectáreas de zonas verdes. Como parte integral de nuestro proyecto, estamos llevando a cabo un ambicioso programa de reforestación en el área circundante, guiados por la mano experta de una bióloga dedicada. Trabajamos en estrecha colaboración para asegurar que el ecosistema se regenere y funcione en perfecta armonía con la vida humana. Cada sendero escénico y espacio verde ha sido cuidadosamente planificado para fomentar la conexión con la naturaleza, creando un refugio único donde la sostenibilidad se fusiona con la elegancia. </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      

      <section data-animate-in="up" className='bg-gray-1 py-28 mt-10 md:mt-0'>
            <div className='container mx-auto md:flex'>

                <div className='w-full md:w-2/5 px-4 md:px-16'>
                    <h3 className='secondary text-center md:text-left text-4xl md:text-5xl text-white'>COTIZA</h3>
                    <h4 className='primary text-center md:text-left text-base md:text-lg text-white mt-1 md:mt-1'>HAGAMOS TU SUEÑO REALIDAD</h4>
                    <form className='flex flex-col md:items-start items-center mt-4'>
                        <input className='bg-gray-1 text-white border-b-2 border-white focus:outline-none px-12 md:px-20 primary text-[15px] md:text-[1.1rem] py-1' type="text" name='nombre'/>
                        <label className='text-white primary mt-2 text-[15px] md:text-[1.1rem]' htmlFor="nombre">Nombre Completo</label>

                        <input className='bg-gray-1 text-white border-b-2 border-white focus:outline-none px-12 md:px-20 primary text-[15px] md:text-[1.1rem] py-3' type="email" name='mail'/>
                        <label className='text-white primary mt-2 text-[15px] md:text-[1.1rem]' htmlFor="email">Correo Electrónico</label>

                        <input className='bg-gray-1 text-white border-b-2 border-white focus:outline-none px-12 md:px-20 primary text-[15px] md:text-[1.1rem] py-3' type="number" name='tel'/>
                        <label className='text-white primary mt-2 text-[15px] md:text-[1.1rem]' htmlFor="tel">Whatsapp</label>

                        <button className='text-white text-[20px] md:text-[1.3rem] primary rounded-full border-[1.5px] px-3 mt-8'>Enviar</button>
                    </form>
                </div>

                <div className='w-full md:w-1/5 mx-auto py-5 md:py-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='hidden md:flex mx-auto' width="2" height="300" viewBox="0 0 2 456">
                        <path id="Trazado_422" data-name="Trazado 422" d="M-4986,6352.828h456" transform="translate(6353.828 4986) rotate(90)" fill="none" stroke="#fff" stroke-width="2"/>
                    </svg>
                </div>

                <div className='w-full md:w-2/5'>
                    <h3 className='secondary text-center md:text-left text-4xl md:text-5xl text-white '>DUDAS?</h3>
                    <h4 className='primary text-center md:text-left text-base md:text-lg text-white mt-1 md:mt-1'>SIEMPRE DISPONIBLE PARA TI</h4>
                    
                    <div className='mt-4 md:mt-12 flex justify-center md:justify-start'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-4 md:w-6' viewBox="0 0 38.547 27.591">
                        <g id="Grupo_184" data-name="Grupo 184" transform="translate(3446.746 -839.502)">
                            <path id="Trazado_425" data-name="Trazado 425" d="M-3416.782,856.054l-18.394-15.765a2.653,2.653,0,0,1,2.07-.782c2.976-.008,5.952,0,8.929,0q11.848,0,23.7,0a2.964,2.964,0,0,1,2.12.761Z" transform="translate(-10.698 0)" fill="#fff"/>
                            <path id="Trazado_426" data-name="Trazado 426" d="M-3421.836,1040.179l4.777,4.179,4.773-4.178,13.631,11.688a2.739,2.739,0,0,1-2.034.769c-1.733.013-3.466,0-5.2,0q-13.731,0-27.462,0a2.915,2.915,0,0,1-2.125-.762Z" transform="translate(-10.421 -185.551)" fill="#fff"/>
                            <path id="Trazado_427" data-name="Trazado 427" d="M-3098.592,894.688l-13.308-11.313,13.308-11.578Z" transform="translate(-309.607 -29.861)" fill="#fff"/>
                            <path id="Trazado_428" data-name="Trazado 428" d="M-3446.746,872.094l13.3,11.555-13.3,11.3Z" transform="translate(0 -30.135)" fill="#fff"/>
                        </g>
                    </svg>
                        <a href="mailto:informes@distritoyaax.com" className='primary text-center md:text-left text-[14px] md:text-lg text-white ml-2 md:ml-5'>informes@distritoyaax.com</a>
                    </div>

                    <div className='mt-[8px] md:mt-4 flex justify-center md:justify-start'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-3 md:w-5' viewBox="0 0 31.766 35.438">
                        <g id="Grupo_185" data-name="Grupo 185" transform="translate(3198.273 304.39)">
                            <path id="Trazado_429" data-name="Trazado 429" d="M-3198.273-295.737a11.688,11.688,0,0,1,2.666-7.192,3.312,3.312,0,0,1,1.976-1.106,16.5,16.5,0,0,1,2.174-.353.933.933,0,0,1,.666.36,5.759,5.759,0,0,1,.6,1.025c1.024,1.965,2.031,3.941,3.067,5.9.569,1.073.573,1.568-.23,2.453-.625.689-1.326,1.291-1.989,1.937-.287.28-.576.559-.844.861a1.593,1.593,0,0,0-.262,2.263c.473.932.959,1.856,1.472,2.761a23.189,23.189,0,0,0,7.866,8.287c.582.368,1.165.735,1.757,1.083a.983.983,0,0,0,1.363-.27c.553-.667,1.075-1.366,1.616-2.045.385-.482.753-.984,1.175-1.423.789-.82,1.177-.828,2.106-.213,1.57,1.039,3.147,2.063,4.723,3.091.442.288.892.563,1.331.856a1.18,1.18,0,0,1,.526,1.142,9.933,9.933,0,0,1-.752,3.486,4.373,4.373,0,0,1-1.127,1.439,8.671,8.671,0,0,1-6.141,2.439,10.6,10.6,0,0,1-3.591-.936,32.065,32.065,0,0,1-5.188-2.426,32.938,32.938,0,0,1-6.713-5.953,33.126,33.126,0,0,1-5.167-7.306,37.525,37.525,0,0,1-2.923-8.614A12.285,12.285,0,0,1-3198.273-295.737Z" fill="#fff"/>
                        </g>
                    </svg>
                        <a href="tel:+52 9981828289" className='primary text-center md:text-left text-[14px] md:text-lg text-white ml-2 md:ml-5'>+52 9981828289</a>
                    </div>
                </div>
            </div>
      </section>

    </>
  );
}

export default Acerca;
