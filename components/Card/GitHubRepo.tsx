import CardLayout from './CardLayout';
import React from 'react';
import Link from 'next/link';
import DateFormat from '@components/CommonComponents/DateFormat';
import {
  FaRocket,
  FaFolder,
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { GitRepoProps } from '../../types/card';

const GitHubRepo: React.FC<GitRepoProps> = ({
  id,
  name,
  description,
  created_at,
  homepage,
  html_url,
}) => {
  const regex = /-/gi;
  return (
    <CardLayout key={id}>
      <article className="p-4 md:p-8">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs duration-1000 font-extraLight text-grayDark group-hover:text-pink">
            <DateFormat date={created_at} />
          </span>
        </div>
        <h2 className="flex items-center gap-4 mt-4 text-2xl capitalize duration-1000 font-semiBold lg:text-3xl text-biege group-hover:text-yellow">
          <FaFolder />
          <span>{(name || '').replaceAll(regex, ' ')}</span>
        </h2>
        <p className="mt-4 text-sm font-light duration-700 text-grayDark group-hover:text-biege">
          {description}
        </p>
        <span className="flex items-center justify-start gap-4 mt-8">
          <a
            href={html_url}
            target="_blank"
            className="font-light cursor-pointer text-grayDark group-hover:text-purple"
          >
            <FaGithub />
          </a>
          <a
            href={homepage || ''}
            target="_blank"
            className="font-light cursor-pointer text-grayDark group-hover:text-orange"
          >
            <FaExternalLinkAlt />
          </a>
        </span>
      </article>
    </CardLayout>
  );
};

export default GitHubRepo;
