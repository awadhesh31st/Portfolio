import React from 'react';
import CardWithContent from '@components/Card/CardWithContent';

import { WorkProps } from '../../types/work';

import { WrokMock } from '@mocks/work-mock';
import { CardMock } from '@mocks/card-mock';
import Footer from '@components/Footer';

const Projects = () => {
  const { pageTitle, pageDescription }: WorkProps = WrokMock;

  return (
    <div className="pb-16">
      <div className="px-6 mx-auto bg-grayLight max-w-7xl" />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="flex flex-col items-center justify-center gap-8 text-center w-50">
          <h1 className="text-6xl text-center duration-1000 drop-shadow-purple hover:drop-shadow-carrot font-extraBold sm:text-7xl whitespace-wrap sm:whitespace-nowrap">
            {pageTitle}
          </h1>
          <h2 className="mx-6 font-light text-grayLight text-md sm:text-xl md:mx-12">
            {pageDescription}
          </h2>
        </div>
        <div className="w-full h-px bg-grayLight bg-opacity-20" />
        <div className="grid grid-cols-1 gap-5 mx-auto lg:mx-0 sm:grid-cols-2 lg:grid-cols-3">
          {CardMock?.map((cardData, key) => {
            return <CardWithContent {...cardData} key={key} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
