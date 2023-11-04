import React from 'react';

function Header() {
  return (
    <header>
      <div className='md:py-20 lg:25 2xl:25 bg-black'>
        <div className='container mx-auto px-0 xl:px-0 2xl:px-10'>
          <div className='flex pt-8 px-0 lg:px-0 xl:px-0 ml-0.5'>
            <div className='w-full sm:w-full md:w-full lg:w-full xl:5/6 2xl:pl-5/6'>
              <div className='flex nav pl-4 sm:pl-9 md:pl-10 xl:pl-0 2xl:pl-10'>
                <button className='text-white primary text-[22px] sm:text-lg lg:text-lg xl:text-xl flex mr-2 sm:mr-12 md:mr-10 xl:mr-10 2xl:mr-14 px-2 xl:px-4 2xl:px-6 py-1 xl:py-1'>QUIENES SOMOS</button>
                <button className='text-white primary text-[22px] sm:text-lg lg:text-lg xl:text-xl flex mr-2 sm:mr-12 md:mr-10 xl:mr-10 2xl:mr-14 px-2 xl:px-4 2xl:px-6 py-1 xl:py-1'>PROYECTO</button>
                <button className='flex mr-2 sm:mr-12 md:mr-10 xl:mr-10 2xl:mr-14 px-2 xl:px-4 2xl:px-6 py-1 xl:py-1'>
                  <img src="/img/Marca.png" alt="vista-de-la-marca" />
                </button>
                <button className='text-white primary text-[22px] sm:text-lg lg:text-lg xl:text-xl flex mr-2 sm:mr-12 md:mr-10 xl:mr-10 2xl:mr-14 px-2 xl:px-4 2xl:px-6 py-1 xl:py-1'>AMENIDADES</button>
                <button className='text-white primary text-[22px] sm:text-lg lg:text-lg xl:text-xl flex mr-2 sm:mr-12 md:mr-10 xl:mr-10 2xl:mr-14 px-2 xl:px-4 2xl:px-6 py-1 xl:py-1'>CONTACTO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
