import React from 'react';

const SectionThree = () => {
  return (
    <div className='h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-500 h-full'>
        <div className='flex items-center w-[70%] ml-auto'>
          <div className='p-4'>
            <h1 className='text-2xl font-bold mb-3 border-l-2 border-yellow-500 pl-5'>
              UAE VIP
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
            <div className='flex mt-10'>
              <button className='text-yellow-600 bg-gradient-to-r from-white to-yellow-500 px-4 py-2 rounded-full'>
                <p className='text-lg md:text-xl font-semibold'>
                  Book a VIP call
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-10'>
          <div className='hidden md:block'>
            <img
              className='rounded-3xl w-full h-full object-cover'
              src='/four.jpg'
              alt='four'
            />
          </div>
          <div className='hidden md:block'>
            <img
              className='rounded-3xl w-full h-full object-cover'
              src='/five.jpg'
              alt='five'
            />
          </div>
          <div className='hidden md:block'>
            <img
              className='rounded-3xl w-full h-full object-cover'
              src='/four.jpg'
              alt='four'
            />
          </div>
          <div className='hidden md:block'>
            <img
              className='rounded-3xl w-full h-full object-cover'
              src='/five.jpg'
              alt='five'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
