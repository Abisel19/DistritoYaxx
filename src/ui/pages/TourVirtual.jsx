import React from 'react';

function TourVirtual() {

  return (
    <>
    <main class="h-screen w-full flex flex-col justify-center items-center bg-black">
        <h1 className='secondary text-[#b48c51] text-[40px] md:text-[80px]'>EN CONSTRUCCIÓN</h1>
        <a className='secondary' href="/">
        <span class="relative border rounded-2xl block px-8 py-3 bg-[#b48c51] mt-4 md:mt-6 transition-transform transform hover:scale-95 text-[18px] md:text-[20px]">
            Volver al Inicio
        </span>
        </a>
    </main>
    </>
  );
}

export default TourVirtual;