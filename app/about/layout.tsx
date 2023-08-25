import React from 'react';
import Header from '@components/Header';
import PageContainer from '@components/PageContainer';
import { ReactJSXProps } from '../../types/common';

const LayoutWithHeader: React.FC<ReactJSXProps> = ({ children }) => {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default LayoutWithHeader;
