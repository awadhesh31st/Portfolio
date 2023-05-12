import React from 'react';
import Image from 'next/image';
import Footer from '@components/Footer';
import { AboutMock } from '@mocks/about-mock';
import { techStacks } from '@utils/techStack';
import hook from '../../public/assets/icons/hook.svg';
import javascript from '../../public/assets/icons/javascript-logo.svg';
import modernJavascript from '../../public/assets/icons/modern-javascript-logo.svg';
import reactHook from '../../public/assets/icons/react-hooks-logo.svg';
import react from '../../public/assets/icons/react-logo.svg';
import reactQuery from '../../public/assets/icons/react-query-logo.svg';
import typescriptReact from '../../public/assets/icons/react-with-typescript-logo.svg';
import checkAll from '../../public/assets/icons/ready-to-go.svg';
import { LayoutProps } from '../../types/common';

export const metadata = {
  title: 'Awadhesh | About',
  description: 'Learn about awadhesh projects',
};

const About = () => {
  const teactLogo = [
    hook,
    javascript,
    modernJavascript,
    reactHook,
    react,
    reactQuery,
    typescriptReact,
  ];
  const { title }: LayoutProps = AboutMock;

  return (
    <div className="pb-16">
      <div className="container relative mx-auto">
        <div className="flex justify-between mt-20 sm:mt-32">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center max-w-sm mx-5 text-center sm:max-w-2xl">
              <h1 className="text-5xl text-center duration-1000 sm:text-6xl drop-shadow-carrot hover:drop-shadow-green font-extraBold">
                {title}
              </h1>
              <div className="flex flex-col items-center justify-center gap-20 sm:gap-32">
                <div className="flex flex-col items-center justify-center gap-5 text-sm font-thin sm:font-extraLight mt-14 text-biege sm:text-lg">
                  <p>
                    I am an experienced
                    <span className="text-pink font-light sm:font-regular px-[3.5px]">
                      front-end developer
                    </span>
                    with a passion for Javascript and a strong expertise in
                    ReactJS. I have a great depth of knowledge in developing
                    performant, decoupled, testable and maintainable code that
                    is easy to work with. I enjoy working collaboratively with
                    my teammates, sharing my knowledge and skills, and learning
                    new technologies in the process.
                  </p>
                  <p>
                    As a developer, I take a keen
                    <span className="text-yellow font-extraLight sm:font-regular px-[3.5px]">
                      interest in open-source
                    </span>
                    and leverage existing libraries whenever it makes sense. I
                    have the ability to
                    <span className="text-pink font-extraLight sm:font-regular px-[3.5px]">
                      write components in vanilla JavaScript
                    </span>
                    but can also work with existing libraries when needed. I am
                    highly familiar with
                    <span className="text-yellow font-extraLight sm:font-regular px-[3.5px]">
                      React and Redux and write
                    </span>
                    all new code with ES6 features.
                  </p>
                  <p>
                    I have a thirst for knowledge and always
                    <span className="text-yellow font-extraLight sm:font-regular px-[3.5px]">
                      seek to learn new programming languages, frameworks, and
                      paradigms
                    </span>
                    . My expertise in front-end development combined with my
                    curiosity and ability to learn quickly makes me an ideal
                    candidate for any challenging project.
                  </p>
                  <p>
                    My passion for
                    <span className="text-pink font-extraLight sm:font-regular px-[3.5px]">
                      creating intuitive and user-friendly web interfaces
                    </span>
                    is what drives me to constantly improve and challenge
                    myself. I believe in the power of design and user experience
                    to drive success and satisfaction for both businesses and
                    their customers.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={checkAll}
                    alt="check-all"
                    className="w-56 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="my-20 sm:my-32 bg-biege rounded-[20px] md:rounded-[50px] relative overflow-hidden">
          <div className="container grid grid-cols-1 gap-10 lg:gap-0 p-11 md:p-16 lg:grid-cols-2 lg:gap-x-8">
            <div className="flex flex-col items-start justify-start gap-6 text-xl text-coal sm:gap-10">
              <h3 className="text-4xl font-black lowercase sm:text-5xl text-red font-display xl:text-7xl">
                <span className="relative z-10">
                  Here are a few technologies
                  <br />
                  I’ve been working with recently
                </span>
              </h3>
              <h4 className="text3xl sm:text-4xl font-semiBold">
                best practices into my work to make sure that all users can
                access and use the interfaces I create
              </h4>
              <div className="text-base sm:text-2xl">
                <p className="flex flex-wrap items-center justify-start">
                  {techStacks?.map((tech, key) => {
                    return (
                      <span
                        className="px-6 py-1 m-1 text-lg font-medium border-4 rounded-full bg-yellow text-coal drop-shadow-coal"
                        key={key}
                        id={tech}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 sm:mt-0">
              {teactLogo.map((tech, key) => {
                const id = key % 6;
                return (
                  <Image
                    className="w-24 h-auto md:w-28 lg:w-32 xl:w-40 drop-shadow-coal"
                    src={tech}
                    key={key}
                    alt={tech}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
