import React from 'react';

function Footer() {
  return (
    <footer className='bg-black'>
      <div className="flex justify-center p-8 md:pt-12 xl:pt-12">
        <a href="/">
          <img className="md:hidden" src="/img/Logo-s.png" alt="" />
          <img className="hidden sm:block md:w-24 hover:scale-110 transition-transform" src="/img/Logo-m.png" alt="" />
        </a>
      </div>

      <div className="flex items-center flex-col justify-center md:flex-row md:space-x-16">
        <a className="text-white text-[14px] primary md:text-[15px] xl:text-[18px] 2xl:text-[22px] pt-1 hover:scale-110 transition-transform" href="/">INICIO</a>
        <a className="text-white text-[14px] primary md:text-[15px] xl:text-[18px] 2xl:text-[22px] pt-1 hover:scale-110 transition-transform" href="/acerca">QUIENES SOMOS</a>
        <a className="text-white text-[14px] primary md:text-[15px] xl:text-[18px] 2xl:text-[22px] pt-1 hover:scale-110 transition-transform" href="/proyecto">PROYECTO</a>
        <a className="text-white text-[14px] primary md:text-[15px] xl:text-[18px] 2xl:text-[22px] pt-1 hover:scale-110 transition-transform" href="#">AMENIDADES</a>
        <a className="text-white text-[14px] primary md:text-[15px] xl:text-[18px] 2xl:text-[22px] pt-1 hover:scale-110 transition-transform" href="/contacto">CONTACTO</a>
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
        <a className="text-white primary text-[13px] md:text-[17px] xl:text-[17px] 2xl:text-[22px] md:order-last hover:scale-105 transition-transform" href="tel:+52 9981828289">+52 998 8705400</a>
        <a className="hidden primary sm:inline-flex text-white text-[18px] px-3" href="#">|</a>
        <a className="text-white primary text-[13px] md:text-[17px] xl:text-[17px] 2xl:text-[22px] md:order-first mt-1 md:mt-0 hover:scale-105 transition-transform" href="#">informes@distritoyaax.com</a>
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
        <h3 className="text-white primary text-[13px] md:text-[17px] xl:text-[17px] 2xl:text-[22px] md:leading-loose">COPYRIGHT 2023 | MADE BY BWE AGENCY</h3>
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
  );
}

export default Footer;
