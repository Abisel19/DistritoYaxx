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

    <section className='hidden md:flex w-full mt-40 md:mt-60 3xl:mt-80 pb-0 md:pb-20 3xl:pb-28'>
            <div className='w-full md:w-5/12 2xl:w-5/12 3xl:w-6/12 pl-0 md:pl-14 grid justify-center content-center'>
              <h2 className='secondary text-brown text-base md:text-[58px] xl:text-[65px] 2xl:text-[70px] 3xl:text-[100px]'>AMENIDADES</h2>
            </div>
            <div className='w-full md:w-7/12 2xl:w-7/12 3xl:w-6/12 mt-0 md:-mt-6 xl:-mt-2 2xl:-mt-14 ml-0 md:ml-10 2xl:ml-14'>
                <div className='GRID mt-0 md:mt-0 2xl:mt-12 3xl:mt-16 md:ml-4'>
                    <p className='quaternary text-base text-justify md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[24px] pr-3 md:pr-36 2xl:pr-40 3xl:pr-44 md:leading-snug'>En Distrito Yaax, contamos con 4 modelos de departamentos diseñados con todas las comodidades para una vida plena y armoniosa. Contamos con una gama de opciones que se adaptan a tus preferencias y crean el escenario ideal para tu vida.</p>
                    <p className='quaternary mt-4 text-base text-justify md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[24px] pr-3 md:pr-36 2xl:pr-40 3xl:pr-44 md:leading-snug'>Descubre la comodidad en su máxima expresión en cualquiera de nuestros 4 modelos de departamentos que han sido meticulosamente diseñados para abrazar las necesidades y gustos de aquellos que buscan la comodidad en su forma más exclusiva. </p>
                </div>
            </div>
      </section>

      <section className='pt-2 md:pt-5 pb-5 md:pb-5 mt-20 md:mt-24'>
        <h2 className='secondary text-brown text-center mx-auto text-4xl md:text-7xl 2xl:text-[80px] 3xl:text-[90px] pb-4 md:pb-20 3xl:pb-40'>MODELOS</h2>

          <div className='flex px-0 md:px-56 2xl:px-96'>
          <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}                
          >
              <SwiperSlide>
                  <div className='w-full'>
                  <div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                  <a href='#estudio'><motion.img
                      className='mx-auto py-4 w-[200px] md:w-[320px] 3xl:w-[380px]'
                      src="img/tipologia-room.png"
                      alt="ESTUDIO"
                      variants={imageVariants}
                      initial="normal"
                      whileHover="hover"
                      whileTap="hover" 
                      /></a>
                      </div>
                      <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>Estudio - 47.80 m2</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='w-full'>
                  <div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                  <a href='#habitacion'><motion.img
                      className='mx-auto py-4 w-[310px] md:w-[550px] 3xl:w-[610px]'
                      src="img/tipologia-recamara.png"
                      alt="1 RECÁMARA"
                      variants={imageVariants}
                      initial="normal"
                      whileHover="hover"
                      whileTap="hover" 
                      /></a>
                      </div>
                      <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>1 Recámara - 65.55 m2</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                      <div className='w-full'>
                      <div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                      <a href='#lock-off'><motion.img
                      className='mx-auto py-4 w-[310px] md:w-[600px] 3xl:w-[660px]'
                      src="img/tipologia-look.png"
                      alt="LOCK OFF"
                      variants={imageVariants}
                      initial="normal"
                      whileHover="hover"
                      whileTap="hover" 
                      /></a>
                      </div>
                      <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>Lock Off - 99.60 m2</p>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='w-full'>
                      <div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                      <a href='#lock-off-a'><motion.img
                      className='mx-auto py-4 w-[310px] md:w-[660px] 3xl:w-[720px]'
                      src="img/tipologia-look-a.png"
                      alt="LOCK OFF A"
                      variants={imageVariants}
                      initial="normal"
                      whileHover="hover"
                      whileTap="hover" 
                      /></a>
                      </div>
                      <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>Lock Off A - 95.25 m2</p>
                  </div>
              </SwiperSlide>
          </Swiper>
          </div>
      
      </section>

      <section className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-5 md:mt-32 xl:mt-20 2xl:mt-48 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>ESTUDIO</h2>
        </div>
      </section>
      
      <section id="estudio" data-animate-in="fadeIn" className='relative md:-mt-2 z-10 mb-6'>
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
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('estudio-3')}>
                                          <img src="img/estudio/estudio-3.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick('estudio-4')}>
                                          <img src="img/estudio/estudio-4.jpg" alt="" />
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
      </section>

      <section className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-5 md:mt-24 xl:mt-40 2xl:mt-48 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>1 RECÁMARA</h2>
        </div>
      </section>
      
      <section id="habitacion" className='relative md:-mt-2 z-10 mb-6'>
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
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick1('recamara-5')}>
                                          <img src="img/recamara/recamara-5.jpg" alt="" />
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
      </section>

      <section className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-5 md:mt-24 xl:mt-42 2xl:mt-48 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>LOCK OFF</h2>
        </div>
      </section>
      
      <section id="lock-off" className='relative md:-mt-2 z-10 mb-6'>
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
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick2('lock-off-4')}>
                                          <img src="img/lock-off/lock-off-4.jpg" alt="" />
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
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick2('lock-off-5')}>
                                          <img src="img/lock-off/lock-off-5.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick2('lock-off-6')}>
                                          <img src="img/lock-off/lock-off-6.jpg" alt="" />
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
      </section>

      <section className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-5 md:mt-24 xl:mt-42 2xl:mt-48 pb-8 md:mb-12 xl:mb-20 2xl:mb-32'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>LOCK OFF A</h2>
        </div>
      </section>
      
      <section id="lock-off-a" className='relative md:-mt-2 z-10 mb-6'>
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
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick3('lock-off-a-5')}>
                                          <img src="img/lock-off-a/lock-off-a-5.jpg" alt="" />
                                      </div>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='w-full px-2'>
                                      <div className='border-2 md:border-8	border-black hover:scale-95 transition-transform' onClick={() => handleImageClick3('lock-off-a-6')}>
                                          <img src="img/lock-off-a/lock-off-a-6.jpg" alt="" />
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
      </section>

    </>
  );
}

export default Modelos;
