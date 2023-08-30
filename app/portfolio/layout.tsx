import React from 'react';
import Header from '@components/Header';
import PageContainer from '@components/PageContainer';
import { ReactJSXProps } from '../../types/common';

const LayoutUseHooks: React.FC<ReactJSXProps> = ({ children }) => {
  return (
    <>
      <Header />
      <PageContainer>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center max-w-sm mx-5 text-center sm:max-w-2xl">
            <h1 className="text-5xl text-center duration-1000 sm:text-6xl drop-shadow-carrot hover:drop-shadow-green font-extraBold">
              I build &<br /> design stuff
            </h1>
            <div className="flex flex-col items-center justify-center gap-20 sm:gap-32">
              <div className="flex flex-col items-center justify-center gap-5 text-sm font-thin sm:font-extraLight mt-14 text-biege sm:text-lg">
                <p>
                  expertise lies in utilizing cutting-edge technologies like
                  React, Next.js, TypeScript, and JavaScript to deliver seamless
                  user experiences and visually appealing interfaces
                </p>
              </div>
            </div>
          </div>
        </div>
        {children}
      </PageContainer>
    </>
  );
};

export default LayoutUseHooks;
