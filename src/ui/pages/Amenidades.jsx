import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import AnimatedSection from '@components/AnimatedSection';
import { useInView } from "react-intersection-observer";


function Amenidades() {

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
      <section className='hidden md:flex w-full mx-auto px-10 2xl:px-32 pt-0 md:pt-60'>
            <div className='w-full md:w-5/12 2xl:w-5/12 3xl:w-6/12 pl-0 md:pl-14 2xl:pl-32'>
                <h2 className='septimary text-brown text-base md:text-[45px] 2xl:text-[65px] 3xl:text-[100px]'>TORRE ITZ<a className='text-base md:text-[48px] 2xl:text-[68px] 3xl:text-[103px]'>É</a></h2>
                <h2 className='septimary text-brown mt-10 3xl:mt-16 text-base md:text-[45px] 2xl:text-[65px] 3xl:text-[100px]'>TORRE SAASIL</h2>
                <h3 className='quinary text-brown mt-0 md:mt-12 font-light text-base md:text-[18px] 2xl:text-[22px] 3xl:text-[40px]'>RENTA VACACIONAL</h3>
                <div className='mt-0 md:-mt-60 2xl:-mt-56 2xl:ml-10 3xl:ml-20'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[400px] md:h-[400px] xl:w-[420px] xl:h-[380px] 2xl:w-[500px] 2xl:h-[300px] 3xl:w-[900px] 3xl:h-[300px]' viewBox="0 0 699.328 315.547">
                    <path id="Trazado_513" data-name="Trazado 513" d="M-5053,4172.055h605.487V3857.508h93.841" transform="translate(5053 -3857.008)" fill="none" stroke="#707070" stroke-width="1"/>
                  </svg>
                </div>
            </div>
            <div className='w-full md:w-7/12 2xl:w-6/12 3xl:w-6/12 mt-0 md:-mt-4 2xl:-mt-8 2xl:ml-8'>
                <h3 className='septimary text-brown text-base md:text-[34px] 2xl:text-[40px] 3xl:text-[80px] 2xl:ml-4'>AMENIDADES</h3>
                <div className='flex mt-0 md:mt-8 2xl:mt-12 3xl:mt-16'>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] pr-3 2xl:px-4 3xl:pr-6'>CANCHA DE PADEL</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>ÁREA DE BBQ</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>JUEGOS INFANTILES</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>FIRE PITS</p>
                </div>
                <div className='flex mt-0 md:mt-2 2xl:mt-5 3xl:mt-6'>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] pr-3 2xl:px-4 3xl:pr-6'>ALBERCA FAMILIAR</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>ALBERCA PARA NIÑOS</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>SUN DECK</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>ÁREA LOUNGE</p>
                </div>
                <div className='flex mt-0 md:mt-2 2xl:mt-5 3xl:mt-6'>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] pr-3 2xl:px-4 3xl:pr-6'>PISTA JOGGING</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>TERRAZA WELLNESS</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>SALÓN DE USOS</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>GIMNASIO</p>
                </div>
                <div className='flex md:mt-2 2xl:mt-5 3xl:mt-6'>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] pr-3 2xl:px-4 3xl:pr-6'>CENTRO DE NEGOCIOS</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>KIDS CLUB</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>INFINITY POOL</p>
                    <p className='quaternary text-base md:text-[12px] 2xl:text-[15.5px] 3xl:text-[22px] px-3 2xl:px-4 3xl:px-6'>BAR</p>
                </div>

            </div>
      </section>

      <section className='container md:hidden mt-24'>
        <div className='py-10'>
            <h2 className='secondary text-brown text-center mx-auto text-[42px]'>TORRE ITZ<a className='secondary text-[45px]'>É</a></h2>
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
                <p className='quaternary text-center text-brown text-[11px] pr-1'>SALÓN DE USOS</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>PISTA JOGGING </p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>CENTRO DE NEGOCIOS</p>
            </div>
            <div className='flex justify-center mx-auto px-2 m-2'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>KIDS CLUB</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>INFINITY POOL</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>BAR</p>
            </div>
        </div>
      </section>

      <section className='px-4 md:px-10 mt-4 md:mt-14 hidden md:flex'>
        <div className='flex w-full'>
            <div className='w-1/3'>
                <motion.img
                    className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                    src="img/padel.png"
                    alt="PADEL"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
            </div>
            <div className='w-1/3'>
                <motion.img
                    className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                    src="img/areas-verdes.png"
                    alt="AREAS VERDES"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
            </div>
            <div className='w-1/3'>
                <motion.img
                    className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                    src="img/gimnasio.png"
                    alt="GIMNASIO"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
            </div>
        </div>
        <div className='flex mt-4 md:mt-12'>
            <div className='w-1/3'>
                <motion.img
                    className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                    src="img/terraza.png"
                    alt="TERRAZA"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
            </div>
            <div className='w-1/3'>
                <motion.img
                    className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                    src="img/sky-lounge.png"
                    alt="sky lounge"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
            </div>
            <div className='w-1/3'>
                <motion.img
                    className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                    src="img/snack-bar.png"
                    alt="snack bar"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
            </div>
        </div>
      </section>

      <section className='px-4 md:px-10 mt-4 md:mt-14 md:hidden grid'> 
        <div className='flex w-full'>
            <div className='w-1/2 px-4 mt-4 mb-2'>
                <motion.img
                    className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                    src="img/padel.png"
                    alt="PADEL"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
            </div>
            <div className='w-1/2 px-4 mt-4 mb-2'>
                <motion.img
                    className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                    src="img/areas-verdes.png"
                    alt="AREAS VERDES"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
            </div>
        </div>
        <div className='flex'>
            <div className='w-1/2 px-4 mt-4 mb-2'>
                <motion.img
                    className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                    src="img/gimnasio.png"
                    alt="GIMNASIO"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
            </div>
            <div className='w-1/2 px-4 mt-4 mb-2'>
                <motion.img
                    className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                    src="img/terraza.png"
                    alt="TERRAZA"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
            </div>
        </div>
        <div className='flex'>
            <div className='w-1/2 px-4 mt-4 mb-2'>
                  <motion.img
                      className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                      src="img/sky-lounge.png"
                      alt="sky lounge"
                      variants={imageVariants}
                      initial="normal"
                      whileHover="hover"
                      whileTap="hover" 
                      />
            </div>
            <div className='w-1/2 px-4 mt-4 mb-2'>
                  <motion.img
                      className='mx-auto w-80 2xl:w-96 3xl:w-[550px] py-0 md:py-4'
                      src="img/snack-bar.png"
                      alt="snack bar"
                      variants={imageVariants}
                      initial="normal"
                      whileHover="hover"
                      whileTap="hover" 
                      />
            </div>
        </div>
      </section>

      <section data-animate-in="fadeIn" className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-10 md:mt-32 xl:mt-40 2xl:mt-48 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>EXTERIORES</h2>
        </div>
      </section>

      <section data-animate-in="fadeIn" className='relative md:-mt-2 z-10 mb-6'>
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 4000}}
        className='amenidades'
        >
        <SwiperSlide>
                <motion.img
                className='mx-auto px-1 w-full'
                src="img/exteriores-1.png"
                alt="AREAS VERDES"
                initial="normal"
                whileHover="hover"
                whileTap="hover" 
                />
        </SwiperSlide>
        <SwiperSlide>
                <motion.img
                className='mx-auto px-1 w-full'
                src="img/exteriores-2.png"
                alt="PADEL"
                initial="normal"
                whileHover="hover"
                whileTap="hover" 
                />
        </SwiperSlide>
        <SwiperSlide>
                <motion.img
                className='mx-auto px-1 w-full'
                src="img/exteriores-3.png"
                alt="GIMNASIO"
                initial="normal"
                whileHover="hover"
                whileTap="hover" 
                />
        </SwiperSlide>
        <SwiperSlide>
                <motion.img
                className='mx-auto px-1 w-full'
                src="img/exteriores-4.png"
                alt="TERRAZA"
                initial="normal"
                whileHover="hover"
                whileTap="hover" 
                />
        </SwiperSlide>
        <SwiperSlide>
                <motion.img
                className='mx-auto px-1 w-full'
                src="img/exteriores-5.png"
                alt="TERRAZA"
                initial="normal"
                whileHover="hover"
                whileTap="hover" 
                />
        </SwiperSlide>
        </Swiper>    
      </section>

      <section data-animate-in="fadeIn" className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-10 md:mt-32 xl:mt-40 2xl:mt-48 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>INTERIORES</h2>
        </div>
      </section>
      
      <section data-animate-in="up" className='relative md:-mt-2 z-10 mb-6'>
        <div className='w-full flex'>
            <div className='w-1/3 mx-1 md:mx-2'>
                <img src="/img/interiores-1.png" alt="INTEREIORES DISTRITO YAAX" />
            </div>
            <div className='w-1/3 mx-1 md:mx-2'>
                <img src="/img/interiores-2.png" alt="INTEREIORES DISTRITO YAAX" />
            </div>
            <div className='w-1/3 mx-1 md:mx-2'>
                <img src="/img/interiores-3.png" alt="INTEREIORES DISTRITO YAAX" />
            </div>
        </div>
      </section>

      <section data-animate-in="fadeIn" className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-10 md:mt-32 xl:mt-40 2xl:mt-36 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>ROOF TOP</h2>
        </div>
      </section>
      
      <section data-animate-in="up" className='relative md:-mt-2 z-10'>
        <div className='w-full flex'>
            <img src="/img/roof-top-1.png" alt="INTEREIORES DISTRITO YAAX" />
        </div>
      </section>

      <section data-animate-in="up" className='relative md:-mt-4 z-10 mb-6'>
        <div className='w-full flex'>
            <div className='w-1/3 mx-1 md:mx-2'>
                <img src="/img/roof-1.png" alt="INTEREIORES DISTRITO YAAX" />
            </div>
            <div className='w-1/3 mx-1 md:mx-2'>
                <img src="/img/roof-2.png" alt="INTEREIORES DISTRITO YAAX" />
            </div>
            <div className='w-1/3 mx-1 md:mx-2'>
                <img src="/img/roof-3.png" alt="INTEREIORES DISTRITO YAAX" />
            </div>
        </div>
      </section>
    </>
  );
}

export default Amenidades;
