import React from 'react';
import Header from '@components/Header';
import { ReactJSXProps } from '@types/common';

const LayoutHasHeader: React.FC<ReactJSXProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutHasHeader;
