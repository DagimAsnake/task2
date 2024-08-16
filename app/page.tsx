import React from 'react';
import SectionOne from '@/components/sectionOne';
import SectionTwo from '@/components/sectionTwo';
import SectionThree from '@/components/sectionThree';
import SectionFour from '@/components/sectionFour';

const page = () => {
  return (
    <div className='bg-black'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default page;
