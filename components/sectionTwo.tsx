import React from 'react';

const SectionTwo: React.FC = () => {
  return (
    <div className='relative h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-500 h-full'>
        <div className='relative hidden md:block pr-4 py-4 h-full mt-5 z-20'>
          <img
            className='rounded-r-3xl h-[80%] w-full object-cover'
            src='/three.jpg'
            alt='three'
          />
        </div>
        <div className='absolute top-0 right-0 h-full w-[75%] bg-red-500 opacity-75 rounded-l-3xl'></div>
        <div className='flex items-center w-[70%] z-20'>
          <div className='p-4'>
            <h1 className='text-2xl font-bold mb-3 border-l-2 border-yellow-500 pl-5'>
              USA Elite
            </h1>
            <div className='mb-2'>
              <h2 className='text-md md:text-lg mb-1'>Maximize your wealth:</h2>
              <p>
                This is the first column. It contains some content that will be
                displayed in the first column. It contains some content.
              </p>
            </div>
            <div className='mb-2'>
              <h2 className='text-md md:text-lg mb-1'>Maximize your wealth:</h2>
              <p>
                This is the first column. It contains some content that will be
                displayed in the first column. It contains some content.
              </p>
            </div>
            <div className='mb-2'>
              <h2 className='text-md md:text-lg mb-1'>Maximize your wealth:</h2>
              <p>
                This is the first column. It contains some content that will be
                displayed in the first column. It contains some content.
              </p>
            </div>
            <div className='flex justify-center mt-10'>
              <button className='text-yellow-600 bg-gradient-to-r from-white to-yellow-500 px-4 py-2 rounded-full'>
                <p className='text-lg md:text-xl font-semibold'>
                  Book a VIP call
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
