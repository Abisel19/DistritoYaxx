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
      <section className='hidden md:flex w-full mt-40 md:mt-60 3xl:mt-80 pb-0 md:pb-20 3xl:pb-28'>
            <div className='w-full md:w-5/12 2xl:w-5/12 3xl:w-6/12 pl-0 md:pl-14 grid justify-center content-center'>
              <h2 className='secondary text-brown text-base md:text-[58px] xl:text-[65px] 2xl:text-[70px] 3xl:text-[100px]'>AMENIDADES</h2>
            </div>
            <div className='w-full md:w-7/12 2xl:w-7/12 3xl:w-6/12 mt-0 md:-mt-6 xl:-mt-2 2xl:-mt-14 ml-0 md:ml-10 2xl:ml-14'>
                <div className='grid mt-0 md:mt-0 2xl:mt-12 3xl:mt-16 md:ml-4'>
                    <p className='quaternary text-base text-justify md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[24px] pr-3 md:pr-36 2xl:pr-40 3xl:pr-44 md:leading-snug'>Con 35 amenidades excepcionales, Distrito Yaax es un ecosistema cuidadosamente diseñado que ofrece una vida completa y apetecible. Hemos creado un entorno donde la sofisticación, la sostenibilidad y la innovación convergen para definir una experiencia residencial única.</p>
                    <p className='quaternary text-base text-justify d:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[24px] pr-3 md:pr-36 2xl:pr-40 3xl:pr-44 md:leading-snug md:mt-8'>Cancha de pádel, área de bbq, juegos infantiles, fire pits, alberca familiar, alberca para niños, sun deck, área lounge, pista jogging, terraza wellness, salón de usos, gimnasio, centro de negocios, kids club, infinity pool, bar.</p>
                </div>
            </div>
      </section>

      <section className='container md:hidden mt-20'>
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

      <section className='px-4 md:px-10 mt-4 md:mt-14 hidden md:grid'>
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
        <div className='w-full h-full'>
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
