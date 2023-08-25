import { FooterProps } from '../types/common';

export const FooterMock: FooterProps = {
  menu: {
    title: 'Stuff',
    navItem: ['Repository', 'About'],
  },
  moreMenu: {
    title: 'More',
    navItem: ['Blog', 'useHooks'],
  },
  form: {
    title: 'Connect with me',
    description: 'Share your email for the latest React news.',
    inputPlaceholder: 'Enter your email',
    buttonLabel: 'Submit',
  },
};
