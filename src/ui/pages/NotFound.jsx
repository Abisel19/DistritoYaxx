import React from 'react';

function NotFound() {

  return (
    <>
    <main class="h-screen w-full flex flex-col justify-center items-center bg-black">
        <h1 class="quinary text-9xl  xl:text-[200px] font-extrabold text-white tracking-widest">404</h1>
        <div class="primary bg-[#9B9B9B] px-2 text-sm  xl:text-2xl rounded rotate-12 absolute">
            Página no encontrada
        </div>
        <button class="mt-5">
        <a
            class="primary relative inline-block text-sm xl:text-base font-medium text-white group active:text-white focus:outline-none focus:ring"
        >
            <span
            class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-black group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <span class="relative border rounded-2xl block px-8 py-3 bg-[#1A2238] ">
            <a href="/">Volver al Inicio</a>
            </span>
        </a>
        </button>
    </main>
    </>
  );
}

export default NotFound;