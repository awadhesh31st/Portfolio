'use client';

import React from 'react';
import { ReactJSXProps } from '../../types/common';

const CardLayout: React.FC<ReactJSXProps> = ({ children }) => {
  return (
    <div className="duration-700 border opacity-100 rounded-xl hover:bg-charcoal group md:gap-8 border-grayDark hover:border-none border-opacity-60 hover:drop-shadow-yellow">
      {children}
    </div>
  );
};

export default CardLayout;
