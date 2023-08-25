'use client';

import React from 'react';
import { JsxWithClass } from '../../types/common';

const CardLayout: React.FC<JsxWithClass> = ({ children, className }) => {
  return (
    <div
      className={`duration-700 border opacity-100 rounded-xl hover:bg-charcoal group md:gap-8 border-grayDark hover:border-none border-opacity-60 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
