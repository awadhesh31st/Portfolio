import React from 'react';

import LogoLoginNav from '@components/Navigation/LogoLoginNav';
import { AboutMock } from '@mocks/about-mock';
import { AboutProps } from '../../types/about';
import Footer from '@components/Footer';

const About = () => {
  const { pageTitle }: AboutProps = AboutMock;
  return (
    <div>
      <div className="flex flex-col items-center h-auto sm:pt-44 sm:pb-28 ">
        <div className="flex flex-col justify-center items-center text-center gap-8 md:w-[45rem] w-50">
          <h1 className="text-6xl text-center duration-1000 drop-shadow-purple hover:drop-shadow-carrot font-extraBold sm:text-7xl whitespace-wrap sm:whitespace-nowrap">
            {pageTitle}
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
