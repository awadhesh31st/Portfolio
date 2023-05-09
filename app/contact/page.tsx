import React from 'react';
import Image from 'next/image';
import { ContectProps } from '../../types/contect';
import { ContectMock } from '@mocks/contect-mock';

import ContactForm from '../../public/assets/icons/real-world.svg';
import MutantFish from '../../public/assets/icons/mutant-fish.svg';
import Resume from '../../public/assets/icons/resume.svg';

const Conact = () => {
  const {
    pageTitle,
    pageDescription,
    placeHolderText,
    buttonLabel,
    linkedin,
  }: ContectProps = ContectMock;
  return (
    <div className="flex items-center justify-center w-screen flex-col h-auto md:h-screen py-6 md:py-0">
      <div className="flex flex-col justify-center items-center text-center gap-8 md:w-[45rem] w-50">
        <h1 className="text-6xl duration-1000 drop-shadow-purple hover:drop-shadow-carrot font-extraBold sm:text-7xl whitespace-wrap sm:whitespace-nowrap text-center">
          {pageTitle}
        </h1>
        <h2 className="text-grayLight text-md sm:text-xl font-light mx-6 md:mx-12">
          {pageDescription}
        </h2>
        <figure className="mt-14 mb-2">
          <a href={linkedin} target="_blank">
            <Image
              src={Resume}
              alt="mutant-fish"
              className="duration-700 lg:w-40 w-28 h-auto hover:drop-shadow-pink cursor-pointer"
            />
          </a>
        </figure>
      </div>
      <div className="flex flex-col items-center justify-center mx-8 gap-8">
        <div className="mt-20 mx-2 sm:mx-8 py-8 lg:py-20 bg-charcoal rounded-[20px] md:rounded-[50px] relative text-beige">
          <figure className="absolute lg:top-[-4rem] top-[-3rem] right-0 pt-5">
            <Image
              src={ContactForm}
              alt="mutant-fish"
              className="duration-700 lg:w-40 w-20 h-auto hover:drop-shadow-red"
            />
          </figure>
          <div className="container mx-auto px-8 grid grid-cols-2 lg:grid-cols-12 gap-20">
            <div className="col-span-2 lg:col-span-12">
              <form className="p-8 bg-coal bg-opacity-50 rounded-2xl w-full">
                <div className="flex gap-2 items-start flex-wrap md:flex-nowrap">
                  <div className="w-full">
                    <div className="grid gap-2 flex-1 shadow-md ">
                      <input
                        id="bytes_email"
                        placeholder={placeHolderText}
                        name="bytes_email"
                        className="h-10 w-full bg-coal bg-opacity-10 border border-grayDark border-opacity-60 text-beige rounded-md py-2 pl-4 placeholder:opacity-50 placeholder:text-beige focus:border-beige outline-none focus:ring-0  undefined"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow text-charcoal rounded py-2 px-4 font-bold w-full md:w-[200px] whitespace-nowrap"
                  >
                    <span className="flex-grow">{buttonLabel}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <figure className="absolute md:top-[13rem] top-[13rem] md:left-96 left-32">
            <Image
              src={MutantFish}
              alt="mutant-fish"
              className="duration-700 lg:w-40 w-20 h-auto hover:drop-shadow-blue"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Conact;
