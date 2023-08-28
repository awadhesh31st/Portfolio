'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@components/Header';
import PageContainer from '@components/PageContainer';
import useHook from '../../public/assets/icons/logo-useHooks.svg';
import { ReactJSXProps } from '../../types/common';

const LayoutUseHooks: React.FC<ReactJSXProps> = ({ children }) => {
  return (
    <>
      <Header />
      <PageContainer>
        <div className="flex flex-col items-center justify-center px-5 gap-7 mb-15">
          <Image
            src={useHook}
            alt="check-all"
            className="h-auto w-52 sm:w-80"
          />
          <p className="w-full p-6 text-center rounded-lg sm:w-2/3 bg-darkGrey">
            Custom hooks are a fundamental concept in React, a popular
            JavaScript library for building user interfaces. They allow you to
            extract reusable logic from your components into separate functions,
            making your code more modular and easier to maintain.
          </p>
        </div>
        <div className="">{children}</div>
      </PageContainer>
    </>
  );
};

export default LayoutUseHooks;
