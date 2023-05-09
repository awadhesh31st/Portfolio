import React from 'react';
import Link from 'next/link';
import { NavigationsProps } from '../../types/navigation';

const CenterNavigation: React.FC<NavigationsProps> = ({ navigations }) => {
  return (
    <nav className="my-8 sm:my-0 animate-fade-in">
      <ul className="flex justify-center gap-4 navigations-center">
        {navigations.map((navigation) => (
          <Link
            key={navigation.title}
            href={navigation.path}
            className="text-base font-light duration-500 text-grayDark hover:text-biege"
          >
            {navigation.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default CenterNavigation;
