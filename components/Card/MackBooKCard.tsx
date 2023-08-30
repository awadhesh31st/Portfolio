import React from 'react';
import { BasicProps } from '../../types/common';

const MackBooKCard: React.FC<BasicProps> = ({ title, description }) => {
  return (
    <div className="p-4 rounded-lg bg-darkGrey">
      <div className="flex items-center justify-between px-2 py-1 bg-gray-300 rounded-t-lg">
        <div className="w-16 h-4 bg-red-500 rounded-sm"></div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red"></div>
          <div className="w-3 h-3 rounded-full bg-yellow"></div>
          <div className="w-3 h-3 rounded-full bg-green"></div>
        </div>
      </div>
      <div className="px-2 py-4">
        <div className="p-5 bg-[rgba(0,0,0,.2)] rounded-lg">
          <h1 className="mb-4 text-2xl font-black text-purple ">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MackBooKCard;
