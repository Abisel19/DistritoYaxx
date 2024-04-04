import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import HubspotForm from 'react-hubspot-form'
import sendFacebookEvent from './apiFacebook';

function Footer() {
  const form = useRef();
  const [nombre, setNombre] = useState('');
  const [mail, setMail] = useState('');
  const [tel, setTel] = useState('');
  const [client, setClient] = useState('');
  const [formularioValido, setFormularioValido] = useState(true);
  const [botonVisible, setBotonVisible] = useState(true);
  const formularioEnviado = localStorage.getItem('formularioEnviado');
  const [mensajeError, setMensajeError] = useState('');
  const [correoEnviado, setCorreoEnviado] = useState(false);
  const accessToken = 'EAAPZB5gS6GGQBOxjc84KgXqu0YZABUtF2HbDfjiDkZA5vRqqTsSmZB4B7CgmH23cd1nkc1HjpluTHfcUUk2KekdR5t8Snrw2AXLKQuQk8wKKzZAJPhxmDXKPOE8nNFKFwhWoLfwdk4xVdjLMx3h9kceNps7hWPnuZAfvZCF9k5HFmZBSZC7PaWQX6rPO4gxUzHgJIcgZDZD';
  const pixelId = '2138276436505071';

  const handleClick = () => {
    sendFacebookEvent('Contact', accessToken, pixelId);
  };

  const handleClick2 = () => {
    sendFacebookEvent('CompleteRegistration', accessToken, pixelId);
  };


  useEffect(() => {
  const formularioEnviado = localStorage.getItem('formularioEnviado');
    if (formularioEnviado) {
      setBotonVisible(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === '' || mail.trim() === '' || tel.trim() === ''|| client.trim() === '') {
      setFormularioValido(false);
      return;
    }

    emailjs.sendForm('service_vpxxofv', 'template_4rctu8h', form.current, 'U1ZlmQ7-WTphzwWkj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setNombre('');
    setMail('');
    setTel('');
    setClient('');

    localStorage.setItem('formularioEnviado', 'true');

    setBotonVisible(false);

    setCorreoEnviado(true);
  };

  const handleNoDescargarClick = () => {
    setMensajeError('Por favor, llena el formulario antes de descargar el brochure.');    
  };

  const descargarPDF = () => {
    // Reemplaza con la ruta correcta de tu archivo PDF
    const rutaPDF = '/pdf/yaax-brochure.pdf';

    // Crea un enlace temporal
    const link = document.createElement('a');
    link.href = rutaPDF;
    link.download = 'brochure.pdf';

    // Añade el enlace al documento y haz clic en él
    document.body.appendChild(link);
    link.click();

    // Elimina el enlace después de hacer clic
    document.body.removeChild(link);
  };


  return (
    <>
      <section className='bg-gray-1 py-32 mt-0 md:mt-0'>
        <div className='container mx-auto md:flex'>

            <div className='w-full md:w-2/5 px-4 md:px-16'>
                <h3 className='secondary text-center md:text-left text-4xl md:text-5xl text-white mb-3'>COTIZA</h3>
                <h4 className='primary text-center md:text-left text-base md:text-lg text-white md:mt-1 mb-5'>HAGAMOS TU SUEÑO REALIDAD</h4>
                {/* <form className='flex flex-col md:items-start items-center mt-4' ref={form} onSubmit={handleSubmit}>

                <label className='text-white primary text-[15px] md:text-[1.1rem] mt-8 md:mt-6' htmlFor="nombre">Nombre Completo:</label>

                <input
                  className={`bg-gray-1 text-white border-b-2 border-white focus:outline-none  w-full pr-12 md:pr-32 primary text-[15px] md:text-[1.1rem] ${!formularioValido && nombre.trim() === '' ? 'border-red-500' : ''}`}
                  type='text'
                  name='user_name'
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />

                <label className='text-white primary text-[15px] md:text-[1.1rem] mt-8 md:mt-6' htmlFor="email">Correo Electrónico:</label>

                <input
                  className={`bg-gray-1 text-white border-b-2 border-white focus:outline-none w-full pr-12 md:pr-32 primary text-[15px] md:text-[1.1rem] ${!formularioValido && mail.trim() === '' ? 'border-red-500' : ''}`}
                  type="email"
                  name='user_email'
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />

                <label className='text-white text-center md:text-left primary text-[15px] md:text-[1.1rem] mt-8 md:mt-6' htmlFor="tel" pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}" step="any">Celular <br className='block md:hidden'/>(código de país + número de teléfono):</label>

                <input
                  className={`bg-gray-1 text-white border-b-2 border-white focus:outline-none w-full pr-12 md:pr-32 primary text-[15px] md:text-[1.1rem] ${!formularioValido && tel.trim() === '' ? 'border-red-500' : ''}`}
                  type="tel"
                  name='user_phone'
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />

                <label className='text-white text-center md:text-left primary text-[15px] md:text-[1.1rem] mt-8 md:mt-6' htmlFor="tel" pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}" step="any">Te identificas como:</label>

                <select
                  className={`bg-gray-1 text-white border-b-2 border-white focus:outline-none w-full primary md:mt-6 text-[15px] md:text-[1.1rem] ${!formularioValido && tel.trim() === '' ? 'border-red-500' : ''}`}
                  name='user_client'
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                >
                  <option value='broker'>Broker</option>
                  <option value='inversionista'>Inversionista</option>
                  <option value='cliente'>Cliente</option>
                </select>

                <button className='text-white text-[20px] md:text-[1.3rem] primary rounded-full border-[1.5px] px-3 mt-8 transition-transform transform hover:scale-90'>Enviar</button>
                </form> */}
                <HubspotForm
                region= "na1"
                portalId='23158397'
                formId='fc8c8b36-6fdd-43f8-a537-0b58cb87ab50'
                onSubmit={handleClick2}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
                />
                
                {/* {correoEnviado && (
                  <p className="sextary text-[20px] text-white mt-5 text-center md:text-left">Correo enviado correctamente</p>
                )} */}
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
                    <a onClick={handleClick} href="mailto:informes@distritoyaax.com" className='primary text-center md:text-left text-[14px] md:text-lg text-white ml-2 md:ml-5'>informes@distritoyaax.com</a>
                </div>

                <div className='mt-[8px] md:mt-4 flex justify-center md:justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-3 md:w-5' viewBox="0 0 31.766 35.438">
                      <g id="Grupo_185" data-name="Grupo 185" transform="translate(3198.273 304.39)">
                          <path id="Trazado_429" data-name="Trazado 429" d="M-3198.273-295.737a11.688,11.688,0,0,1,2.666-7.192,3.312,3.312,0,0,1,1.976-1.106,16.5,16.5,0,0,1,2.174-.353.933.933,0,0,1,.666.36,5.759,5.759,0,0,1,.6,1.025c1.024,1.965,2.031,3.941,3.067,5.9.569,1.073.573,1.568-.23,2.453-.625.689-1.326,1.291-1.989,1.937-.287.28-.576.559-.844.861a1.593,1.593,0,0,0-.262,2.263c.473.932.959,1.856,1.472,2.761a23.189,23.189,0,0,0,7.866,8.287c.582.368,1.165.735,1.757,1.083a.983.983,0,0,0,1.363-.27c.553-.667,1.075-1.366,1.616-2.045.385-.482.753-.984,1.175-1.423.789-.82,1.177-.828,2.106-.213,1.57,1.039,3.147,2.063,4.723,3.091.442.288.892.563,1.331.856a1.18,1.18,0,0,1,.526,1.142,9.933,9.933,0,0,1-.752,3.486,4.373,4.373,0,0,1-1.127,1.439,8.671,8.671,0,0,1-6.141,2.439,10.6,10.6,0,0,1-3.591-.936,32.065,32.065,0,0,1-5.188-2.426,32.938,32.938,0,0,1-6.713-5.953,33.126,33.126,0,0,1-5.167-7.306,37.525,37.525,0,0,1-2.923-8.614A12.285,12.285,0,0,1-3198.273-295.737Z" fill="#fff"/>
                      </g>
                  </svg>
                    <a href="tel:+52 9987589361" className='primary text-center md:text-left text-[14px] md:text-lg text-white ml-2 md:ml-5'>+52 9987589361</a>
                </div>

                <div className='mt-[8px] md:mt-4 flex justify-center md:justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-3 md:w-5' viewBox="0 0 31.766 35.438">
                      <g id="Grupo_185" data-name="Grupo 185" transform="translate(3198.273 304.39)">
                          <path id="Trazado_429" data-name="Trazado 429" d="M-3198.273-295.737a11.688,11.688,0,0,1,2.666-7.192,3.312,3.312,0,0,1,1.976-1.106,16.5,16.5,0,0,1,2.174-.353.933.933,0,0,1,.666.36,5.759,5.759,0,0,1,.6,1.025c1.024,1.965,2.031,3.941,3.067,5.9.569,1.073.573,1.568-.23,2.453-.625.689-1.326,1.291-1.989,1.937-.287.28-.576.559-.844.861a1.593,1.593,0,0,0-.262,2.263c.473.932.959,1.856,1.472,2.761a23.189,23.189,0,0,0,7.866,8.287c.582.368,1.165.735,1.757,1.083a.983.983,0,0,0,1.363-.27c.553-.667,1.075-1.366,1.616-2.045.385-.482.753-.984,1.175-1.423.789-.82,1.177-.828,2.106-.213,1.57,1.039,3.147,2.063,4.723,3.091.442.288.892.563,1.331.856a1.18,1.18,0,0,1,.526,1.142,9.933,9.933,0,0,1-.752,3.486,4.373,4.373,0,0,1-1.127,1.439,8.671,8.671,0,0,1-6.141,2.439,10.6,10.6,0,0,1-3.591-.936,32.065,32.065,0,0,1-5.188-2.426,32.938,32.938,0,0,1-6.713-5.953,33.126,33.126,0,0,1-5.167-7.306,37.525,37.525,0,0,1-2.923-8.614A12.285,12.285,0,0,1-3198.273-295.737Z" fill="#fff"/>
                      </g>
                  </svg>
                    <a href="tel:+52 9987593669" className='primary text-center md:text-left text-[14px] md:text-lg text-white ml-2 md:ml-5'>+52 9987593669</a>
                </div>

                <div className='flex justify-center md:justify-start'>
                  {formularioEnviado === 'true' ? (
                  <button
                    className={`text-white text-[20px] md:text-[1.3rem] primary rounded-full border-[1.5px] px-12 pt-2 pb-1 mt-8 transition-transform transform hover:scale-90 ${
                    !formularioValido ? 'bg-red-500' : ''
                    }`}
                    onClick={descargarPDF}
                  >
                   DESCARGAR BROCHURE
                  </button>
                  ) : (                  
                  <button
                  className={`text-white text-[20px] md:text-[1.3rem] primary rounded-full border-[1.5px] px-12 pt-2 pb-1 mt-8`}
                  onClick={handleNoDescargarClick}
                  >
                   DESCARGAR BROCHURE
                  </button>                  
                  )}
                </div>
                {mensajeError && <p className="text-red-500 mt-2 primary text-center md:text-left">{mensajeError}</p>}
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
        <a className="text-white text-[14px] primary md:text-[14px] xl:text-[15px] 2xl:text-[18px] pt-1 hover:scale-110 transition-transform" href="/amenidades">AMENIDADES</a>
        <a className="text-white text-[14px] primary md:text-[14px] xl:text-[15px] 2xl:text-[18px] pt-1 hover:scale-110 transition-transform" href="/ubicacion">UBICACIÓN</a>
        <a className="text-white text-[14px] primary md:text-[14px] xl:text-[15px] 2xl:text-[18px] pt-1 hover:scale-110 transition-transform" href="tour">TOUR VIRTUAL</a>
        <a className="text-white text-[14px] primary md:text-[14px] xl:text-[15px] 2xl:text-[18px] pt-1 hover:scale-110 transition-transform" href="/contacto">CONTACTO</a>
      </div>

      <div className="md:hidden flex items-center justify-center space-x-8 pt-6 pb-2">
        <a href="https://www.facebook.com/distritoyaax.cancun">
          <svg xmlns="http://www.w3.org/2000/svg" width="10.303" height="19.235" viewBox="0 0 10.303 19.235">
            <path id="Path_547" data-name="Path 547" d="M9.627,10.851l.534-3.481H6.822V5.11A1.74,1.74,0,0,1,8.783,3.23H10.3V.266a18.508,18.508,0,0,0-2.7-.235C4.855.031,3.058,1.7,3.058,4.716V7.37H0v3.481H3.058v8.415H6.822V10.851Z" transform="translate(0 -0.031)" fill="#fff"/>
          </svg>
        </a>
            
        <a href="https://www.instagram.com/distritoyaax.cancun/">
          <svg xmlns="http://www.w3.org/2000/svg" width="19.235" height="19.236" viewBox="0 0 19.235 19.236">
            <g id="Group_264" data-name="Group 264" transform="translate(-202.445 -4951.921)">
              <path id="Path_544" data-name="Path 544" d="M96.327,6.348a1.128,1.128,0,1,0,1.128,1.128,1.128,1.128,0,0,0-1.128-1.128" transform="translate(120.828 4949.009)" fill="#fff"/>
              <path id="Path_545" data-name="Path 545" d="M84.074,9.008a4.737,4.737,0,1,0,4.737,4.737,4.743,4.743,0,0,0-4.737-4.737m0,7.772a3.034,3.034,0,1,1,3.034-3.034,3.038,3.038,0,0,1-3.034,3.034" transform="translate(128.066 4947.795)" fill="#fff"/>
              <path id="Path_546" data-name="Path 546" d="M83.673,19.266h-7.68a5.784,5.784,0,0,1-5.777-5.778V5.808A5.784,5.784,0,0,1,75.993.03h7.68a5.785,5.785,0,0,1,5.778,5.778v7.68a5.785,5.785,0,0,1-5.778,5.778M75.993,1.84a3.972,3.972,0,0,0-3.968,3.968v7.68a3.972,3.972,0,0,0,3.968,3.968h7.68a3.972,3.972,0,0,0,3.968-3.968V5.808A3.972,3.972,0,0,0,83.673,1.84Z" transform="translate(132.229 4951.892)" fill="#fff"/>
            </g>
          </svg>
        </a>
            
        <a href="https://www.tiktok.com/@distritoyaax?_t=8jAcgT8orUT&_r=1">    
        <svg xmlns="http://www.w3.org/2000/svg" width="19.235" height="19.236" viewBox="0 0 22.382 25.683">
          <g id="Grupo_286" data-name="Grupo 286" transform="translate(0 0)">
            <path id="Trazado_458" data-name="Trazado 458" d="M-875.771,783.2a6.154,6.154,0,0,1-4.841-5.45v-.566h-4.423v17.554a3.718,3.718,0,0,1-3.731,3.705,3.718,3.718,0,0,1-2.946-1.467h0a3.717,3.717,0,0,1,.711-5.208,3.717,3.717,0,0,1,3.376-.582v-4.494a8.126,8.126,0,0,0-9.162,6.937,8.126,8.126,0,0,0,2.237,6.791,8.128,8.128,0,0,0,11.493.132,8.128,8.128,0,0,0,2.447-5.812v-8.97a10.5,10.5,0,0,0,6.128,1.959v-4.4A6.2,6.2,0,0,1-875.771,783.2Z" transform="translate(896.865 -777.184)" fill="#fff"/>
              </g>
        </svg>
        </a>

      </div>

      <div div className="grid flex-col items-center pt-4 md:pt-8 md:flex-row md:justify-center">
        
        <div className='flex flex-col items-center'>
          <a className="text-white text-center mt-1 md:mt-4 primary text-[13px] md:text-[17px] xl:text-[17px] 2xl:text-[18px] md:order-last hover:scale-105 transition-transform px-2" href="tel:+52 9987589361">+52 998 7589361</a>
          <a className="text-white text-center mt-1 md:mt-4 primary text-[13px] md:text-[17px] xl:text-[17px] 2xl:text-[18px] md:order-last hover:scale-105 transition-transform px-2" href="tel:+52 9987593669">+52 998 7593669</a>
        </div>

        <a className="text-white text-center mt-2 mb-4 md:mb-0 primary text-[13px] md:text-[17px] xl:text-[17px] 2xl:text-[18px] md:order-first md:mt-0 hover:scale-105 transition-transform" href="mailto:informes@distritoyaax.com">informes@distritoyaax.com</a>
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

        <a className='hover:scale-110 transition-transform px-3' href="https://www.tiktok.com/@distritoyaax?_t=8jAcgT8orUT&_r=1">    
        <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 0 22.382 25.683">
          <g id="Grupo_286" data-name="Grupo 286" transform="translate(0 0)">
            <path id="Trazado_458" data-name="Trazado 458" d="M-875.771,783.2a6.154,6.154,0,0,1-4.841-5.45v-.566h-4.423v17.554a3.718,3.718,0,0,1-3.731,3.705,3.718,3.718,0,0,1-2.946-1.467h0a3.717,3.717,0,0,1,.711-5.208,3.717,3.717,0,0,1,3.376-.582v-4.494a8.126,8.126,0,0,0-9.162,6.937,8.126,8.126,0,0,0,2.237,6.791,8.128,8.128,0,0,0,11.493.132,8.128,8.128,0,0,0,2.447-5.812v-8.97a10.5,10.5,0,0,0,6.128,1.959v-4.4A6.2,6.2,0,0,1-875.771,783.2Z" transform="translate(896.865 -777.184)" fill="#fff"/>
              </g>
        </svg>
        </a>

      </div>

      <div className="flex items-center justify-center pb-9 md:p-10">
        <h3 className="text-white primary text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[15px] md:leading-loose tracking-wider	">COPYRIGHT 2023 | MADE BY BWE AGENCY</h3>
      </div>

      <div className="phone-call cbh-phone cbh-green cbh-show cbh-static" id="clbh_phone_div" style={{}}>
        <a id="WhatsApp-button"
          href="https://api.whatsapp.com/send?phone=+529987589361&text=Hola, quiero saber más de Distrito Yaax "
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
