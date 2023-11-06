import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Home() {

  return (
    <>
      <section className='bg-home'>
      </section>

      <section className='container mx-auto px-10'>
        <div className='flex py-5 md:py-20 xl:py-24'>
            <div className='w-full md:w-1/3 xl:w-1/3'>
                <div className="flex items-center justify-center">
                    <div className="text-black text-2xl md:text-5xl xl:text-[55px] tracking-wider mt-0 md:mt-2 ml-0 md:-ml-10">
                        <h1 className='secondary leading-[4rem]'><a className='primary'>¿</a>QUI<span className="font-semibold">E</span>NES<br />SOMOS<a className='primary'>?</a></h1>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/3 lg:w-2/3 2xl:w-2/3'>
                <div className="flex items-center justify-center">
                    <div className="text-black text-base md:text-lg xl:text-[23px] px-0 md:px-0 xl:px-0 ml-0 md:ml-14">
                        <p className='primary leading-none md:leading-7'><a className='sextary'>Distrito Yaax®</a> es un proyecto conceptualizado y desarrollado <br/>por ALMIRA DESARRROLLOS. Empresa 100 % Mexicana  <br/>comprometida con el desarrollo económico y social de la región.</p>
                        <p className='primary leading-none md:leading-7 mt-0 md:mt-2'><a className='sextary'>YAAX</a> palabra maya que significa <a className='sextary'>VERDE.</a> Indica el origen y el <br/>principio, además de significar la naturaleza en crecimiento.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className='flex'>
        <div className='w-full md:w-4/12 bg-black-1 py-2 md:py-6 mx-auto'>
            <div className='text-center'>
                <h3 className='primary text-white text-base md:text-[22px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>CONSTRUCCIÓN <br/><a className='sextary'>SOSTENIBLE</a></h3>
            </div>
        </div>

        <div className='w-full md:w-4/12 bg-gray-1 py-2 md:py-6 mx-auto'>
            <div className='text-center'>
                <h3 className='primary text-white text-base md:text-[22px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>PRIMER PROYECTO <br/><a className='sextary'>SMART CITY EN CANCÚN</a></h3>
            </div>
        </div>

        <div className='w-full md:w-4/12 bg-black-1 py-2 md:py-6 mx-auto'>
            <div className='text-center'>
                <h3 className='primary text-white text-base md:text-[22px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>60% DE <br/><a className='sextary'>ÁREAS VERDES</a></h3>
            </div>
        </div>
      </section>

      <section className='flex py-5 md:py-14'>
        <div className='w-full md:w-3/5'>
            <img src="/img/vista-laguna.png" alt="vista-a-la-laguna" />
        </div>

        <div className='w-full md:w-2/5 py-0 md:py-10 pl-0 md:pl-12'>
            <h2 className='secondary text-black text-base md:text-6xl tracking-normal md:tracking-wide xl:leading-[68px]'>VISTAS A <br/>LA LAGUNA</h2>
            <p className='quaternary mt-0 md:mt-8 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
            <p className='quaternary mt-0 md:mt-1 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
            <p className='quaternary mt-0 md:mt-10 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
            <p className='quaternary mt-0 md:mt-1 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
        </div>

      </section>

      <section className='bg-torres'></section>

      <section className='container px-0 md:px-10 2xl:px-10 mt-5 md:mt-32 xl:mt-40 mx-auto py-10'>
        <div className='w-full mx-auto justify-center items-center'>
            <h2 className='secondary text-brown text-base md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>R E N D E R S</h2>
        </div>
      </section>

      <section className='relative md:-mt-2 z-10'>
        <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000}}
        >
        <SwiperSlide>
            <div className='w-full'>
                <img className='bg-room' src="img/bg-room.png" alt="ESTUDIO" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full'>
                <img className='bg-room' src="img/bg-room-1.png" alt="1 RECÁMARA" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full'>
                <img className='bg-room' src="img/bg-look-off.png" alt="LOOK OFF" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full'>
                <img className='bg-room' src="img/bg-look-off-a.png" alt="LOOK OFF A" />
            </div>
        </SwiperSlide>
        </Swiper>    
      </section>
      
      <section className='container w-full mx-auto px-10 pt-0 md:pt-40'>
        <div className='flex'>
            <div className='w-full md:w-1/2 pl-0 md:pl-14'>
                <h2 className='septimary text-brown text-base md:text-[55px]'>TORRE ITZ<a className='text-base md:text-[58px]'>É</a></h2>
                <h2 className='septimary text-brown mt-10 text-base md:text-[55px]'>TORRE SAASIL</h2>
                <h3 className='quinary text-brown mt-0 md:mt-12 font-light text-base md:text-[22px]'>RENTA VACACIONAL</h3>
                <div className='mt-0 md:-mt-60'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='line' viewBox="0 0 699.328 315.547">
                    <path id="Trazado_513" data-name="Trazado 513" d="M-5053,4172.055h605.487V3857.508h93.841" transform="translate(5053 -3857.008)" fill="none" stroke="#707070" stroke-width="1"/>
                  </svg>
                </div>
            </div>
            <div className='w-full md:w-1/2 mt-0 md:-mt-12'>
                <h3 className='septimary text-brown text-base md:text-[32px]'>AMENIDADES</h3>
                <div className='flex mt-0 md:mt-12'>
                    <p className='quaternary text-base md:text-[17px] pr-2'>CANCHA DE PADEL</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>ÁREA DE BBQ</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>JUEGOS INFANTILES</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>FIRE PITS</p>
                </div>
                <div className='flex mt-0 md:mt-4'>
                    <p className='quaternary text-base md:text-[17px] pr-2'>PISCINA FAMILIAR</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>PISCINA PARA NIÑOS</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>SUN DECK</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>ÁREA LOUNGE</p>
                </div>
                <div className='flex mt-0 md:mt-10'>
                    <p className='quaternary text-base md:text-[17px] pr-2'>PISTA JOGGING</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>SALA WELLNESS</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>SALÓN DE USOS MÚLTIPLES</p>
                </div>
                <div className='flex mt-0 md:mt-4'>
                    <p className='quaternary text-base md:text-[17px] pr-2'>CENTRO DE NEGOCIOS</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>KIDS CLUB</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>PISCINA SUN DECK</p>
                </div>
                <div className='flex mt-0 md:mt-4'>
                    <p className='quaternary text-base md:text-[17px] pr-2'>ÁREA LOUNGE</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>BAR</p>
                    <p className='quaternary text-base md:text-[17px] px-2'>GIMNASIO</p>
                </div>
            </div>
        </div>
      </section>

      <section className='relative md:mt-28 px-10'>
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000}}
        >
        <SwiperSlide>
                <img className='w-80' src="img/areas-verdes.png" alt="ESTUDIO" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='w-80' src="img/padel.png" alt="1 RECÁMARA" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='w-80' src="img/gimnasio.png" alt="LOOK OFF" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='w-80' src="img/terraza.png" alt="LOOK OFF A" />
        </SwiperSlide>
        </Swiper>    
      </section>

      <section className='bg-location md:mt-36'></section>

      <section className='bg-black-1'>
        <div className='container px-0 md:px-12 2xl:px-12 mx-auto md:pt-24 md:pb-9'>
            <div className='w-full mx-auto justify-center items-center'>
                <h2 className='secondary text-white text-base md:text-[110px] xl:text-[130px] 2xl:text-[160px] md:tracking-widest absolute z-10 text-center'>A L I A N Z A S</h2>
            </div>
        </div>
      </section>

    </>
  );
}

export default Home;
