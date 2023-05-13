import React from 'react';
import Link from 'next/link';
import { NavigationProps } from '../../types/common';

const CenterNavigation: React.FC<NavigationProps> = ({ title, path }) => {
  return (
    <nav className="mb-16 sm:mb-0 animate-fade-in">
      <ul className="justify-center gap-4 sm:flex navigations-center">
        <Link
          key={path || ''}
          href={path || ''}
          className="text-base font-light duration-500 text-grayDark hover:text-biege"
        >
          {title || ''}
        </Link>
      </ul>
    </nav>
  );
};

export default CenterNavigation;
