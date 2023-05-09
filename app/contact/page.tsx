import React from 'react';
import { ContectProps } from '../../types/contect';
import { ContectMock } from '@mocks/contect-mock';
import Navigation from '@components/Navigation/Navigation';

const Conact = () => {
  const { navigationsProps, pageTitle }: ContectProps = ContectMock;
  return (
    <div className="relative pb-16">
      <Navigation navigations={navigationsProps?.navigations} />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-biege sm:text-4xl">
            {pageTitle}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Conact;
