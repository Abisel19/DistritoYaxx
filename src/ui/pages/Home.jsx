import React from 'react';

function Home() {
  return (
    <>
      <div className='bg-home'>

      </div>

      <div className='container mx-auto px-10'>
        <div className='flex py-5 md:py-10 xl:py-24'>
            <div className='w-full md:w-1/3 xl:w-1/3'>
                <div className="flex items-center justify-center">
                    <div className="text-black text-2xl md:text-5xl xl:text-6xl tracking-wider">
                        <h2 className='secondary leading-[4rem]'><a className='primary'>¿</a>QUI<span className="font-semibold">E</span>NES<br />SOMOS<a className='primary'>?</a></h2>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/3 lg:w-2/3 2xl:w-2/3'>
                <div className="flex items-center justify-center">
                    <div className="text-black text-base md:text-lg xl:text-xl px-0 md:px-10">
                        <p className='primary'><a className='font-black'>Distrito Yaax®</a> es un proyecto conceptualizado y desarrollado <br/>por ALMIRA DESARRROLLOS. Empresa 100 % Mexicana  <br/>comprometida con el desarrollo económico y social de la región.</p>
                        <p className='primary'><a className='font-black'>YAAX palabra maya que significa VERDE. Indica el origen y el principio, además de significar la naturaleza en crecimiento.</a></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
