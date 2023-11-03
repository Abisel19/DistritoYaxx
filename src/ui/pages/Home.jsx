import React from 'react';

function Home() {
  return (
    <>
      <section className='bg-home'>
      </section>

      <section className='container mx-auto px-10'>
        <div className='flex py-5 md:py-20 xl:py-24'>
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
      </section>

      <section className='flex'>
        <div className='w-full md:w-4/12 bg-black-1 py-2 md:py-6 mx-auto'>
            <div className='text-center'>
                <h3 className='primary text-white text-base md:text-[22px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>CONSTRUCCIÓN <br/><a className='sextary'>SOSTENIBLE</a></h3>
            </div>
        </div>

        <div className='w-full md:w-4/12 bg-gray-1 py-2 md:py-6 mx-auto'>
            <div className='text-center'>
                <h3 className='primary text-white text-base md:text-[22px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>PRIMER PROYECTO <br/><a className='sextary'>SMART CITY EN CANCÚN</a></h3>
            </div>
        </div>

        <div className='w-full md:w-4/12 bg-black-1 py-2 md:py-6 mx-auto'>
            <div className='text-center'>
                <h3 className='primary text-white text-base md:text-[22px] leading-3 md:leading-7 tracking-normal md:tracking-wide'>60% DE <br/><a className='sextary'>ÁREAS VERDES</a></h3>
            </div>
        </div>
      </section>

      <section className='flex py-5 md:py-10'>
        <div className='w-full md:w-3/5'>
            <img src="/img/vista-laguna.png" alt="vista-a-la-laguna" />
        </div>

        <div className='w-full md:w-2/5 py-4'>
            {/* <h2>VISTAS A <br/>LA LAGUNA</h2> */}
            
        </div>

      </section>

    </>
  );
}

export default Home;
