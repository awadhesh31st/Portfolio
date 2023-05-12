import Image from 'next/image';
import CenterNavigation from '@components/Navigation/CenterNavigation';
import TechStacksLogo from '@components/TechStacksLogo';
import { HomeMock } from '@mocks/home-mock';
import Illuminated from '../public/assets/images/illuminated.svg';
import { LayoutProps, NavigationProps } from '../types/common';

const Home = () => {
  const { navigationsProps, title, description }: LayoutProps = HomeMock;

  return (
    <div className="flex flex-col-reverse items-center justify-center w-screen h-auto sm:flex-col sm:h-screen">
      <div className="flex flex-col items-center justify-center mx-8 gap-14">
        <div className="flex items-center justify-center my-6">
          <Image
            src={Illuminated}
            alt="illuminated"
            id="illuminated"
            className="duration-700 w-96 hover:drop-shadow-carrot"
          />
        </div>
        <h1 className="text-6xl text-center duration-1000 drop-shadow-purple hover:drop-shadow-carrot font-extraBold sm:text-7xl whitespace-wrap sm:whitespace-nowrap">
          {title}
        </h1>
        <div className="text-center animate-fade-in">
          <h2 className="duration-700 text-sm sm:text-base font-light text-grayDark hover:text-biege md:w-[45rem] w-50">
            {description}
          </h2>
          <TechStacksLogo />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        {navigationsProps?.map((navigation: NavigationProps, key: number) => {
          return <CenterNavigation {...navigation} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Home;
