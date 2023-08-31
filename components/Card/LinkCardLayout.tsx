import React from 'react';
import Link from 'next/link';
import { JsxWithClass } from '../../types/common';

const LinkCardLayout: React.FC<JsxWithClass> = ({
  children,
  className,
  url = '',
}) => {
  return (
    <Link
      href={`/articles/${url}`}
      className={`duration-700 border opacity-100 rounded-xl hover:bg-charcoal group md:gap-8 border-grayDark hover:border-none border-opacity-60 ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkCardLayout;
