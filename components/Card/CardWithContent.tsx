'use client';

import React from 'react';
import Link from 'next/link';
import CardLayout from './CardLayout';

import { Eye } from 'lucide-react';
import { CardProps } from '../../types/card';

const CardWithContent: React.FC<CardProps> = ({
  slug,
  date,
  like,
  title,
  description,
}) => {
  return (
    <CardLayout>
      <Link href={`/project/${slug}`}>
        <article className="p-4 md:p-8">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs duration-1000 font-extraLight text-biege group-hover:text-pink">
                {date ? date : <span>SOON</span>}
              </span>
              <span className="flex items-center gap-1 text-xs text-grayDark font-extraLight group-hover:text-orange">
                <Eye className="w-4 h-4" /> {like}
              </span>
            </div>
            <h2 className="text-2xl duration-1000 font-semiBold lg:text-3xl text-biege group-hover:text-yellow">
              {title}
            </h2>
            <p className="mt-4 duration-700 text-sm font-light text-grayDark hover:text-biege">
              {description}
            </p>
          </div>
        </article>
      </Link>
    </CardLayout>
  );
};

export default CardWithContent;
