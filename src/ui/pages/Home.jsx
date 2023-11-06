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
            <h2 className='secondary text-brown text-base md:text-6xl tracking-normal md:tracking-wide xl:leading-[68px]'>VISTAS A <br/>LA LAGUNA</h2>
            <p className='quaternary text-brown mt-0 md:mt-8 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
            <p className='quaternary text-brown mt-0 md:mt-1 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
            <p className='quaternary text-brown mt-0 md:mt-10 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
            <p className='quaternary text-brown mt-0 md:mt-1 text-base md:text-2xl'>Lorem ipsum lorem ipsum lorem ipsum </p>
        </div>

      </section>

      <section className='bg-torres'></section>

      <section className='md:py-20'>
        <h2 className='secondary text-brown text-center mx-auto text-lg md:text-7xl pb-20'>TIPOLOGÍAS</h2>

        <div className='flex'>
        <Swiper
        modules={[Autoplay]}
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
        
      </section>

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
        autoplay={{ delay: 4000}}
        className='amenidades'
        >
        <SwiperSlide>
                <img className='mx-auto w-80' src="img/areas-verdes.png" alt="ESTUDIO" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='mx-auto w-80' src="img/padel.png" alt="1 RECÁMARA" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='mx-auto w-80' src="img/gimnasio.png" alt="LOOK OFF" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='mx-auto w-80' src="img/terraza.png" alt="LOOK OFF A" />
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

      <section className='py-10 md:my-16 px-10'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 4000}}
        className='alianzas'
        >
        <SwiperSlide>
            <div className='px-0 md:px-4'>
                <div className='card border border-solid rounded-lg border-gray-1 px-5 md:px-4'>
                    <div className='mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg"  className="mx-auto" width="182.207" height="103.864" viewBox="0 0 182.207 103.864">
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
                    <p className='primary text-center text-[10px] md:text-[12px] xl:text-[15px] mt-0 md:mt-8 md:leading-relaxed'>Distrito Yaax® es un proyecto conceptualizado<br/> y desarrollado por ALMIRA DESARRROLLOS.<br/> Empresa 100 % Mexicana comprometida<br/> con el desarrollo económico y social <br/>de la región.</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='px-0 md:px-4'>
                <div className='card border border-solid rounded-lg border-gray-1 px-5 md:px-4'>
                    <div className='mx-auto'>
                        <img className="mx-auto" src="img/4S.png" alt="4S" />
                    </div>
                    <p className='primary text-center text-[10px] md:text-[12px] xl:text-[15px] mt-0 md:mt-12 md:leading-relaxed'>4S es una de las empresas lideres en <br/>Latinoamerica en ingenieria de mercado <br/>y consultoría inmobiliaria.</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='px-0 md:px-4'>
                <div className='card border border-solid rounded-lg border-gray-1 px-5 md:px-4'>
                    <div className='mx-auto'>
                        <img className="mx-auto w-80" src="img/banca-mifel.png" alt="banca-mifel" />
                    </div>
                    <p className='primary text-center text-[10px] md:text-[12px] xl:text-[15px] mt-0 md:mt-24 md:leading-relaxed'>Brindamos seguridad jurídica a nuestros clientes,<br/> partiendo de un predio propio <br/> aportado a un fideicomiso de administración <br/> inmobiliaria con Banco MIFEL, cuyo único <br/> fines el desarrollo del proyecto.</p>
                </div>
            </div>
        </SwiperSlide>

      </Swiper>    
      </section>

    </>
  );
}

export default Home;
