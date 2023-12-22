import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import AnimatedSection from '@components/AnimatedSection';
import { useInView } from "react-intersection-observer";

function Modelos() {

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

    const [background, setBackground] = useState('estudio');
    const [background1, setBackground1] = useState('recamara');
    const [background2, setBackground2] = useState('look-off');
    const [background3, setBackground3] = useState('look-off-a');


    const handleImageClick = (newBackground) => {
        setBackground(newBackground);
    };

    const handleImageClick1 = (newBackground1) => {
        setBackground1(newBackground1);
    };

    const imageVariants = {
        normal: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } },
      };

    const cardVariants = {
        normal: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.5, ease: 'easeInOut' } },
      };

    let slidesPerView = 3; 

    if (window.innerWidth < 600) {
        slidesPerView = 2;
    }

  return (
    <>

      <section className='pt-10 md:pt-20 pb-5 md:pb-5 mt-20 md:mt-24'>
        <h2 className='secondary text-brown text-center mx-auto text-4xl md:text-7xl 2xl:text-[80px] 3xl:text-[90px] pb-4 md:pb-20 3xl:pb-40'>TIPOLOGÍAS</h2>

        <div className='flex px-10 md:px-56'>
        <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        //navigation={true}
        
        autoplay={{ delay: 4000}}
        >
            <SwiperSlide>
                <div className='w-full'>
                    <div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                    <motion.img
                    className='mx-auto py-4 w-[200px] md:w-[320px] 3xl:w-[380px]'
                    src="img/tipologia-room.png"
                    alt="ESTUDIO"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
                    </div>
                    <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>Estudio - 47.80 m2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full'>
                    <div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                    <motion.img
                    className='mx-auto py-4 w-[550px] 3xl:w-[610px]'
                    src="img/tipologia-recamara.png"
                    alt="1 RECÁMARA"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
                    </div>
                    <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>1 Recámara - 65.55 m2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full'>
                    <div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                    <motion.img
                    className='mx-auto py-4 w-[600px] 3xl:w-[660px]'
                    src="img/tipologia-look.png"
                    alt="LOOK OFF"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
                    </div>
                    <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>Lock Off A - 99.60 m2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full'>
                    <div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                    <motion.img
                    className='mx-auto py-4 w-[660px] 3xl:w-[720px]'
                    src="img/tipologia-look-a.png"
                    alt="LOOK OFF A"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
                    </div>
                    <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>Lock Off - 95.25 m2</p>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        
      </section>

      <section data-animate-in="fadeIn" className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-5 md:mt-32 xl:mt-40 2xl:mt-48 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>ESTUDIO</h2>
        </div>
      </section>
      
      <section data-animate-in="up" className='relative md:-mt-2 z-10 mb-6'>
        <div className={`w-full fade ${background}`}>
                <div className='flex justify-end w-[100%] h-[35%] md:h-[200px]'>
                    <div className='bg-black w-1/3 md:w-3/12 mt-12 md:mt-28 lg:mt-32 hover:scale-110 transition-transform py-2'>
                        <div className='flex items-center px-2 md:px-10 py-1 md:py-0'>
                          <div className='w-1/3'>
                            <img className='w-5 md:w-12 flex ml-1 -mt-2 md:mt-1' src="/img/Logo-m.png" alt="" />
                          </div>
                          <div className='w-2/3'>
                            <p className='secondary text-white text-[8px] md:text-2xl tracking-wider -mt-2 md:mt-2'>ESTUDIO</p>
                          </div>
                        </div>
                    </div>
                </div>

                <div className='flex cards-bg pb-4 md:pb-8 2xl:pb-10'>
                    <div className='w-1/2'>
                        <div className='flex'>
                            <div className='w-1/2 px-2'>
                                <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('recamara')}>
                                    <img src="img/recamara.png" alt="" />
                                </div>
                            </div>
                            <div className='w-1/2 px-2'>
                                <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('look-off')}>
                                    <img src="img/look-off.png" alt="" />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
        </div>
      </section>

      <section data-animate-in="fadeIn" className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-5 md:mt-24 xl:mt-40 2xl:mt-48 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>1 RECÁMARA</h2>
        </div>
      </section>
      
      <section data-animate-in="up" className='relative md:-mt-2 z-10 mb-6'>
        <div className={`w-full fade ${background1}`}>
                      <div className='flex justify-end w-[100%] h-[35%] md:h-[200px]'>
                        <div className='bg-black w-1/3 md:w-3/12 mt-12 md:mt-28 lg:mt-32 hover:scale-110 transition-transform py-2'>
                            <div className='flex items-center px-2 md:px-10 py-1 md:py-0'>
                              <div className='w-1/3'>
                                <img className='w-5 md:w-12 flex ml-1 -mt-2 md:mt-1' src="/img/Logo-m.png" alt="" />
                              </div>
                              <div className='w-2/3'>
                                <p className='secondary text-white text-[8px] md:text-2xl tracking-wider -mt-2 md:mt-2'>1 RECÁMARA</p>
                              </div>
                            </div>
                        </div>
                      </div>

                      <div className='flex cards-bg pb-4 md:pb-8 2xl:pb-10'>
                          <div className='w-1/2'>
                              <div className='flex'>
                                  <div className='w-1/2 px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('recamara')}>
                                          <img src="img/recamara.png" alt="" />
                                      </div>
                                  </div>
                                  <div className='w-1/2 px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('look-off')}>
                                          <img src="img/look-off.png" alt="" />
                                      </div>
                                  </div> 
                              </div>
                          </div>
                      </div>
        </div>
      </section>

      <section data-animate-in="fadeIn" className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-5 md:mt-24 xl:mt-42 2xl:mt-48 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>LOCK OFF</h2>
        </div>
      </section>
      
      <section data-animate-in="up" className='relative md:-mt-2 z-10 mb-6'>
        <div className={`w-full fade ${background2}`}>
                      <div className='flex justify-end w-[100%] h-[35%] md:h-[200px]'>
                        <div className='bg-black w-1/3 md:w-3/12 mt-12 md:mt-28 lg:mt-32 hover:scale-110 transition-transform py-2'>
                              <div className='flex items-center px-2 md:px-10 py-1 md:py-0'>
                                <div className='w-1/3'>
                                  <img className='w-5 md:w-12 flex ml-1 -mt-2 md:mt-1' src="/img/Logo-m.png" alt="" />
                                </div>
                                <div className='w-2/3'>
                                  <p className='secondary text-white text-[8px] md:text-2xl tracking-wider -mt-2 md:mt-2'>LOCK OFF</p>
                                </div>
                              </div>
                        </div>
                      </div>

                      <div className='flex cards-bg pb-4 md:pb-8 2xl:pb-10'>
                          <div className='w-1/2'>
                              <div className='flex'>
                                  <div className='w-1/2 px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('recamara')}>
                                          <img src="img/recamara.png" alt="" />
                                      </div>
                                  </div>
                                  <div className='w-1/2 px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('look-off')}>
                                          <img src="img/look-off.png" alt="" />
                                      </div>
                                  </div> 
                              </div>
                          </div>
                      </div>
        </div>    
      </section>

      <section data-animate-in="fadeIn" className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-5 md:mt-24 xl:mt-42 2xl:mt-48 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>LOCK OFF A</h2>
        </div>
      </section>
      
      <section data-animate-in="up" className='relative md:-mt-2 z-10 mb-6'>
        <div className={`w-full fade ${background3}`}>
                      <div className='flex justify-end w-[100%] h-[35%] md:h-[200px]'>
                        <div className='bg-black w-1/3 md:w-3/12 mt-12 md:mt-28 lg:mt-32 hover:scale-110 transition-transform py-2'>
                              <div className='flex items-center px-2 md:px-10 py-1 md:py-0'>
                                <div className='w-1/3'>
                                  <img className='w-5 md:w-12 flex ml-1 -mt-2 md:mt-1' src="/img/Logo-m.png" alt="" />
                                </div>
                                <div className='w-2/3'>
                                  <p className='secondary text-white text-[8px] md:text-2xl tracking-wider -mt-2 md:mt-2'>LOCK OFF A</p>
                                </div>
                              </div>
                        </div>
                      </div>

                      <div className='flex cards-bg pb-4 md:pb-8 2xl:pb-10'>
                          <div className='w-1/2'>
                              <div className='flex'>
                                  <div className='w-1/2 px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('recamara')}>
                                          <img src="img/recamara.png" alt="" />
                                      </div>
                                  </div>
                                  <div className='w-1/2 px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('look-off')}>
                                          <img src="img/look-off.png" alt="" />
                                      </div>
                                  </div> 
                              </div>
                          </div>
                      </div>
        </div> 
      </section>

      <section data-animate-in="up" className='bg-gray-1 py-28 mt-0 md:mt-20'>
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

export default Modelos;
