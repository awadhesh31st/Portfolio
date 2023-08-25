import React from 'react';
import GitHubRepo from '@components/Card/GitHubRepo';
import { WrokMock } from '@mocks/repository-mock';
import { GitRepoProps } from '../../types/card';
import { LayoutProps } from '../../types/common';

async function fetchGitRepo() {
  const res31 = await fetch('https://api.github.com/users/awadhesh31st/repos');
  const data31 = await res31.json();
  return data31;
}

const GitRepositoryPage = async () => {
  const { title, description }: LayoutProps = WrokMock;
  const data = (await fetchGitRepo()) || [];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 px-5 text-center w-50">
        <h1 className="text-6xl text-center duration-1000 drop-shadow-purple hover:drop-shadow-carrot font-extraBold sm:text-7xl whitespace-wrap sm:whitespace-nowrap">
          {title}
        </h1>
        <h2 className="mx-6 font-light text-grayLight text-md sm:text-xl md:mx-12">
          {description}
        </h2>
      </div>
      <div className="w-full h-px px-5 bg-grayLight bg-opacity-20" />
      <div className="grid grid-cols-1 gap-5 px-5 mx-auto lg:mx-0 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((cardData: GitRepoProps, key: number) => {
          return <GitHubRepo {...cardData} key={key} />;
        })}
      </div>
    </>
  );
};

export default GitRepositoryPage;
