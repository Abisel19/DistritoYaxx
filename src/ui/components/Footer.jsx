import React from 'react';

function Footer() {
  return (
    <>
          <section className='bg-gray-1 py-28 mt-0 md:mt-0'>
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

      <footer className='bg-black'>
      <div className="flex justify-center p-8 md:pt-12 xl:pt-12">
        <a href="/">
          <img className="md:hidden" src="/img/Logo-s.png" alt="" />
          <img className="hidden sm:block md:w-24 hover:scale-110 transition-transform" src="/img/Logo-m.png" alt="" />
        </a>
      </div>

      <div className="flex items-center flex-col justify-center md:flex-row md:space-x-16">
        <a className="text-white text-[14px] primary md:text-[14px] xl:text-[15px] 2xl:text-[18px] pt-1 hover:scale-110 transition-transform" href="/">QUIÉNES SOMOS</a>
        <a className="text-white text-[14px] primary md:text-[14px] xl:text-[15px] 2xl:text-[18px] pt-1 hover:scale-110 transition-transform" href="/acerca">MODELOS</a>
        <a className="text-white text-[14px] primary md:text-[14px] xl:text-[15px] 2xl:text-[18px] pt-1 hover:scale-110 transition-transform" href="/proyecto">AMENIDADES</a>
        <a className="text-white text-[14px] primary md:text-[14px] xl:text-[15px] 2xl:text-[18px] pt-1 hover:scale-110 transition-transform" href="#">UBICACIÓN</a>
        <a className="text-white text-[14px] primary md:text-[14px] xl:text-[15px] 2xl:text-[18px] pt-1 hover:scale-110 transition-transform" href="#">TOUR VIRTUAL</a>
        <a className="text-white text-[14px] primary md:text-[14px] xl:text-[15px] 2xl:text-[18px] pt-1 hover:scale-110 transition-transform" href="/contacto">CONTACTO</a>
      </div>

      <div className="md:hidden flex items-center justify-center space-x-8 pt-6 pb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="10.303" height="19.235" viewBox="0 0 10.303 19.235">
          <path id="Path_547" data-name="Path 547" d="M9.627,10.851l.534-3.481H6.822V5.11A1.74,1.74,0,0,1,8.783,3.23H10.3V.266a18.508,18.508,0,0,0-2.7-.235C4.855.031,3.058,1.7,3.058,4.716V7.37H0v3.481H3.058v8.415H6.822V10.851Z" transform="translate(0 -0.031)" fill="#fff"/>
        </svg>
            
        <svg xmlns="http://www.w3.org/2000/svg" width="19.235" height="19.236" viewBox="0 0 19.235 19.236">
          <g id="Group_264" data-name="Group 264" transform="translate(-202.445 -4951.921)">
            <path id="Path_544" data-name="Path 544" d="M96.327,6.348a1.128,1.128,0,1,0,1.128,1.128,1.128,1.128,0,0,0-1.128-1.128" transform="translate(120.828 4949.009)" fill="#fff"/>
            <path id="Path_545" data-name="Path 545" d="M84.074,9.008a4.737,4.737,0,1,0,4.737,4.737,4.743,4.743,0,0,0-4.737-4.737m0,7.772a3.034,3.034,0,1,1,3.034-3.034,3.038,3.038,0,0,1-3.034,3.034" transform="translate(128.066 4947.795)" fill="#fff"/>
            <path id="Path_546" data-name="Path 546" d="M83.673,19.266h-7.68a5.784,5.784,0,0,1-5.777-5.778V5.808A5.784,5.784,0,0,1,75.993.03h7.68a5.785,5.785,0,0,1,5.778,5.778v7.68a5.785,5.785,0,0,1-5.778,5.778M75.993,1.84a3.972,3.972,0,0,0-3.968,3.968v7.68a3.972,3.972,0,0,0,3.968,3.968h7.68a3.972,3.972,0,0,0,3.968-3.968V5.808A3.972,3.972,0,0,0,83.673,1.84Z" transform="translate(132.229 4951.892)" fill="#fff"/>
          </g>
        </svg>
            
        <svg xmlns="http://www.w3.org/2000/svg" width="16.076" height="18.446" viewBox="0 0 16.076 18.446">
          <g id="Group_244" data-name="Group 244" transform="translate(0)">
            <path id="Path_458" data-name="Path 458" d="M-881.714,781.505a4.42,4.42,0,0,1-3.477-3.915v-.407h-3.177v12.608a2.671,2.671,0,0,1-2.68,2.661,2.671,2.671,0,0,1-2.116-1.054h0a2.67,2.67,0,0,1,.511-3.741,2.67,2.67,0,0,1,2.425-.418v-3.228A5.837,5.837,0,0,0-896.81,789a5.837,5.837,0,0,0,1.607,4.878,5.838,5.838,0,0,0,8.255.095,5.838,5.838,0,0,0,1.757-4.174v-6.443a7.545,7.545,0,0,0,4.4,1.407V781.6A4.46,4.46,0,0,1-881.714,781.505Z" transform="translate(896.865 -777.184)" fill="#fff"/>
          </g>
        </svg>
      </div>

      <div div className="flex flex-col items-center pt-4 md:pt-8 md:flex-row md:justify-center">
        <a className="text-white primary text-[13px] md:text-[17px] xl:text-[17px] 2xl:text-[18px] md:order-last hover:scale-105 transition-transform" href="tel:+52 9981828289">+52 998 8705400</a>
        <a className="hidden primary sm:inline-flex text-white text-[18px] px-3" href="#">|</a>
        <a className="text-white primary text-[13px] md:text-[17px] xl:text-[17px] 2xl:text-[18px] md:order-first mt-1 md:mt-0 hover:scale-105 transition-transform" href="#">informes@distritoyaax.com</a>
      </div>

      <div className="hidden md:flex justify-center md:space-x-10 md:pt-8 md:pb-0">
        <a className='hover:scale-125 transition-transform' href="https://www.facebook.com/distritoyaax.cancun">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-3' viewBox="0 0 18.178 33.938">
          <path id="Path_136" data-name="Path 136" d="M16.986,19.121l.943-6.142H12.036V8.993c0-1.681.823-3.318,3.461-3.318h2.681V.446A32.655,32.655,0,0,0,13.42.031C8.567.031,5.4,2.972,5.4,8.3V12.98H0v6.142H5.4V33.969h6.641V19.121Z" transform="translate(0 -0.031)" fill="#fff"/>
        </svg>
        </a>

        <a className='hover:scale-125 transition-transform' href="https://www.instagram.com/distritoyaax.cancun/">    
        <svg xmlns="http://www.w3.org/2000/svg" className='w-6' viewBox="0 0 33.938 33.938">
          <g id="Group_265" data-name="Group 265" transform="translate(-944.353 -10501.219)">
            <path id="Path_137" data-name="Path 137" d="M97.188,6.348a1.989,1.989,0,1,0,1.989,1.989,1.99,1.99,0,0,0-1.989-1.989" transform="translate(873.117 10500.931)" fill="#fff"/>
            <path id="Path_138" data-name="Path 138" d="M87.7,9.008a8.358,8.358,0,1,0,8.358,8.359A8.368,8.368,0,0,0,87.7,9.008m0,13.712a5.354,5.354,0,1,1,5.353-5.353A5.36,5.36,0,0,1,87.7,22.72" transform="translate(873.765 10500.822)" fill="#fff"/>
            <path id="Path_139" data-name="Path 139" d="M93.96,33.969H80.41A10.206,10.206,0,0,1,70.216,23.775V10.225A10.206,10.206,0,0,1,80.41.03H93.96a10.207,10.207,0,0,1,10.195,10.195v13.55A10.207,10.207,0,0,1,93.96,33.969M80.41,3.223a7.009,7.009,0,0,0-7,7v13.55a7.009,7.009,0,0,0,7,7H93.96a7.009,7.009,0,0,0,7-7V10.225a7.009,7.009,0,0,0-7-7Z" transform="translate(874.137 10501.188)" fill="#fff"/>
          </g>
        </svg>
        </a>
            
        <a className='hover:scale-125 transition-transform' href="">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 0 28.363 32.547">
          <g id="Group_201" data-name="Group 201" transform="translate(896.865 -777.184)">
            <path id="Path_458" data-name="Path 458" d="M-870.134,784.809a7.8,7.8,0,0,1-6.134-6.907v-.718h-5.605V799.43a4.712,4.712,0,0,1-4.729,4.7,4.712,4.712,0,0,1-3.734-1.859l0,0,0,0a4.71,4.71,0,0,1,.9-6.6,4.711,4.711,0,0,1,4.278-.738v-5.695a10.3,10.3,0,0,0-11.611,8.791,10.3,10.3,0,0,0,2.834,8.606,10.3,10.3,0,0,0,14.565.167,10.3,10.3,0,0,0,3.1-7.365V788.064a13.313,13.313,0,0,0,7.766,2.483v-5.57A7.862,7.862,0,0,1-870.134,784.809Z" transform="translate(0 0)" fill="#fff"/>
          </g>
        </svg>
        </a>
      </div>

      <div className="flex items-center justify-center pb-9 md:p-10">
        <h3 className="text-white primary text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[15px] md:leading-loose tracking-wider	">COPYRIGHT 2023 | MADE BY BWE AGENCY</h3>
      </div>

      <div className="phone-call cbh-phone cbh-green cbh-show cbh-static" id="clbh_phone_div" style={{}}>
        <a id="WhatsApp-button"
          href="https://api.whatsapp.com/send?phone=+529988705400&text=Hola%quiero%saber%más%de%Distrito%Yaax%"
          target="_blank" className="phoneJs" title="WhatsApp Distrito Yaax">
          <div className="cbh-ph-circle"></div>
          <div className="cbh-ph-circle-fill"></div>
          <div className="cbh-ph-img-circle1"></div>
        </a>
      </div>

    </footer>

    </>
  );
}

export default Footer;
