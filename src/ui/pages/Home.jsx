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
                    <div className="text-black text-2xl md:text-5xl xl:text-[55px] tracking-wider mt-0 md:mt-2 ml-0 md:-ml-10">
                        <h2 className='secondary leading-[4rem]'><a className='primary'>¿</a>QUI<span className="font-semibold">E</span>NES<br />SOMOS<a className='primary'>?</a></h2>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/3 lg:w-2/3 2xl:w-2/3'>
                <div className="flex items-center justify-center">
                    <div className="text-black text-base md:text-lg xl:text-[23px] px-0 md:px-0 xl:px-0 ml-0 md:ml-14">
                        <p className='primary leading-none md:leading-7'><a className='sextary'>Distrito Yaax®</a> es un proyecto conceptualizado y desarrollado <br/>por ALMIRA DESARRROLLOS. Empresa 100 % Mexicana  <br/>comprometida con el desarrollo económico y social de la región.</p>
                        <p className='primary leading-none md:leading-7 mt-0 md:mt-2'><a className='sextary'>YAAX</a> palabra maya que significa <a className='sextary'>VERDE.</a> Indica el origen y el principio, además de significar la naturaleza en crecimiento.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
