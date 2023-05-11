import React from 'react';
import Image from 'next/image';
import { ContactProps } from '../../types/contact';

import LogoLoginNav from '@components/Navigation/LogoLoginNav';
import Footer from '@components/Footer';
import { ContactMock } from '@mocks/contact-mock';

import reactNews from '../../public/assets/icons/react-news.svg';
import reactQuery from '../../public/assets/icons/react-query-logo.svg';

const Contact = () => {
  const { title, description, topicTitle }: ContactProps = ContactMock;
  return (
    <div className="pt-14">
      <div className="flex flex-col items-center h-auto sm:pt-44 sm:pb-28 ">
        <div className="flex flex-col justify-center items-center text-center gap-8 md:w-[45rem] w-50">
          <h1 className="text-6xl text-center duration-1000 drop-shadow-purple hover:drop-shadow-carrot font-extraBold sm:text-7xl whitespace-wrap sm:whitespace-nowrap">
            {title}
          </h1>
          <h2 className="mx-6 font-light text-grayLight text-md sm:text-xl md:mx-12">
            {description}
          </h2>
        </div>
        <section className="mx-auto max-w-[800px] text-beige pt-10 pb-20 px-2">
          <h4 className="mx-6 text-center mb-12 font-regular max-w-[500px] text-grayDark text-md sm:text-xl md:mx-12">
            {topicTitle}
          </h4>
          <div className="flex flex-col items-center justify-center gap-11 sm:gap-8 sm:flex-row">
            <div className="w-40 h-auto">
              <Image
                className="inline-block"
                src={reactNews}
                alt="1m YouTube Views"
              />
            </div>
            <div className="w-40 h-auto">
              <Image
                className="inline-block"
                src={reactQuery}
                alt="1m YouTube Views"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
