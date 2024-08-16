import React from 'react';

const SectionOne: React.FC = () => {
  return (
    <div className='h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-yellow-500 h-full'>
        <div className=' md:pr-4'>
          <div className='mb-4 md:ml-20 p-4'>
            <h1 className='text-2xl md:text-3xl font-bold mb-5'>
              Custom Solutions
            </h1>
            <h2 className='text-md md:text-lg mb-1'>Maximize your wealth:</h2>
            <p>
              This is the first column. It contains some content that will be
              displayed in the first column.
            </p>
          </div>
          <div className='hidden md:block pr-4 py-4 h-full'>
            <img
              className='rounded-r-3xl w-full object-cover'
              src='/one.jpg'
              alt='one'
            />
          </div>
        </div>
        <div className='flex items-center'>
          <div className='p-4'>
            <div className='mb-3'>
              <h2 className='text-md md:text-lg mb-1'>Maximize your wealth:</h2>
              <p>
                This is the first column. It contains some content that will be
                displayed in the first column. It contains some content.
              </p>
            </div>
            <div className='mb-3'>
              <h2 className='text-md md:text-lg mb-1'>Maximize your wealth:</h2>
              <p>
                This is the first column. It contains some content that will be
                displayed in the first column. It contains some content.
              </p>
            </div>
            <div className='mb-3'>
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
        <div className='hidden md:block pl-4 py-4 h-full'>
          <img
            className='rounded-l-3xl h-full w-full object-cover'
            src='/two.jpg'
            alt='two'
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
