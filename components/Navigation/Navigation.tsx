'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { NavigationsProps } from '../../types/navigation';

const Navigation: React.FC<NavigationsProps> = ({ navigations }) => {
  const [isIntersecting, setIntersecting] = useState(true);
  return (
    <header>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? 'bg-zinc-900/0 border-transparent'
            : 'bg-zinc-900/500  border-zinc-800 '
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {navigations?.map((navigation, key) => {
              return (
                <Link
                  href={navigation?.path}
                  key={key}
                  className="duration-200 text-grayDark hover:text-biege"
                >
                  {navigation?.title}
                </Link>
              );
            })}
          </div>

          <Link
            href="/"
            className="duration-200 text-grayDark hover:text-biege"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
