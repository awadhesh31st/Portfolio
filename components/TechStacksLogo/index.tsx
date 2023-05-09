import React from 'react';
import Image from 'next/image';

import JavascriptLogo from '../../public/assets/icons/javascript-logo.svg';
import ReactHookLogo from '../../public/assets/icons/react-hooks-logo.svg';
import ReactLogo from '../../public/assets/icons/react-logo.svg';
import ReactWithTypescriptLogo from '../../public/assets/icons/react-with-typescript-logo.svg';
import TypescriptLogo from '../../public/assets/icons/typescript-logo.svg';

const TechStacksLogo = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-5 mx-4 my-14">
      <Image
        src={JavascriptLogo}
        alt="javascript-logo"
        id="javascript-logo"
        className="duration-700 sm:w-16 sm:h-16 w-14 h-14 hover:drop-shadow-red"
      />
      <Image
        src={ReactLogo}
        alt="react-logo"
        id="react-logo"
        className="duration-700 sm:w-16 sm:h-16 w-14 h-14 hover:drop-shadow-biege"
      />
      <Image
        src={ReactHookLogo}
        alt="javascript-logo"
        id="javascript-logo"
        className="duration-700 sm:w-16 sm:h-16 w-14 h-14 hover:drop-shadow-green"
      />
      <Image
        src={ReactWithTypescriptLogo}
        alt="react-with-typescript-logo"
        id="react-with-typescript-logo"
        className="duration-700 sm:w-16 sm:h-16 w-14 h-14 hover:drop-shadow-biege"
      />
      <Image
        src={TypescriptLogo}
        alt="typescript-logo"
        id="typescript-logo"
        className="duration-700 sm:w-16 sm:h-16 w-14 h-14 hover:drop-shadow-blue"
      />
    </div>
  );
};

export default TechStacksLogo;
