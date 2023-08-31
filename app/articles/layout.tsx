'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@components/Header';
import PageContainer from '@components/PageContainer';
import useHook from '../../public/assets/icons/logo-useHooks.svg';
import { ReactJSXProps } from '../../types/common';

const ArticleLayout: React.FC<ReactJSXProps> = ({ children }) => {
  return (
    <>
      <Header />
      <PageContainer>
        <div className="flex flex-col items-center justify-center px-5 gap-7 mb-15">
          <Link
            href={`/articles`}
            className="text-5xl text-center duration-1000 sm:text-6xl drop-shadow-red hover:drop-shadow-green font-extraBold"
          >
            Web Wizardry
          </Link>
          <p className="w-full p-6 text-center rounded-lg sm:w-2/3 ">
            Elevate Your Web Development Skills: Discover the Latest Trends,
            Tips, and Techniques in the Dynamic World of Web Development. Stay
            Updated with Our Informative and Practical Articles!
          </p>
        </div>
        {children}
      </PageContainer>
    </>
  );
};

export default ArticleLayout;
