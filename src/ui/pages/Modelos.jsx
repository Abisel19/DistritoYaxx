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

        <div className='flex px-10 md:px-56 2xl:px-80'>
        <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}        
        >
            <SwiperSlide>
                <div className='w-full'>
                    <a href='#estudio'><div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                    <motion.img
                    className='mx-auto py-4 w-[200px] md:w-[320px] 3xl:w-[380px]'
                    src="img/tipologia-room.png"
                    alt="ESTUDIO"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
                    </div></a>
                    <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>Estudio - 47.80 m2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-full'>
                    <a href='#habitacion'><div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                    <motion.img
                    className='mx-auto py-4 w-[550px] 3xl:w-[610px]'
                    src="img/tipologia-recamara.png"
                    alt="1 RECÁMARA"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
                    </div></a>
                    <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>1 Recámara - 65.55 m2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full'>
                    <a href='#look-off'><div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                    <motion.img
                    className='mx-auto py-4 w-[600px] 3xl:w-[660px]'
                    src="img/tipologia-look.png"
                    alt="LOOK OFF"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
                    </div></a>
                    <p className='primary text-lg text-center 2xl:text-xl 3xl:text-2xl'>Lock Off A - 99.60 m2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full'>
                    <a href='#look-off-a'><div className='h-[380px] md:h-[600px] 3xl:h-[700px]'>
                    <motion.img
                    className='mx-auto py-4 w-[660px] 3xl:w-[720px]'
                    src="img/tipologia-look-a.png"
                    alt="LOOK OFF A"
                    variants={imageVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="hover" 
                    />
                    </div></a>
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
      
      <section id="estudio" data-animate-in="up" className='relative md:-mt-2 z-10 mb-6'>
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
      
      <section id="habitacion" data-animate-in="up" className='relative md:-mt-2 z-10 mb-6'>
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
      
      <section id="look-off" data-animate-in="up" className='relative md:-mt-2 z-10 mb-6'>
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
      
      <section id="look-off-a" data-animate-in="up" className='relative md:-mt-2 z-10 mb-6'>
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

    </>
  );
}

export default Modelos;
