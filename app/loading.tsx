import React from 'react';
import Spinner from '@components/CommonComponents/Spinner';

const LoadingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto mt-8 sm:flex-col sm:h-screen sm:mt-0">
      <Spinner className="fill-blue" />
    </div>
  );
};

export default LoadingComponent;
