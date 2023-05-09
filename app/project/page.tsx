import React from 'react';

import { ProjectProps } from '../../types/project';

import { ProjectMock } from '@mocks/project-mock';
import { CardMock } from '@mocks/card-mock';

import Navigation from '@components/Navigation/Navigation';
import CardWithContent from '@components/Card/CardWithContent';

const Projects = () => {
  const { navigationsProps, pageTitle, pageDescription }: ProjectProps =
    ProjectMock;
  return (
    <div className="relative pb-16">
      <Navigation navigations={navigationsProps?.navigations} />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-biege sm:text-4xl">
            {pageTitle}
          </h2>
          <p className="mt-4 text-grayLight">{pageDescription}</p>
        </div>
        <div className="w-full h-px bg-grayLight bg-opacity-20" />

        <div className="grid  grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {CardMock?.map((cardData, key) => {
            return <CardWithContent {...cardData} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
