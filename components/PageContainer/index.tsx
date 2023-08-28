import React from 'react';
import Footer from '@components/Footer';
import { ReactJSXProps } from '../../types/common';

const PageContainer: React.FC<ReactJSXProps> = ({ children }) => {
  return (
    <div className="pb-12">
      <div className="px-6 mx-auto bg-grayLight max-w-7xl" />
      <div className="container pt-8 mx-auto lg:px-8 md:pt-16 lg:pt-16">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageContainer;
