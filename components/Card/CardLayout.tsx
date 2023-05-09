'use client';

import React from 'react';
import { ReactJSXProps } from '../../types/reactJSX';

const CardLayout: React.FC<ReactJSXProps> = ({ children }) => {
  return (
    <div className="duration-700 border rounded-xl hover:bg-charcoal group md:gap-8 border-grayDark hover:border-none opacity-100 border-opacity-60 hover:drop-shadow-yellow">
      {children}
    </div>
  );
};

export default CardLayout;
