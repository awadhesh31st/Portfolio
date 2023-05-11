import React from 'react';
import Image from 'next/image';
import brandLogo from '../public/assets/images/logo-transparent.png';

const PageNotFound = () => {
  return (
    <main className="flex flex-col h-full">
      <div className="flex flex-col h-screen pb-12 bg-black text-biege">
        <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-center flex-shrink-0">
            <a className="inline-flex" href="/">
              <Image className="w-16 h-auto" src={brandLogo} alt="brandLogo" />
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="font-semibold tracking-wide text-gray-100 uppercase">
                💩 404 error
              </p>
              <h1 className="mt-2 text-5xl tracking-tight font-extraBold text-gray-50 sm:text-6xl">
                Page not found.
              </h1>
              <p className="mt-5 text-gray-100">
                If you think this page should exist, email
                awadhesh31st@gmail.com
              </p>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default PageNotFound;
