import { HomeProps } from '../types/home';
import { HomeMock } from '@mocks/home-mock';
import Image from 'next/image';
import CenterNavigation from '@components/Navigation/CenterNavigation';

import Illuminated from '../public/assets/images/illuminated.svg';
import TechStacksLogo from '@components/TechStacksLogo';

const Home = () => {
  const { navigationsProps, pageTitle, pageDescription }: HomeProps = HomeMock;

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
        <h1 className="text-4xl duration-1000 drop-shadow-purple hover:drop-shadow-carrot font-extraBold sm:text-7xl whitespace-nowrap">
          {pageTitle}
        </h1>
        <div className="text-center animate-fade-in">
          <h2 className="duration-700 text-sm sm:text-base font-light text-grayDark hover:text-biege md:w-[45rem] w-50">
            {pageDescription}
          </h2>
          <TechStacksLogo />
        </div>
      </div>
      <CenterNavigation navigations={navigationsProps?.navigations || {}} />
    </div>
  );
};

export default Home;
