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
  readMore,
}) => {
  const cardContent = (
    <div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs duration-1000 font-extraLight text-biege group-hover:text-pink group-hover:border-zinc-200">
          {date ? date : <span>SOON</span>}
        </span>
        <span className="flex items-center gap-1 text-xs text-grayDark font-extraLight group-hover:text-orange">
          <Eye className="w-4 h-4" /> {like}
        </span>
      </div>
      <h2 className="z-20 text-xl duration-1000 font-semiBold lg:text-3xl text-biege group-hover:text-yellow font-display">
        {title}
      </h2>
      <p className="z-20 mt-4 text-sm font-light duration-1000 text-grayDark group-hover:text-grayLight">
        {description}
      </p>
    </div>
  );

  const cardReadMore = (
    <div className="flex flex-col justify-between gap-14">
      {cardContent}
      <div className="bottom-8 md:bottom-8">
        <p className="hidden text-grayDark group-hover:text-grayLight lg:block">
          {readMore} <span aria-hidden="true">&rarr;</span>
        </p>
      </div>
    </div>
  );

  const cardwithReadMore = (
    <CardLayout>
      <Link href={`/project/${slug}`}>
        <article className="p-4 md:p-8">{cardReadMore}</article>
      </Link>
    </CardLayout>
  );

  const cardWithOutReadMore = (
    <div className="grid grid-cols-1 gap-4">
      <CardLayout>
        <Link href={`/project/${slug}`}>
          <article className="p-4 md:p-8">{cardContent}</article>
        </Link>
      </CardLayout>
    </div>
  );

  return readMore ? cardwithReadMore : cardWithOutReadMore;
};

export default CardWithContent;
