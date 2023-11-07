import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='bg-black py-20'>
        <div className='container mx-auto px-0 xl:px-0 2xl:px-10'>
          <div className='flex justify-center pb-10'>
            <button className='w-[8.75rem]'>
              <img src="/img/Logo.png" alt="logo" />
            </button>
          </div>

          <div className='text-white flex justify-center pb-10'>
            <button className='w-1/5 text-[30px] primary'>INICIO</button>
            <button className='w-1/5 text-[30px] primary'>QUIENES SOMOS</button>
            <button className='w-1/5 text-[30px] primary'>PROYECTO</button>
            <button className='w-1/5 text-[30px] primary'>AMENIDADES</button>
            <button className='w-1/5 text-[30px] primary'>CONTACTO</button>
          </div>

          <div className='text-white flex justify-center pb-10'>
            <svg className='mr-2.5 mt-2' xmlns="http://www.w3.org/2000/svg" width="19.442" height="21.689" viewBox="0 0 19.442 21.689">
                <g id="Group_262" data-name="Group 262" transform="translate(3198.273 304.39)">
                  <path id="Path_429" data-name="Path 429" d="M-3198.273-299.094a7.153,7.153,0,0,1,1.632-4.4,2.026,2.026,0,0,1,1.209-.677,10.105,10.105,0,0,1,1.331-.216.57.57,0,0,1,.407.22,3.5,3.5,0,0,1,.37.627c.627,1.2,1.243,2.412,1.877,3.609.348.656.351.96-.141,1.5-.383.421-.812.79-1.217,1.185-.176.171-.353.342-.517.527a.974.974,0,0,0-.16,1.385c.289.57.587,1.136.9,1.69a14.192,14.192,0,0,0,4.814,5.072c.356.225.713.45,1.075.663a.6.6,0,0,0,.834-.165c.339-.408.658-.836.989-1.252.235-.295.461-.6.719-.871.483-.5.72-.507,1.289-.13.961.636,1.926,1.263,2.891,1.892.27.177.545.344.814.524a.723.723,0,0,1,.322.7,6.084,6.084,0,0,1-.461,2.134,2.679,2.679,0,0,1-.69.88,5.307,5.307,0,0,1-3.759,1.493,6.491,6.491,0,0,1-2.2-.573,19.637,19.637,0,0,1-3.175-1.485,20.169,20.169,0,0,1-4.109-3.643,20.281,20.281,0,0,1-3.162-4.472,22.97,22.97,0,0,1-1.789-5.272A7.506,7.506,0,0,1-3198.273-299.094Z" fill="#fff"/>
                </g>
            </svg>
            <a className='text-[28px] primary' href="#">informes@distritoyaax.com</a>
            <p className='text-[28px] primary px-5'>|</p>
            <a className='text-[28px] primary' href="#">+52 998 8705400</a>
          </div>

          <div className='flex justify-center pb-10'>
            <div className='pr-5 '>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="18.18" height="33.94" viewBox="0 0 14.344 26.781">
                  <path id="Path_466" data-name="Path 466" d="M13.4,15.1l.744-4.847H9.5V7.1a2.423,2.423,0,0,1,2.731-2.618h2.116V.359A25.768,25.768,0,0,0,10.59.031c-3.83,0-6.332,2.321-6.332,6.523v3.695H0V15.1H4.258V26.812H9.5V15.1Z" transform="translate(0 -0.031)" fill="#fff"/>
                </svg>
              </button>
            </div>

            <div className='pr-5 pl-5'>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="33.94" height="33.94" viewBox="0 0 26.781 26.781">
                  <g id="Group_263" data-name="Group 263" transform="translate(-1829.117 -78.885)">
                    <path id="Path_469" data-name="Path 469" d="M96.769,6.348a1.57,1.57,0,1,0,1.57,1.57,1.57,1.57,0,0,0-1.57-1.57" transform="translate(1752.828 77.319)" fill="#fff"/>
                    <path id="Path_467" data-name="Path 467" d="M85.933,9.008a6.6,6.6,0,1,0,6.6,6.6,6.6,6.6,0,0,0-6.6-6.6m0,10.82A4.225,4.225,0,1,1,90.157,15.6a4.23,4.23,0,0,1-4.224,4.224" transform="translate(1756.685 76.672)" fill="#fff"/>
                    <path id="Path_468" data-name="Path 468" d="M88.952,26.811H78.26a8.053,8.053,0,0,1-8.044-8.045V8.075A8.053,8.053,0,0,1,78.26.03H88.952A8.054,8.054,0,0,1,97,8.075V18.767a8.054,8.054,0,0,1-8.045,8.045M78.26,2.55a5.531,5.531,0,0,0-5.525,5.525V18.767a5.531,5.531,0,0,0,5.525,5.525H88.952a5.531,5.531,0,0,0,5.525-5.525V8.075A5.531,5.531,0,0,0,88.952,2.55Z" transform="translate(1758.901 78.855)" fill="#fff"/>
                  </g>
                </svg>
              </button>
            </div>

            <div className='pl-5'>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="28.36" height="32.55" viewBox="0 0 22.382 25.683">
                  <g id="Group_210" data-name="Group 210" transform="translate(0 0)">
                    <path id="Path_458" data-name="Path 458" d="M-875.771,783.2a6.154,6.154,0,0,1-4.841-5.45v-.566h-4.423v17.554a3.718,3.718,0,0,1-3.731,3.705,3.718,3.718,0,0,1-2.946-1.467h0a3.717,3.717,0,0,1,.711-5.208,3.717,3.717,0,0,1,3.376-.582v-4.494a8.126,8.126,0,0,0-9.162,6.937,8.126,8.126,0,0,0,2.237,6.791,8.128,8.128,0,0,0,11.493.132,8.128,8.128,0,0,0,2.447-5.812v-8.97a10.5,10.5,0,0,0,6.128,1.959v-4.4A6.2,6.2,0,0,1-875.771,783.2Z" transform="translate(896.865 -777.184)" fill="#fff"/>
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className='text-white'>
              <p className='text-[20px] primary'>COPYRIGHT 2023 | MADE BY BWE AGENCY</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
