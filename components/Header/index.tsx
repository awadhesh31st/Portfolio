import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import brandLogo from '../../public/assets/images/logo-transparent.png';

const Header = () => {
  const showLogin: boolean = false;
  return (
    <nav className="container flex items-center justify-center p-8 mx-auto sm:justify-between">
      <Link
        href="/"
        className="grid place-items-center text-center bg-brand-charcoal rounded-full w-[56px] h-[56px] text-brand-beige hover:text-brand-yellow"
      >
        <Image width="48" src={brandLogo} alt="brand-logo" />
      </Link>

      {showLogin && (
        <div className="flex items-center justify-end gap-8">
          <Link
            className="px-8 py-2 font-medium uppercase border-2 rounded-full cursor-pointer border-brand-yellow bg-brand-coal text-brand-yellow hover:bg-brand-yellow hover:text-brand-charcoal"
            href="/login"
          >
            <span className="font-black"></span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
