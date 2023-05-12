'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterMock } from '@mocks/footer-mock';
import hook from '../../public/assets/icons/hook.svg';
import brandLogo from '../../public/assets/images/logo-transparent.png';
import { FooterProps } from '../../types/common';

const Footer = () => {
  const { menu, moreMenu, form }: FooterProps = FooterMock;
  return (
    <footer className="mt-20 mx-2 sm:mx-8 py-8 lg:py-20  bg-charcoal rounded-[20px] md:rounded-[50px] relative overflow-hidden text-beige">
      <div className="container px-8 mx-auto mb-12">
        <Link href="/">
          <Image width="48" src={brandLogo} alt="brand-logo" />
        </Link>
      </div>
      <div className="container grid grid-cols-2 gap-20 px-8 pb-8 mx-auto lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h4 className="font-bold uppercase" id={menu?.title}>
            {menu?.title}
          </h4>
          <ul className="grid gap-4 mt-8">
            {menu?.navItem?.map((item, key) => {
              return (
                <li key={key}>
                  <Link href={`/${item.toLocaleLowerCase()}`} id={item}>
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h4 className="font-bold uppercase">{moreMenu?.title}</h4>
          <ul className="grid gap-4 mt-8">
            {moreMenu?.navItem?.map((item, key) => {
              return (
                <li key={key}>
                  <Link href={`/${item.toLocaleLowerCase()}`} id={item}>
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-6">
          <h4 className="mb-8 font-bold uppercase" id={form?.title}>
            {form?.title}
          </h4>
          <form className="p-8 bg-[rgba(0,0,0,.2)] relative rounded-2xl w-full">
            <figure className="absolute top-[-12px] right-0">
              <Image width="48" src={hook} alt="Bytes" />
            </figure>
            <h6 className="mb-4" id={form?.description}>
              {form?.description}
            </h6>
            <div className="flex flex-wrap items-start gap-2 md:flex-nowrap">
              <div className="w-full">
                <div className="grid flex-1 gap-2 shadow-md ">
                  <input
                    id={form?.title}
                    placeholder={form?.inputPlaceholder}
                    name="bytes_email"
                    className="h-10 w-full !bg-[rgba(0,0,0,0)] border border-beige/10 text-beige rounded-md py-2 pl-4 placeholder:opacity-50 placeholder:text-beige focus:border-beige outline-none focus:ring-0  undefined"
                  />
                </div>
              </div>
              <button
                className="bg-yellow text-charcoal rounded py-2 px-4 font-bold w-full md:w-[200px] whitespace-nowrap"
                onClick={() => console.log('email submitted')}
              >
                <span className="flex-grow" id={form?.buttonLabel}>
                  {form?.buttonLabel}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
