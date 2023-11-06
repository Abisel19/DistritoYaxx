import React from 'react';

function Header() {
  return (
    <header>
      <div className='md:py-20 lg:py-25 2xl:py-25 bg-black'>
        <div className='container mx-auto px-0 xl:px-0 2xl:px-10'>
          <div className='w-full sm:w-full md:w-full lg:w-full xl:5/6 2xl:pl-5/6'>
            <div className='flex items-center nav pl-4 sm:pl-9 md:pl-10 xl:pl-0 2xl:pl-10 w-8/9'>
              <button className='text-white primary text-[22px] sm:text-lg lg:text-lg xl:text-xl flex mr-2 sm:mr-12 md:mr-10 xl:mr-10 2xl:mr-14 px-2 xl:px-4 2xl:px-6 py-1 xl:py-1'>QUIENES SOMOS</button>
              <button className='text-white primary text-[22px] sm:text-lg lg:text-lg xl:text-xl flex mr-2 sm:mr-12 md:mr-10 xl:mr-10 2xl:mr-14 px-2 xl:px-4 2xl:px-6 py-1 xl:py-1'>PROYECTO</button>
              <button className='flex mr- sm:mr-12 md:mr-10 xl:mr-10 2xl:mr-14 px-2 xl:px-4 2xl:px-6 py-1 xl:py-1'>
                <img src="/img/Marca.png" alt="vista-de-la-marca" />
              </button>
              <button className='text-white primary text-[22px] sm:text-lg lg:text-lg xl:text-xl flex mr-2 sm:mr-12 md:mr-10 xl:mr-10 2xl:mr-14 px-2 xl:px-4 2xl:px-6 py-1 xl:py-1'>AMENIDADES</button>
              <button className='text-white primary text-[22px] sm:text-lg lg:text-lg xl:text-xl flex mr-2 sm:mr-12 md:mr-10 xl:mr-10 2xl:mr-14 px-2 xl:px-4 2xl:px-6 py-1 xl:py-1'>CONTACTO</button>

              <div className='flex items-end'>
              <div className='w-1/3'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.344" height="26.781" viewBox="0 0 14.344 26.781">
                    <path id="Path_466" data-name="Path 466" d="M13.4,15.1l.744-4.847H9.5V7.1a2.423,2.423,0,0,1,2.731-2.618h2.116V.359A25.768,25.768,0,0,0,10.59.031c-3.83,0-6.332,2.321-6.332,6.523v3.695H0V15.1H4.258V26.812H9.5V15.1Z" transform="translate(0 -0.031)" fill="#fff"/>
                  </svg>
                </button>
              </div>

              <div className='w-1/3'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.781" height="26.781" viewBox="0 0 26.781 26.781">
                    <g id="Group_263" data-name="Group 263" transform="translate(-1829.117 -78.885)">
                      <path id="Path_469" data-name="Path 469" d="M96.769,6.348a1.57,1.57,0,1,0,1.57,1.57,1.57,1.57,0,0,0-1.57-1.57" transform="translate(1752.828 77.319)" fill="#fff"/>
                      <path id="Path_467" data-name="Path 467" d="M85.933,9.008a6.6,6.6,0,1,0,6.6,6.6,6.6,6.6,0,0,0-6.6-6.6m0,10.82A4.225,4.225,0,1,1,90.157,15.6a4.23,4.23,0,0,1-4.224,4.224" transform="translate(1756.685 76.672)" fill="#fff"/>
                      <path id="Path_468" data-name="Path 468" d="M88.952,26.811H78.26a8.053,8.053,0,0,1-8.044-8.045V8.075A8.053,8.053,0,0,1,78.26.03H88.952A8.054,8.054,0,0,1,97,8.075V18.767a8.054,8.054,0,0,1-8.045,8.045M78.26,2.55a5.531,5.531,0,0,0-5.525,5.525V18.767a5.531,5.531,0,0,0,5.525,5.525H88.952a5.531,5.531,0,0,0,5.525-5.525V8.075A5.531,5.531,0,0,0,88.952,2.55Z" transform="translate(1758.901 78.855)" fill="#fff"/>
                    </g>
                  </svg>
                </button>
              </div>

              <div className='w-1/3'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22.382" height="25.683" viewBox="0 0 22.382 25.683">
                    <g id="Group_210" data-name="Group 210" transform="translate(0 0)">
                      <path id="Path_458" data-name="Path 458" d="M-875.771,783.2a6.154,6.154,0,0,1-4.841-5.45v-.566h-4.423v17.554a3.718,3.718,0,0,1-3.731,3.705,3.718,3.718,0,0,1-2.946-1.467h0a3.717,3.717,0,0,1,.711-5.208,3.717,3.717,0,0,1,3.376-.582v-4.494a8.126,8.126,0,0,0-9.162,6.937,8.126,8.126,0,0,0,2.237,6.791,8.128,8.128,0,0,0,11.493.132,8.128,8.128,0,0,0,2.447-5.812v-8.97a10.5,10.5,0,0,0,6.128,1.959v-4.4A6.2,6.2,0,0,1-875.771,783.2Z" transform="translate(896.865 -777.184)" fill="#fff"/>
                    </g>
                  </svg>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
