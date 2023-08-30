import React from 'react';
import MackBooKCard from '@components/Card/MackBooKCard';
import { PortfolioMock } from '@mocks/portfolio-mock';
import { BasicProps } from '../../types/common';

const Portfolio = () => {
  const mock = PortfolioMock || [];
  return (
    <div className="grid grid-cols-1 gap-4 px-5 mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {mock.map((item: BasicProps, key) => {
        return <MackBooKCard {...item} key={key} />;
      })}
    </div>
  );
};

export default Portfolio;
