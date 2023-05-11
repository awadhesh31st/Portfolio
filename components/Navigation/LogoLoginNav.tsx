'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/images/logo-transparent.png';
import { NavigationsProps } from '../../types/navigation';

const LogoLoginNav: React.FC<NavigationsProps> = ({ navigations }) => {
  const navigation = navigations?.[0];
  return (
    <nav
      className="container flex flex-row items-center justify-between p-8 mx-auto"
      id="brand-nav"
    >
      <a className="rounded-full w-[40px] h-auto " href="/">
        <Image src={Logo} alt="brand logo" id="brand-logo" />
      </a>
      <div className="flex items-center justify-end gap-8" id="brand-menu">
        <Link
          href={navigation?.path}
          className="btn-yellow"
          key={navigation?.path}
          id={navigation?.path}
        >
          <span className="text-sm font-semiBold" id={navigation?.title}>
            {navigation?.title}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default LogoLoginNav;
