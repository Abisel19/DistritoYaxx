import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import AnimatedSection from '@components/AnimatedSection';
import { useInView } from "react-intersection-observer";

function Home() {

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
  const [background2, setBackground2] = useState('lock-off');
  const [background3, setBackground3] = useState('lock-off-a');


  const handleImageClick = (newBackground) => {
      setBackground(newBackground);
  };

  const handleImageClick1 = (newBackground1) => {
      setBackground1(newBackground1);
  };

  const handleImageClick2 = (newBackground2) => {
    setBackground2(newBackground2);
  };

  const handleImageClick3 = (newBackground3) => {
    setBackground3(newBackground3);
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
      <section className='mt-20 md:mt-20 mb-5'>
        <video className="bg-home" src="img/YAAX FULLHD1.mp4" autoplay="true" muted="true" loop="true" poster="img/YAAX FULLHDntacto.jpg"></video>
      </section>

      <section className='mx-auto py-2 pb-12 md:py-0 md:pl-32 md:pr-32 2xl:pl-56 2xl:pr-38 3xl:pr-48 3xl:pl-96'>
        <div className='md:flex py-0 md:py-20 xl:py-24'>
            <div className='w-full md:w-1/3 xl:w-1/3 3xl:w-5/12'>
                <div className="flex justify-center md:justify-start">
                    <div className="text-brown text-4xl md:text-5xl xl:text-[55px] 3xl:text-[80px] tracking-wider mt-0 md:-mt-2 ml-0 md:-ml-10">
                        <h1 className='secondary tracking-normal md:tracking-wide xl:leading-[68px] 3xl:xl:leading-[88px]'><a className='primary'>¿</a>QUI<span className="letter-comma">E</span>NES<br/><a className='pl-4'>SOMOS</a><a className='primary'>?</a></h1>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/3 lg:w-2/3 2xl:w-2/3 px-2 md:px-0'>
                <div className="flex items-center justify-center">
                    <div className="text-brown text-center md:text-left text-[11px] md:text-lg xl:text-[23px] 3xl:text-[28px] px-0 md:px-0 xl:px-0 ml-0 md:ml-14 hidden md:grid">
                        <p className='primary leading-none md:leading-7 3xl:leading-9 py-4 md:py-0 text-justify'><a className='sextary'>Distrito Yaax® </a>es un proyecto conceptualizado y desarrollado por ALMIRA DESARRROLLOS. Empresa 100 % Mexicana comprometida con el desarrollo económico y social de la región. YAAX palabra maya que significa VERDE. Indica el origen y el principio, además de significar la naturaleza en crecimiento.</p>
                    </div>
                    <div className="text-brown text-center md:text-left text-[12px] md:text-lg xl:text-[23px] px-0 md:px-0 xl:px-0 ml-0 md:ml-14 grid md:hidden">
                        <p className='primary leading-4 md:leading-7 py-4 md:py-0 text-justify px-4 md:px-0'><a className='sextary'>Distrito Yaax®</a> es un proyecto conceptualizado y desarrollado por ALMIRA DESARRROLLOS. Empresa 100 % Mexicana comprometida con el desarrollo económico y social de la región.</p>
                        <p className='primary leading-4 md:leading-7 mt-0 md:mt-2 text-justify px-4 md:px-0'><a className='sextary'>YAAX</a> palabra maya que significa <a className='sextary'>VERDE.</a> Indica el origen y el principio, además de significar la naturaleza en  crecimiento.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section data-animate-in="up" className='flex'>
        <div className='w-full md:w-4/12 bg-black-1 py-2 md:py-6 3xl:py-12 mx-auto'>
            <div className='text-center'>
                <a href='/acerca'><h3 className='primary transition-transform transform hover:scale-110 text-white text-[10px] md:text-[22px] 3xl:text-[30px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>CONSTRUCCIÓN <br/><a className='sextary'>SOSTENIBLE</a></h3></a>
            </div>
        </div>

        <div className='w-full md:w-4/12 bg-gray-1 py-2 md:py-6 3xl:py-12 mx-auto'>
            <div className='text-center'>
                <a href='/acerca'><h3 className='primary transition-transform transform hover:scale-110 text-white text-[10px] md:text-[22px] 3xl:text-[30px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>PRIMER PROYECTO <br/><a className='sextary'>SMART CITY EN CANCÚN</a></h3></a>
            </div>
        </div>

        <div className='w-full md:w-4/12 bg-black-1 py-2 md:py-6 3xl:py-12 mx-auto'>
            <div className='text-center'>
            <a href='/acerca'><h3 className='primary transition-transform transform hover:scale-110 text-white text-[10px] md:text-[22px] 3xl:text-[30px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>60% DE <br/><a className='sextary'>ÁREAS VERDES</a></h3></a>
            </div>
        </div>
      </section>

      <section data-animate-in="fadeIn" className='bg-torres mt-10 md:mt-20'></section>

      <section data-animate-in="up" className='md:flex py-5 md:py-0'>
        <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000}}
        loop={true}
        >
        <SwiperSlide>
            <div className='md:flex py-5 md:py-14'>
                <div className='w-full md:w-3/5 3xl:w-7/12'>
                    <img className="w-full" src="/img/vista-laguna.png" alt="vista-a-la-laguna" />
                </div>

                <div className='w-full md:w-2/5 3xl:w-5/12 py-5 md:py-10 pl-0 md:pr-20 md:pl-12 2xl:pr-38 2xl:pl-10 3xl:pr-48 3xl:pl-20 mb-4 md:mb-0'>
                    <h2 className='secondary text-center md:text-left mt-3 md:mt-0 text-brown text-4xl md:text-5xl xl:text-[55px] 3xl:text-[60px] tracking-normal md:tracking-wide xl:leading-[68px] 3xl:xl:leading-[88px]'>VISTAS A <br/>LA LAGUNA</h2>
                    <p className='quaternary leading-4 md:leading-7 2xl:leading-9 md:text-justify text-brown mt-5 md:mt-8 2xl:mt-10 3xl:mt-14x text-[12px] md:text-lg xl:text-[20px] 3xl:text-[30px] md:pr-10 px-4 md:px-0 text-justify'>La Laguna Nichupté ofrece un oasis de tranquilidad y conexión con la naturaleza. Esta característica única agrega un valor inigualable a nuestro proyecto inmobiliario, proporcionando a los residentes una experiencia de vida que combina la ofisticación urbana con la serenidadnatural.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='md:flex py-5 md:py-14'>
                <div className='w-full md:w-3/5 3xl:w-7/12'>
                    <img className="w-full" src="/img/vista-a-la-ciudad.png" alt="vista-a-la-ciudad" />
                </div>

                <div className='w-full md:w-2/5 3xl:w-5/12 pl-0 md:pr-20 md:pl-12 2xl:pr-38 2xl:pl-10 3xl:pr-48 3xl:pl-20 mb-4 md:mb-0'>
                    <h2 className='secondary text-center md:text-left mt-3 md:mt-0 text-brown text-4xl md:text-5xl xl:text-[55px] 3xl:text-[60px] tracking-normal md:tracking-wide xl:leading-[68px] 3xl:xl:leading-[88px]'>VISTAS A <br/>LA CIUDAD</h2>
                    <p className='quaternary leading-4 md:leading-7 2xl:leading-9 md:text-justify text-brown mt-5 md:mt-8 2xl:mt-10 3xl:mt-14x text-[12px] md:text-lg xl:text-[20px] 3xl:text-[30px] md:pr-10 px-4 md:px-0 text-justify'>Desde Distrito Yaax, la ciudad de Cancún se despliega con una encantadora fusión de luces y vida urbana. Cada ventana es un cuadro que captura la dinámica energía de la ciudad, destacando la vitalidad de sus calles y su arquitectura. Al caer la tarde, los atardeceres pintan el cielo con tonos cálidos, creando una atmósfera única que transforma la ciudad en un lienzo de serenidad y belleza. Disfruta de este espectáculo en constante cambio desde la comodidad de tu hogar en Distrito Yaax.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='md:flex py-5 md:py-14'>
                <div className='w-full md:w-3/5 3xl:w-7/12'>
                    <img className="w-full" src="/img/vista-al-mar-caribe.png" alt="vista-al-mar-caribe" />
                </div>

                <div className='w-full md:w-2/5 3xl:w-5/12 pl-0 md:pr-20 md:pl-12 2xl:pr-38 2xl:pl-10 3xl:pr-48 3xl:pl-20 mb-4 md:mb-0'>
                    <h2 className='secondary text-center md:text-left mt-3 md:mt-0 text-brown text-4xl md:text-5xl xl:text-[55px] 3xl:text-[60px] tracking-normal md:tracking-wide xl:leading-[68px] 3xl:xl:leading-[88px]'>VISTAS AL <br/>MAR CARIBE</h2>
                    <p className='quaternary leading-4 md:leading-7 2xl:leading-9 md:text-justify text-brown mt-5 md:mt-8 2xl:mt-10 3xl:mt-14x text-[12px] md:text-lg xl:text-[20px] 3xl:text-[30px] md:pr-10 px-4 md:px-0 text-justify'>Desde Distrito Yaax, la ciudad de Cancún se despliega con una encantadora fusión de luces y vida urbana. Cada ventana es un cuadro que captura la dinámica energía de la ciudad, destacando la vitalidad de sus calles y la modernidad de su arquitectura. Al caer la tarde, los atardeceres pintan el cielo con tonos cálidos, creando una atmósfera única que transforma la ciudad en un lienzo de serenidad y belleza. Disfruta de este espectáculo en constante cambio desde la comodidad de tu hogar en Distrito Yaax.</p>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>     
      </section>
      
      <section data-animate-in="fadeIn" className='pt-10 md:pt-20 pb-5 md:pb-5'>
        <h2 className='secondary text-brown text-center mx-auto text-4xl md:text-7xl 2xl:text-[80px] 3xl:text-[90px] pb-4 md:pb-20 3xl:pb-40'>MODELOS</h2>

        <div className='flex px-0 md:px-56 2xl:72 3xl:px-96'>
        <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}                
        >
            <SwiperSlide>
                <div className='w-full'>
                <div className='h-[380px] md:h-[750px] 3xl:h-[780px]'>
                <a href='#estudio'><motion.img
                    className='mx-auto py-4 w-[200px] md:w-[420px] 3xl:w-[450px]'
                    src="img/tipologia-room.png"
                    alt="ESTUDIO"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    /></a>
                  </div>
                    <p className='primary text-lg text-center 2xl:text-2xl 3xl:text-3xl'>ESTUDIO - 47.80 m2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full'>
                <div className='h-[380px] md:h-[720px] 3xl:h-[750px]'>
                <a href='#recamara'><motion.img
                    className='mx-auto py-4 w-[310px] md:w-[640px] 3xl:w-[670px]'
                    src="img/tipologia-recamara.png"
                    alt="1 RECÁMARA"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    /></a>
                    </div>
                    <p className='primary text-lg text-center 2xl:text-2xl 3xl:text-3xl'>1 RECÁMARA -  65.55 m2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className='w-full'>
                    <div className='h-[380px] md:h-[710px] 3xl:h-[740px]'>
                    <a href='#lock-off'><motion.img
                    className='mx-auto py-4 w-[310px] md:w-[680px] 3xl:w-[710px]'
                    src="img/tipologia-look.png"
                    alt="LOCK OFF"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    /></a>
                    </div>
                    <p className='primary text-lg text-center 2xl:text-2xl 3xl:text-3xl'>LOCK OFF - 99.60 m2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full'>
                    <div className='mt-10 h-[320px] md:h-[620px] 3xl:h-[650px]'>
                    <a href='#lock-off-a'><motion.img
                    className='mx-auto py-4 w-[310px] md:w-[720px] 3xl:w-[750px]'
                    src="img/tipologia-look-a.png"
                    alt="LOCK OFF A"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    /></a>
                    </div>
                    <p className='primary text-lg text-center 2xl:text-2xl 3xl:text-3xl'>LOCK OFF A - 95.25 m2</p>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        
      </section>

      <section data-animate-in="fadeIn" className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-10 md:mt-32 xl:mt-40 pb-8 md:mb-12 xl:mb-20 2xl:mb-24 in-view'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[165px] md:tracking-widest absolute z-10 text-center'>R E N D E R S</h2>
        </div>
      </section>
      
      <section data-animate-in="up" className='relative md:-mt-2 z-10'>
        <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000}}
        >
        <SwiperSlide  id="estudio">
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

                    <div className='flex cards-bg pb-4 md:pb-8 2xl:pb-10 z-50'>
                    <div className='w-full'>
                        <div className='flex'>
                          <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={0}
                                slidesPerView={2}
                                loop={true}
                                autoplay={{ delay: 2000}}
                                className='w-[200px] md:w-[750px]'
                                >
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('estudio-2')}>
                                          <img src="img/estudio/estudio-2.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('estudio-3')}>
                                          <img src="img/estudio/estudio-3.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('estudio')}>
                                          <img src="img/estudio/estudio-1.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                
                          </Swiper>    
                        </div>
                    </div>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide  id="recamara">
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

                        <div className='flex cards-bg pb-4 md:pb-8 2xl:pb-10 z-50'>
                          <div className='w-full'>
                              <div className='flex'>
                                <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={0}
                                slidesPerView={2}
                                loop={true}
                                autoplay={{ delay: 2000}}
                                className='w-[200px] md:w-[750px]'
                                >
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick1('recamara-2')}>
                                          <img src="img/recamara/recamara-2.jpg" alt="" />
                                      </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick1('recamara-3')}>
                                          <img src="img/recamara/recamara-3.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick1('recamara-4')}>
                                          <img src="img/recamara/recamara-4.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick1('recamara')}>
                                          <img src="img/recamara/recamara-1.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                
                              </Swiper>    
                              </div>
                          </div>
                        </div>
            </div>
        </SwiperSlide>
        <SwiperSlide id="lock-off">
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

                        <div className='flex cards-bg pb-4 md:pb-8 2xl:pb-10 z-50'>
                          <div className='w-full'>
                              <div className='flex'>
                                <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={0}
                                slidesPerView={2}
                                loop={true}
                                autoplay={{ delay: 2000}}
                                className='w-[200px] md:w-[750px]'
                                >
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick2('lock-off-2')}>
                                          <img src="img/lock-off/lock-off-2.jpg" alt="" />
                                      </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick2('lock-off-5')}>
                                          <img src="img/lock-off/lock-off-5.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick2('lock-off-3')}>
                                          <img src="img/lock-off/lock-off-3.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick2('lock-off-4')}>
                                          <img src="img/lock-off/lock-off-4.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick2('lock-off')}>
                                          <img src="img/lock-off/lock-off-1.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                
                              </Swiper>    
                              </div>
                          </div>
                        </div>
            </div>  
        </SwiperSlide>
        <SwiperSlide id="lock-off-a">
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

                        <div className='flex cards-bg pb-4 md:pb-8 2xl:pb-10 z-50'>
                          <div className='w-full'>
                              <div className='flex'>
                                <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={0}
                                slidesPerView={2}
                                loop={true}
                                autoplay={{ delay: 2000}}
                                className='w-[200px] md:w-[750px]'
                                >
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick3('lock-off-a-4')}>
                                          <img src="img/lock-off-a/lock-off-a-4.jpg" alt="" />
                                      </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick3('lock-off-a-2')}>
                                          <img src="img/lock-off-a/lock-off-a-2.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick3('lock-off-a-3')}>
                                          <img src="img/lock-off-a/lock-off-a-3.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick3('lock-off-a-5')}>
                                          <img src="img/lock-off-a/lock-off-a-5.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick3('lock-off-a')}>
                                          <img src="img/lock-off-a/lock-off-a-1.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                
                              </Swiper>    
                              </div>
                          </div>
                        </div>
            </div> 
        </SwiperSlide>
        </Swiper>     
      </section>

      <section data-animate-in="up" className='hidden md:flex w-full mx-auto pt-0 md:pt-20 pb-0 md:pb-2 my-0 md:my-10 2xl:my-14'>
        <div className='hidden md:flex w-full mt-20 md:mt-20 3xl:mt-80 pb-0 md:pb-20 3xl:pb-28'>
              <div className='w-full md:w-5/12 2xl:w-5/12 3xl:w-6/12 pl-0 md:pl-14 grid justify-center content-center'>
                  <h2 className='secondary text-brown text-base md:text-[58px] xl:text-[65px] 2xl:text-[70px] 3xl:text-[100px]'>TORRE ITZ<a className='letter-comma'>E</a></h2>
                  <h2 className='secondary text-brown mt-12 md:mt-10 xl:mt-12 2xl:mt-14 3xl:mt-20 text-base md:text-[58px] xl:text-[65px] 2xl:text-[70px] 3xl:text-[100px]'>TORRE SAASIL</h2>
              </div>
              <div className='w-full md:w-7/12 2xl:w-7/12 3xl:w-6/12 mt-0 md:-mt-4 xl:-mt-4 2xl:-mt-6 ml-0 md:ml-10 2xl:ml-14'>
              <h3 className='secondary text-brown text-base md:text-[38px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[60px]'>AMENIDADES</h3>
              <p className='quaternary text-base text-justify mt-4 md:mt-6 md:text-[20px] xl:text-[22px] 2xl:text-[28px] 3xl:text-[34px] pr-3 md:pr-36 2xl:pr-40 3xl:pr-44 md:leading-snug'>Cancha de pádel, área de bbq, juegos infantiles, fire pits, alberca familiar, alberca para niños, sun deck, área lounge, pista jogging, terraza wellness, salón de usos múltiples, gimnasio, coworking, kids club, infinity pool, bar.</p>
              </div>
        </div>
      </section>

      <section data-animate-in="fadeIn" className='container md:hidden'>
        <div className='py-10'>
            <h2 className='secondary text-brown text-center mx-auto text-[42px]'>TORRE ITZ<a className='letter-comma2'>E</a></h2>
            <h2 className='secondary text-brown -mt-4 text-center mx-auto text-[42px]'>TORRE SAASIL</h2>
        </div>
        <div>
            <p className='septimary text-brown text-center text-[25px]'>AMENIDADES</p>
            <div className='flex justify-center mx-auto px-2 mt-6'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>CANCHA DE PADEL</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>ÁREA DE BBQ</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>JUEGOS INFANTILES</p>
            </div>
            <div className='flex justify-center mx-auto px-2 m-2'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>FIRE PITS</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>ALBERCA FAMILIAR</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>ALBERCA PARA NIÑOS</p>
            </div>
            <div className='flex justify-center mx-auto px-2 m-2'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>SUN DECK</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>ÁREA LOUNGE</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>GIMNASIO</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>TERRAZA WELLNESS</p>
            </div>
            <div className='flex justify-center mx-auto px-2 m-2'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>SALÓN DE USOS MÙLTIPLES</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>PISTA JOGGING </p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>COWORKING</p>
            </div>
            <div className='flex justify-center mx-auto px-2 m-2'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>KIDS CLUB</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>INFINITY POOL</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>BAR</p>
            </div>
        </div>
      </section>

      <section data-animate-in="fadeIn" className='relative md:mt-28 px-0 md:px-10 py-10 md:py-0'>
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{ delay: 4000}}
        className='amenidades px-4'
        >
        <SwiperSlide>
                <motion.img
                className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                src="img/areas-verdes.png"
                alt="AREAS VERDES"
                variants={imageVariants}
                initial="normal"
                whileHover="hover"
                whileTap="hover" 
                />
                {/* <img className='mx-auto w-80 2xl:w-96 py-0 md:py-4' src="img/areas-verdes.png" alt="ESTUDIO" /> */}
        </SwiperSlide>
        <SwiperSlide>
                <motion.img
                className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                src="img/padel.png"
                alt="PADEL"
                variants={imageVariants}
                initial="normal"
                whileHover="hover"
                whileTap="hover" 
                />
                {/* <img className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4' src="img/padel.png" alt="1 RECÁMARA" /> */}
        </SwiperSlide>
        <SwiperSlide>
                <motion.img
                className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                src="img/gimnasio.png"
                alt="GIMNASIO"
                variants={imageVariants}
                initial="normal"
                whileHover="hover"
                whileTap="hover" 
                />
                {/* <img className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4' src="img/gimnasio.png" alt="LOOK OFF" /> */}
        </SwiperSlide>
        <SwiperSlide>
                <motion.img
                className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                src="img/terraza.png"
                alt="TERRAZA"
                variants={imageVariants}
                initial="normal"
                whileHover="hover"
                whileTap="hover" 
                />
                {/* <img className='mx-auto w-80 2xl:w-96 py-0 md:py-4' src="img/terraza.png" alt="LOOK OFF A" /> */}
        </SwiperSlide>
        </Swiper>    
      </section>

      <section className='bg-location md:h-[120vh] 2xl:h-[122vh] 3xl:h-[125vh] md:mt-36'></section>

      <section data-animate-in="up" className='bg-black-1 -mt-1 md:mt-0 3xl:-mt-4 py-2 md:py-4 xl:py-10 2xl:py-12'>
        <div className='flex container mx-auto px-0 md:px-40 2xl:px-40 pb-8 md:mb-12 xl:mb-20'>
            <div className='flex mx-auto justify-center align-item'>
                <h2 className='secondary text-white mx-auto text-5xl md:text-[110px] xl:text-[140px] 2xl:text-[170px] md:tracking-widest absolute z-10 text-center mt-0 md:mt-8 xl:mt-8 2xl:mt-4'>A L I A N Z A S</h2>
            </div>
        </div>
      </section>

      <section data-animate-in="fadeIn" className='py-10 md:my-16 px-4 md:px-10'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{ delay: 4000}}
        className='alianzas py-5'
        >
        <SwiperSlide>
        <motion.div
        variants={cardVariants}
        whileHover="hover"
        whileTap="hover"
        >
            <div className='px-0 md:px-4 xl:px-6 3xl:px-6 py-0 md:py-5 2xl:py-6'>
                <div className='h-[200px] md:h-[340px] 3xl:h-[800px] border border-solid rounded-3xl border-gray-1 px-2 md:px-4 py-0 2xl:py-5 3xl:py-10'>
                    <div className='mx-auto mt-5 3xl:mt-8'>
                        <svg xmlns="http://www.w3.org/2000/svg"  className="mx-auto w-20 md:w-40" viewBox="0 0 182.207 103.864">
                        <g id="Grupo_196" data-name="Grupo 196" transform="translate(-490.56 -283.554)">
                            <g id="Grupo_193" data-name="Grupo 193" transform="translate(553.964 283.554)">
                            <g id="Grupo_190" data-name="Grupo 190" transform="translate(23.174 1.113)">
                                <path id="Trazado_441" data-name="Trazado 441" d="M966.848,336.75a77.8,77.8,0,0,0-30.167-33.991,76.421,76.421,0,0,1,7.428-13.47,4.395,4.395,0,0,1,.842,1.05l11.7,20.267,6.02,10.427,5.681,9.845a4.25,4.25,0,0,1,.369,3.506A4.359,4.359,0,0,1,966.848,336.75Z" transform="translate(-936.681 -289.289)" fill="#29154f"/>
                            </g>
                            <g id="Grupo_191" data-name="Grupo 191" transform="translate(0.003 36.192)">
                                <path id="Trazado_442" data-name="Trazado 442" d="M821.576,483.038a4.274,4.274,0,0,1-3.065-1.269,4.405,4.405,0,0,1-1.226-2.466c2.429.23,4.9.346,7.37.346a78.213,78.213,0,0,0,9.2-.54,76.7,76.7,0,0,0,28.226-9.064,76.553,76.553,0,0,1,7.471,12.841,4.387,4.387,0,0,1-1.161.153Z" transform="translate(-817.286 -470.044)" fill="#29154f"/>
                            </g>
                            <g id="Grupo_192" data-name="Grupo 192" transform="translate(0 0)">
                                <path id="Trazado_443" data-name="Trazado 443" d="M824.643,328.186c-2.467,0-4.944-.118-7.372-.351a4.307,4.307,0,0,1,.549-1.578l11.706-20.273,5.794-10.038,5.907-10.231a4.28,4.28,0,0,1,3.742-2.162,4.326,4.326,0,0,1,1.944.455,77.237,77.237,0,0,0-13.718,43.7A77.2,77.2,0,0,1,824.643,328.186Z" transform="translate(-817.271 -283.554)" fill="#29154f"/>
                            </g>
                            </g>
                            <g id="Grupo_194" data-name="Grupo 194" transform="translate(537.035 383.044)">
                            <path id="Trazado_444" data-name="Trazado 444" d="M730.273,796.718h.018a2.18,2.18,0,0,1,1.617.576,2.168,2.168,0,0,1,0,3.064,2.179,2.179,0,0,1-1.617.576h-.018v.005h-.238v-4.226h.238Zm0,.243v3.733h.018a1.95,1.95,0,0,0,1.445-.507,1.926,1.926,0,0,0,0-2.721,1.956,1.956,0,0,0-1.445-.5Z" transform="translate(-730.035 -796.615)" fill="#29154f"/>
                            <path id="Trazado_445" data-name="Trazado 445" d="M776.343,796.713v.238h-1.875v1.757h1.875v.238h-1.875V800.7h1.875v.238H774.23v-4.226Z" transform="translate(-765.653 -796.615)" fill="#29154f"/>
                            <path id="Trazado_446" data-name="Trazado 446" d="M816.691,798.39a1.79,1.79,0,0,1-.713-.412.895.895,0,0,1,1.268-1.263.748.748,0,0,1,.2.314l-.214.085a.657.657,0,0,0-.156-.238.662.662,0,0,0-.93,0,.658.658,0,0,0,0,.931,1.78,1.78,0,0,0,.5.325,2.1,2.1,0,0,1,.853.51,1.25,1.25,0,1,1-2.121,1.086l.225-.082a1.019,1.019,0,1,0,1.733-.84A1.929,1.929,0,0,0,816.691,798.39Z" transform="translate(-798.814 -796.406)" fill="#29154f"/>
                            <path id="Trazado_447" data-name="Trazado 447" d="M859.74,798.914h-1.464l-.589,1.619h-.254l1.574-4.324,1.572,4.324h-.251Zm-.087-.238-.644-1.772-.644,1.772Z" transform="translate(-832.71 -796.209)" fill="#29154f"/>
                            <path id="Trazado_448" data-name="Trazado 448" d="M905.27,799.471l-.071,0h-.719v1.466h-.238v-4.226h1.109a1.4,1.4,0,0,1,.821.4,1.386,1.386,0,0,1-.642,2.319l.975,1.5h-.293Zm-.79-2.517v2.28h.719a1.14,1.14,0,0,0,0-2.28Z" transform="translate(-870.434 -796.615)" fill="#29154f"/>
                            <path id="Trazado_449" data-name="Trazado 449" d="M947.968,799.471l-.071,0h-.718v1.466h-.238v-4.226h1.109a1.4,1.4,0,0,1,.821.4,1.386,1.386,0,0,1-.642,2.319l.975,1.5h-.293Zm-.79-2.517v2.28h.718a1.14,1.14,0,0,0,0-2.28Z" transform="translate(-904.846 -796.615)" fill="#29154f"/>
                            <path id="Trazado_450" data-name="Trazado 450" d="M993,797.035a2.169,2.169,0,1,1-1.534-.635A2.09,2.09,0,0,1,993,797.035Zm-1.534-.392a1.925,1.925,0,1,0,1.362.564A1.855,1.855,0,0,0,991.466,796.643Z" transform="translate(-938.983 -796.363)" fill="#29154f"/>
                            <path id="Trazado_451" data-name="Trazado 451" d="M1043.265,800.939v-4.226h.238V800.7h1.638v.238Z" transform="translate(-982.477 -796.615)" fill="#29154f"/>
                            <path id="Trazado_452" data-name="Trazado 452" d="M1084.071,800.939v-4.226h.238V800.7h1.638v.238Z" transform="translate(-1015.364 -796.615)" fill="#29154f"/>
                            <path id="Trazado_453" data-name="Trazado 453" d="M1128.239,797.035a2.169,2.169,0,1,1-1.534-.635A2.09,2.09,0,0,1,1128.239,797.035Zm-1.534-.392a1.925,1.925,0,1,0,1.362.564A1.854,1.854,0,0,0,1126.705,796.643Z" transform="translate(-1047.977 -796.363)" fill="#29154f"/>
                            <path id="Trazado_454" data-name="Trazado 454" d="M1178.458,798.39a1.789,1.789,0,0,1-.713-.412.895.895,0,0,1,1.268-1.263.75.75,0,0,1,.2.314l-.214.085a.654.654,0,0,0-.156-.238.658.658,0,0,0-.93.932,1.777,1.777,0,0,0,.5.325,2.1,2.1,0,0,1,.853.51,1.25,1.25,0,1,1-2.121,1.086l.225-.082a1.019,1.019,0,1,0,1.733-.84A1.929,1.929,0,0,0,1178.458,798.39Z" transform="translate(-1090.373 -796.406)" fill="#29154f"/>
                            </g>
                            <g id="Grupo_195" data-name="Grupo 195" transform="translate(490.56 350.15)">
                            <path id="Trazado_455" data-name="Trazado 455" d="M1204.664,698.338a.136.136,0,0,0-.028,0l.024,0Z" transform="translate(-1066.057 -684.434)" fill="#29154f"/>
                            <path id="Trazado_456" data-name="Trazado 456" d="M1205.815,691.206h-.032l-.026-.01A.527.527,0,0,1,1205.815,691.206Z" transform="translate(-1066.96 -678.681)" fill="#29154f"/>
                            <path id="Trazado_457" data-name="Trazado 457" d="M672.292,650.461l-10.2-23.314-.182-.437h-.946l-.182.437-7.445,17.015q-10.01-2.547-20.328-4.33a6.762,6.762,0,0,0,2.856-2.675,5.994,5.994,0,0,0,.8-2.905V633.3a6.15,6.15,0,0,0-2.549-5.026,7.714,7.714,0,0,0-4.773-1.567l-10.126.038h-.728v.728l-.026,7.969-.008,2.266h0q-8.923-1.06-17.994-1.555V626.71H599v9.37q-1.941-.1-3.889-.168-7.249-.261-14.567-.164l-.012-8.31v-.728h-1.2l-.182.437-3.944,8.717q-5.8.178-11.614.58l-4.221-9.3-.182-.437h-1.2v10.17q-8.427.733-16.843,1.932c-4.051.576-7.914,1.209-11.569,1.872V626.71h-1.458v14.242c-6.723,1.255-12.711,2.606-17.828,3.9l-7.744-17.7-.182-.437h-.946l-.182.437-10.178,23.262-.022.051-.475,1.019h1.585l.02-.006c2.644-.873,8.674-2.774,17.274-4.983l1.995,4.551.182.437h1.6l-.475-1.019-1.892-4.326c4.977-1.249,10.771-2.557,17.264-3.772v9.117h14.571v-1.456H529.574v-7.932c3.724-.679,7.666-1.326,11.806-1.916,5.068-.72,10.627-1.377,16.605-1.894v13.2h1.458V638.16q1.591-.131,3.218-.247l5.961,13.13.182.437h.948l.182-.437,6.236-13.789q1.448-.041,2.919-.065l.026,13.563v.728h1.456v-.728l-.02-13.585c5.915-.073,12.079.024,18.451.34V651.48h1.456v-13.9c5.84.319,11.85.823,17.994,1.552V651.48h1.458V639.31q4.568.564,9.228,1.3l.024,0,0,0a11.07,11.07,0,0,1,3.129,3.574,31.671,31.671,0,0,1,2.951,6.784l.146.509h1.53l-.291-.946c-1.506-5-3.012-7.488-4.518-9.188-.1-.1-.192-.2-.289-.3,6.869,1.158,13.866,2.608,20.951,4.4l-2.193,5.01-.475,1.019h1.6l.182-.437,2.292-5.232q2.556.662,5.121,1.383l.376-1.334q-2.455-.692-4.934-1.334l6.689-15.265,9.544,21.782.182.437h1.6Zm-179.423-.615,9.02-20.585,6.987,15.946C503.619,646.562,496.643,648.678,492.869,649.845Zm66.575-13.089v-5.931l2.6,5.727Q560.744,636.648,559.444,636.757Zm9.835,12.21-5.068-11.159q5.007-.329,10.346-.507Zm7.54-13.148,2.258-4.993.01,4.943C578.331,635.783,577.575,635.8,576.819,635.819Zm52.6,3.416h-.032l-.026-.01q-2.746-.439-5.511-.821h-.006q-1.959-.273-3.928-.516v-9.721h9.433a5.828,5.828,0,0,1,4.7,2.078,4.646,4.646,0,0,1,1.166,3.059v.93a4.654,4.654,0,0,1-2.258,3.944A6.355,6.355,0,0,1,629.415,639.235Z" transform="translate(-490.56 -626.71)" fill="#29154f"/>
                            </g>
                        </g>
                        </svg>
                    </div>
                    <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] 3xl:text-[22px] mt-0 md:mt-8 md:leading-relaxed'>Distrito Yaax® es un proyecto conceptualizado<br/> y desarrollado por ALMIRA DESARRROLLOS.<br/> Empresa 100 % Mexicana comprometida<br/> con el desarrollo económico y social <br/>de la región.</p>
                    <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] 3xl:text-[22px] mt-3'>Distrito Yaax® es un proyecto conceptualizado y desarrollado por ALMIRA DESARRROLLOS. Empresa 100% Mexicana comprometida con el desarrollo económico y social de la región.</p>
                </div>
            </div>
        </motion.div>
        </SwiperSlide>

        <SwiperSlide>
        <motion.div
        variants={cardVariants}
        whileHover="hover"
        whileTap="hover" // Para dispositivos táctiles
        >
            <div className='px-0 md:px-4 xl:px-6 3xl:px-6 py-0 md:py-5 2xl:py-6'>
                <div className='h-[200px] md:h-[340px] 3xl:h-[800px] border border-solid rounded-3xl border-gray-1 px-2 md:px-4 py-0 2xl:py-5 3xl:py-10'>
                    <div className='mx-auto mt-5 3xl:mt-8'>
                        <img className="mx-auto w-32 md:w-64" src="img/4S.png" alt="4S" />
                    </div>
                    <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] 3xl:text-[22px]  mt-0 md:mt-11 md:leading-relaxed'>4S es una de las empresas líderes en <br/>Latinoamérica en ingenieréa de mercado <br/>y consultoría inmobiliaria.</p>
                    <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] 3xl:text-[22px]  mt-5'>4S es una de las empresas líderes en Latinoamérica en ingeniería de mercado y consultoría inmobiliaria.</p>
                </div>
            </div>
        </motion.div>
        </SwiperSlide>

        <SwiperSlide>
        <motion.div
        variants={cardVariants}
        whileHover="hover"
        whileTap="hover" // Para dispositivos táctiles
        >
            <div className='px-0 md:px-4 xl:px-6 3xl:px-6 py-0 md:py-5 2xl:py-6'>
                <div className='h-[200px] md:h-[340px] 3xl:h-[800px] border border-solid rounded-3xl border-gray-1 px-2 md:px-4 py-0 2xl:py-5 3xl:py-10'>
                    <div className='mx-auto mt-5 3xl:mt-8'>
                        <img className="mx-auto w-80 mt-2 md:mt-8" src="img/banca-mifel.png" alt="banca-mifel" />
                    </div>
                    <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] 3xl:text-[22px]  mt-0 md:mt-12 md:leading-relaxed'>Brindamos seguridad jurídica a nuestros <br/> clientes, partiendo de un predio propio <br/> aportado a un fideicomiso de administración <br/> inmobiliaria con Banco MIFEL.</p>
                    <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] 3xl:text-[22px]  mt-5'>Brindamos seguridad jurídica a nuestros clientes, partiendo de un predio propio aportado a un fideicomiso de administración inmobiliaria con Banco MIFEL.</p>
                </div>
            </div>
        </motion.div>
        </SwiperSlide>
        
        <SwiperSlide>
        <motion.div
        variants={cardVariants}
        whileHover="hover"
        whileTap="hover" // Para dispositivos táctiles
        >
            <div className='px-0 md:px-4 xl:px-6 3xl:px-6 py-0 md:py-5 2xl:py-6'>
                <div className='h-[200px] md:h-[340px] 3xl:h-[800px] border border-solid rounded-3xl border-gray-1 px-2 md:px-4 py-0 2xl:py-5 3xl:py-10'>
                    <div className='mx-auto mt-5 3xl:mt-8'>
                        <img className="mx-auto w-48 md:w-64 -mt-5 md:mt-0" src="img/cal.png" alt="banca-mifel" />
                    </div>
                    <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] 3xl:text-[22px]  mt-8 md:mt-0 md:leading-relaxed'>Cal y Mayor es la empresa de mayor <br/>reconocimiento en ingenierías y consultoría <br/>especializada en movilidad y transporte.</p>
                    <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] 3xl:text-[22px]  mt-0'>Cal y Mayor es la empresa de mayor reconocimiento en ingenierías y consultoría especializada en movilidad y transporte.</p>
                </div>
            </div>
        </motion.div>
        </SwiperSlide>

      </Swiper>    
      </section>

      <section data-animate-in="up" className='bg-black-1 -mt-1 md:mt-0 3xl:-mt-4 py-2 md:py-4 xl:py-10 2xl:py-12'>
        <div className='flex container mx-auto px-0 md:px-40 2xl:px-40 pb-8 md:mb-12 xl:mb-20'>
            <div className='flex mx-auto justify-center align-item'>
                <h2 className='secondary text-white mx-auto text-5xl md:text-[110px] xl:text-[140px] 2xl:text-[170px] md:tracking-widest absolute z-10 text-center mt-0 md:mt-8 xl:mt-8 2xl:mt-4'>M E D I O S</h2>
            </div>
        </div>
      </section>

      <section data-animate-in="fadeIn" className='py-10 md:my-16 px-4 md:px-10'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{ delay: 4000}}
        className='alianzas py-5'
        >
        <SwiperSlide>
        <motion.div
        variants={cardVariants}
        whileHover="hover"
        whileTap="hover"
        >
                <a href='https://obras.expansion.mx/inmobiliario/2024/02/05/el-caribe-mexicano-se-fortalece-como-una-oportunidad-de-inversion'>
                    <div className='px-0 md:px-4 xl:px-6 3xl:px-6 py-0 md:py-5 2xl:py-6'>
                        <div className='h-[200px] md:h-[340px] 3xl:h-[800px] border border-solid rounded-3xl border-gray-1 px-2 md:px-4 py-0 2xl:py-5 3xl:py-10'>
                            <div className='mx-auto mt-5 3xl:mt-8'>
                                <img className="mx-auto w-32 md:w-40" src="img/expansion.png" alt="EXPANSIÓN" />
                            </div>
                            <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] 3xl:text-[22px] mt-0 md:mt-4 md:leading-relaxed'>“El Caribe Mexicano: La opción favorita<br></br> para vivir e invertir”</p>
                            <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] 3xl:text-[22px] mt-3'>“El Caribe Mexicano: La opción favorita para vivir e invertir”</p>
                        </div>
                    </div>
                </a>
        </motion.div>
        </SwiperSlide>

        <SwiperSlide>
        <motion.div
        variants={cardVariants}
        whileHover="hover"
        whileTap="hover" // Para dispositivos táctiles
        >
        <a href='https://mundoejecutivo.com.mx/empresas/distrito-yaax-un-tesoro-verde-en-cancun-quintana-roo/'>
            <div className='px-0 md:px-4 xl:px-6 3xl:px-6 py-0 md:py-5 2xl:py-6'>
                <div className='h-[200px] md:h-[340px] 3xl:h-[800px] border border-solid rounded-3xl border-gray-1 px-2 md:px-4 py-0 2xl:py-5 3xl:py-10'>
                    <div className='mx-auto mt-5 3xl:mt-8'>
                        <img className="mx-auto w-32 md:w-40" src="img/ejecutivo.png" alt="Ejecutivo" />
                    </div>
                    <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] 3xl:text-[22px]  mt-0 md:mt-8 md:leading-relaxed'>“Distrito Yaax: un tesoro verde en<br></br> Cancún, Quintana Roo”</p>
                    <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] 3xl:text-[22px]  mt-5'>“Distrito Yaax: un tesoro verde en Cancún, Quintana Roo”</p>
                </div>
            </div>
        </a>
        </motion.div>
        </SwiperSlide>

        <SwiperSlide>
        <motion.div
        variants={cardVariants}
        whileHover="hover"
        whileTap="hover" // Para dispositivos táctiles
        >
            <div className='px-0 md:px-4 xl:px-6 3xl:px-6 py-0 md:py-5 2xl:py-6'>
                <div className='h-[200px] md:h-[340px] 3xl:h-[800px] border border-solid rounded-3xl border-gray-1 px-2 md:px-4 py-0 2xl:py-5 3xl:py-10'>
                    <div className='mx-auto mt-5 3xl:mt-8'>
                        <img className="mx-auto w-32 md:w-40" src="img/forbes.png" alt="FORBES" />
                    </div>
                    <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] 3xl:text-[22px]  mt-0 md:mt-10 md:leading-relaxed'>“Investing in real estate in Mexico’s<br></br> Riviera Maya offers affordable living <br></br>in paradise”</p>
                    <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] 3xl:text-[22px]  mt-5'>“Investing in real estate in Mexico’s Riviera Maya offers affordable living in paradise”</p>
                </div>
            </div>
        </motion.div>
        </SwiperSlide>

      </Swiper>    
      </section>
    </>
  );
}

export default Home;
