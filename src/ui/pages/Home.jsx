import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {

    let slidesPerView = 3; 

    if (window.innerWidth < 600) {
        slidesPerView = 2;
    }

  return (
    <>
      <section className='bg-home'>
      </section>

      <section className='container mx-auto py-10 md:py-0 md:px-10'>
        <div className='md:flex py-0 md:py-20 xl:py-24'>
            <div className='w-full md:w-1/3 xl:w-1/3'>
                <div className="flex items-center justify-center">
                    <div className="text-brown text-4xl md:text-5xl xl:text-[55px] tracking-wider mt-0 md:mt-2 ml-0 md:-ml-10">
                        <h1 className='secondary md:leading-[4rem]'><a className='primary'>¿</a>QUI<span className="font-semibold">E</span>NES<br/><a className='pl-4'>SOMOS</a><a className='primary'>?</a></h1>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/3 lg:w-2/3 2xl:w-2/3 px-2 md:px-0'>
                <div className="flex items-center justify-center">
                    <div className="text-brown text-center md:text-left text-[11px] md:text-lg xl:text-[23px] px-0 md:px-0 xl:px-0 ml-0 md:ml-14 hidden md:grid">
                        <p className='primary leading-none md:leading-7 py-4 md:py-0'><a className='sextary'>Distrito Yaax®</a> es un proyecto conceptualizado y desarrollado <br/>por ALMIRA DESARRROLLOS. Empresa 100 % Mexicana  <br/>comprometida con el desarrollo económico y social de la región.</p>
                        <p className='primary leading-none md:leading-7 mt-0 md:mt-2'><a className='sextary'>YAAX</a> palabra maya que significa <a className='sextary'>VERDE.</a> Indica el origen y el <br/>principio, además de significar la naturaleza en crecimiento.</p>
                    </div>
                    <div className="text-brown text-center md:text-left text-[12px] md:text-lg xl:text-[23px] px-0 md:px-0 xl:px-0 ml-0 md:ml-14 grid md:hidden">
                        <p className='primary leading-none md:leading-7 py-4 md:py-0'><a className='sextary'>Distrito Yaax®</a> es un proyecto conceptualizado <br/>y desarrollado por ALMIRA DESARRROLLOS. Empresa 100 % <br/>Mexicana comprometida con el desarrollo económico <br/>y social de la región.</p>
                        <p className='primary leading-none md:leading-7 mt-0 md:mt-2'><a className='sextary'>YAAX</a> palabra maya que significa <a className='sextary'>VERDE.</a> Indica el <br/>origen y el principio, además de significar la naturaleza<br/> en crecimiento.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className='flex'>
        <div className='w-full md:w-4/12 bg-black-1 py-2 md:py-6 mx-auto'>
            <div className='text-center'>
                <h3 className='primary text-white text-[10px] md:text-[22px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>CONSTRUCCIÓN <br/><a className='sextary'>SOSTENIBLE</a></h3>
            </div>
        </div>

        <div className='w-full md:w-4/12 bg-gray-1 py-2 md:py-6 mx-auto'>
            <div className='text-center'>
                <h3 className='primary text-white text-[10px] md:text-[22px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>PRIMER PROYECTO <br/><a className='sextary'>SMART CITY EN CANCÚN</a></h3>
            </div>
        </div>

        <div className='w-full md:w-4/12 bg-black-1 py-2 md:py-6 mx-auto'>
            <div className='text-center'>
                <h3 className='primary text-white text-[10px] md:text-[22px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>60% DE <br/><a className='sextary'>ÁREAS VERDES</a></h3>
            </div>
        </div>
      </section>

      <section className='md:flex py-5 md:py-14'>
        <div className='w-full md:w-3/5'>
            <img src="/img/vista-laguna.png" alt="vista-a-la-laguna" />
        </div>

        <div className='w-full md:w-2/5 py-5 md:py-10 pl-0 md:pl-12'>
            <h2 className='secondary text-center md:text-left mt-4 md:mt-0 text-brown text-4xl md:text-6xl tracking-normal md:tracking-wide xl:leading-[68px]'>VISTAS A <br/>LA LAGUNA</h2>
            <p className='quaternary text-center md:text-left text-brown mt-5 md:mt-8 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
            <p className='quaternary text-center md:text-left text-brown mt-0 md:mt-1 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
            <p className='quaternary text-center md:text-left text-brown mt-0 md:mt-10 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
            <p className='quaternary text-center md:text-left text-brown mt-0 md:mt-1 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
        </div>

      </section>

      <section className='bg-torres'></section>

      <section className='pt-10 md:pt-20 pb-5 md:pb-5'>
        <h2 className='secondary text-brown text-center mx-auto text-4xl md:text-7xl pb-4 md:pb-20'>TIPOLOGÍAS</h2>

        <div className='hidden md:flex'>
        <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={0}
        slidesPerView={3}
        
        autoplay={{ delay: 5000}}
        >
        <SwiperSlide>
            <div className='w-full'>
                <img className='mx-auto topologias-img' src="img/tipologia-room.png" alt="ESTUDIO" />
                <p className='primary text-lg mt-2 md:mt-10 text-center'>Estudio - 47.80 m2</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full'>
                <img className='mx-auto topologias-img' src="img/tipologia-recamara.png" alt="1 RECÁMARA" />
                <p className='primary text-lg mt-2 md:mt-10 text-center'>1 Recámara - 65.55 m2</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full'>
                <img className='mx-auto topologias-img' src="img/tipologia-look.png" alt="LOOK OFF" />
                <p className='primary text-lg mt-2 md:mt-10 text-center'>Lock Off - 99.60 m2</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full'>
                <img className='mx-auto topologias-img' src="img/tipologia-look-a.png" alt="LOOK OFF A" />
                <p className='primary text-lg mt-2 md:mt-10 text-center'>Lock Off A - 95.25 m2</p>
            </div>
        </SwiperSlide>
        </Swiper>  
        </div>

        <div className='flex md:hidden px-5 md:px-0'>
            <div className='w-1/2'>
                <div className='w-full'>
                    <img className='mx-auto topologias-img' src="img/tipologia-room.png" alt="ESTUDIO" />
                    <p className='primary text-xs mt-5 md:mt-10 text-center'>Estudio - 47.80 m2</p>
                </div>
            </div>
            <div className='w-1/2'>
            <div className='w-full'>
                    <img className='mx-auto topologias-img' src="img/tipologia-recamara.png" alt="RECAMARA" />
                    <p className='primary text-xs mt-5 md:mt-10 text-center'>Estudio - 47.80 m2</p>
                </div>
            </div>
        </div>

        <div className='flex md:hidden px-5 md:px-0 mt-10 md:mt-0'>
            <div className='w-1/2'>
                <div className='w-full'>
                    <img className='mx-auto topologias-img' src="img/tipologia-look.png" alt="ESTUDIO" />
                    <p className='primary text-xs mt-5 md:mt-10 text-center'>Estudio - 47.80 m2</p>
                </div>
            </div>
            <div className='w-1/2'>
            <div className='w-full'>
                    <img className='mx-auto topologias-img' src="img/tipologia-look-a.png" alt="RECAMARA" />
                    <p className='primary text-xs mt-5 md:mt-10 text-center'>Estudio - 47.80 m2</p>
                </div>
            </div>
        </div>
        
      </section>

      <section className='flex container mx-auto px-0 md:px-10 2xl:px-10 mt-5 md:mt-32 xl:mt-40 pb-8 md:mb-12 xl:mb-20'>
        <div className='flex mx-auto justify-center align-item'>
            <h2 className='secondary text-brown mx-auto text-5xl md:text-[110px] xl:text-[158px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center'>R E N D E R S</h2>
        </div>
      </section>
      
      <section className='relative md:-mt-2 z-10'>
        <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
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
      
      <section className='hidden md:flex container w-full mx-auto px-10 2xl:px-32 pt-0 md:pt-40'>
            <div className='w-full md:w-1/2 pl-0 md:pl-14'>
                <h2 className='septimary text-brown text-base md:text-[45px] 2xl:text-[65px]'>TORRE ITZ<a className='text-base md:text-[48px] 2xl:text-[68px]'>É</a></h2>
                <h2 className='septimary text-brown mt-10 text-base md:text-[45px] 2xl:text-[65px]'>TORRE SAASIL</h2>
                <h3 className='quinary text-brown mt-0 md:mt-12 font-light text-base md:text-[18px] 2xl:text-[22px]'>RENTA VACACIONAL</h3>
                <div className='mt-0 md:-mt-60'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[400px] md:h-[320px] xl:w-[530px] xl:h-[320px]' viewBox="0 0 699.328 315.547">
                    <path id="Trazado_513" data-name="Trazado 513" d="M-5053,4172.055h605.487V3857.508h93.841" transform="translate(5053 -3857.008)" fill="none" stroke="#707070" stroke-width="1"/>
                  </svg>
                </div>
            </div>
            <div className='w-full md:w-1/2 mt-0 md:-mt-4 xl:-mt-12'>
                <h3 className='septimary text-brown text-base md:text-[32px]'>AMENIDADES</h3>
                <div className='flex mt-0 md:mt-8 xl:mt-12'>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] pr-3'>CANCHA DE PADEL</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>ÁREA DE BBQ</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>JUEGOS INFANTILES</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>FIRE PITS</p>
                </div>
                <div className='flex mt-0 md:mt-2 xl:mt-4'>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] pr-3'>PISCINA FAMILIAR</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>PISCINA PARA NIÑOS</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>SUN DECK</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>ÁREA LOUNGE</p>
                </div>
                <div className='flex mt-0 md:mt-6 xl:mt-10'>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] pr-3'>PISTA JOGGING</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>SALA WELLNESS</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>SALÓN DE USOS MÚLTIPLES</p>
                </div>
                <div className='flex md:mt-2 xl:mt-4'>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] pr-3'>CENTRO DE NEGOCIOS</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>KIDS CLUB</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>PISCINA SUN DECK</p>
                </div>
                <div className='flex md:mt-2 xl:mt-4'>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] pr-3'>ÁREA LOUNGE</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>BAR</p>
                    <p className='quaternary text-base md:text-[12px] xl:text-[16px] px-3'>GIMNASIO</p>
                </div>
            </div>
      </section>

      <section className='container md:hidden'>
        <div className='py-12'>
            <h2 className='secondary text-brown text-center mx-auto text-[42px]'>TORRE ITZ<a className='secondary text-[45px]'>É</a></h2>
            <h2 className='secondary text-brown -mt-4 text-center mx-auto text-[42px]'>TORRE SAASIL</h2>
            <p className='primary text-brown text-center text-[16px] -mt-2'>Renta Vacacional</p>
        </div>
        <div>
            <p className='septimary text-brown text-center text-[25px]'>AMENIDADES</p>
            <div className='flex justify-center mx-auto px-2 mt-6'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>CANCHA DE PADEL</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>ÁREA DE BBQ</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>JUEGOS INFANTILES</p>
            </div>
            <div className='flex justify-center mx-auto px-2 m-1'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>FIRE PITS</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>PISCINA FAMILIAR</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>PISCINA PARA NIÑOS</p>
            </div>
            <div className='flex justify-center mx-auto px-2 m-1'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>ÁREA LOUNGE</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>SUN DECK</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>GIMNASIO</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>PISTA JOGGING</p>
            </div>
            <div className='flex justify-center mx-auto px-2 m-1'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>BAR</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>SALA WELLNESS</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>SALÓN DE USOS</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>KIDS CLUB</p>
            </div>
            <div className='flex justify-center mx-auto px-2 m-1'>
                <p className='quaternary text-center text-brown text-[11px] pr-1'>PISCINA SUN DECK</p>
                <p className='quaternary text-center text-brown text-[11px] px-2'>CENTRO DE NEGOCIOS</p>
            </div>
        </div>
      </section>

      <section className='relative md:mt-28 px-5 md:px-10 py-10 md:py-0'>
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{ delay: 4000}}
        className='amenidades'
        >
        <SwiperSlide>
                <img className='mx-auto w-80 2xl:w-96' src="img/areas-verdes.png" alt="ESTUDIO" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='mx-auto w-80 2xl:w-96' src="img/padel.png" alt="1 RECÁMARA" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='mx-auto w-80 2xl:w-96' src="img/gimnasio.png" alt="LOOK OFF" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='mx-auto w-80 2xl:w-96' src="img/terraza.png" alt="LOOK OFF A" />
        </SwiperSlide>
        </Swiper>    
      </section>

      <section className='bg-location md:mt-36'></section>

      <section className='bg-black-1 -mt-1 md:mt-0 py-2 md:py-4 xl:py-10 2xl:py-12'>
        <div className='flex container mx-auto px-0 md:px-40 2xl:px-40 pb-8 md:mb-12 xl:mb-20'>
            <div className='flex mx-auto justify-center align-item'>
                <h2 className='secondary text-white mx-auto text-5xl md:text-[110px] xl:text-[140px] 2xl:text-[190px] md:tracking-widest absolute z-10 text-center mt-2 md:mt-8 xl:mt-14'>A L I A N Z A S</h2>
            </div>
        </div>
      </section>

      <section className='py-10 md:my-16 px-4 md:px-10'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{ delay: 4000}}
        className='alianzas'
        >
        <SwiperSlide>
            <div className='px-0 md:px-4'>
                <div className='card border border-solid rounded-3xl border-gray-1 px-2 md:px-4'>
                    <div className='mx-auto'>
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
                    <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] mt-0 md:mt-8 md:leading-relaxed'>Distrito Yaax® es un proyecto conceptualizado<br/> y desarrollado por ALMIRA DESARRROLLOS.<br/> Empresa 100 % Mexicana comprometida<br/> con el desarrollo económico y social <br/>de la región.</p>
                    <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] mt-3'>Distrito Yaax® es un proyecto<br/> conceptualizado y <br/>desarrollado por ALMIRA <br/>DESARRROLLOS. Empresa 100%<br/> Mexicana comprometida<br/> con el desarrollo económico y <br/>social de la región.</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='px-0 md:px-4'>
                <div className='card border border-solid rounded-3xl border-gray-1 px-2 md:px-4'>
                    <div className='mx-auto'>
                        <img className="mx-auto w-32 md:w-64" src="img/4S.png" alt="4S" />
                    </div>
                    <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] mt-0 md:mt-11 md:leading-relaxed'>4S es una de las empresas lideres en <br/>Latinoamerica en ingenieria de mercado <br/>y consultoría inmobiliaria.</p>
                    <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] mt-5'>4S es una de las empresas<br/> lideres en Latinoamerica en <br/>ingenieria de mercado <br/>y consultoría inmobiliaria.</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='px-0 md:px-4'>
                <div className='card border border-solid rounded-3xl border-gray-1 px-2 md:px-4'>
                    <div className='mx-auto'>
                        <img className="mx-auto w-80 mt-2 md:mt-8" src="img/banca-mifel.png" alt="banca-mifel" />
                    </div>
                    <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] mt-0 md:mt-12 md:leading-relaxed'>Brindamos seguridad jurídica a nuestros <br/> clientes, partiendo de un predio propio <br/> aportado a un fideicomiso de administración <br/> inmobiliaria con Banco MIFEL, cuyo único <br/> fines el desarrollo del proyecto.</p>
                    <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] mt-5'>Brindamos seguridad jurídica<br/> a nuestros clientes, partiendo<br/> de un predio propio aportado<br/> a un fideicomiso de <br/>administración inmobiliaria <br/>con Banco MIFEL, cuyo único <br/>fines el desarrollo del proyecto.</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='px-0 md:px-4'>
                <div className='card border border-solid rounded-3xl border-gray-1 px-2 md:px-4'>
                    <div className='mx-auto'>
                        <img className="mx-auto w-48 md:w-64 -mt-5 md:mt-0" src="img/cal.png" alt="banca-mifel" />
                    </div>
                    <p className='hidden md:grid primary text-brown text-center text-[10px] md:text-[12px] xl:text-[15px] mt-8 md:mt-0 md:leading-relaxed'>Cal y Mayor es la empresa de mayor <br/>reconocimiento en ingenierías y consultoría <br/>especializada en movilidad y transporte.</p>
                    <p className='grid md:hidden primary text-brown text-center text-[10px] xl:text-[15px] mt-0'>Cal y Mayor es la empresa de <br/>mayor reconocimiento en <br/>ingenierías y consultoría<br/> especializada en movilidad y<br/> transporte.</p>
                </div>
            </div>
        </SwiperSlide>

      </Swiper>    
      </section>

      <section className='bg-gray-1 py-28'>
        <div className='container mx-auto md:flex'>

            <div className='w-full md:w-2/5 px-4 md:px-16'>
                <h3 className='secondary text-center md:text-left text-4xl md:text-5xl text-white'>COTIZA</h3>
                <h4 className='primary text-center md:text-left text-base md:text-lg text-white mt-1 md:mt-1'>HAGAMOS TU SUEÑO REALIDAD</h4>
                <form className='flex flex-col md:items-start items-center mt-4'>
                    <input className='bg-gray-1 text-white border-b-2 border-white focus:outline-none px-7 primary text-[15px] md:text-[1.1rem] py-1' type="text" name='nombre'/>
                    <label className='text-white primary text-[15px] md:text-[1.1rem]' htmlFor="nombre">Nombre Completo</label>

                    <input className='bg-gray-1 text-white border-b-2 border-white focus:outline-none px-7 primary text-[15px] md:text-[1.1rem] py-3' type="email" name='mail'/>
                    <label className='text-white primary text-[15px] md:text-[1.1rem]' htmlFor="email">Correo Electrónico</label>

                    <input className='bg-gray-1 text-white border-b-2 border-white focus:outline-none px-7 primary text-[15px] md:text-[1.1rem] py-3' type="number" name='tel'/>
                    <label className='text-white primary text-[15px] md:text-[1.1rem]' htmlFor="tel">Whatsapp</label>

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

export default Home;
