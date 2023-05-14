import React from 'react';

export interface ReactJSXProps {
  children?: React.ReactNode;
}

export interface StyleHtmlProps {
  content?: string;
}

export interface basicProps {
  key?: string | number | boolean;
  title?: string;
  description?: string;
  date?: string;
}

export interface basicInputProps extends basicProps {
  inputPlaceholder?: string;
  buttonLabel?: string;
}

export interface NavigationProps extends basicProps {
  path?: string;
}

export interface FooterMenuProps extends basicProps {
  navItem?: string[];
}

export interface FooterProps extends basicProps {
  menu?: FooterMenuProps;
  moreMenu?: FooterMenuProps;
  form?: basicInputProps;
}

export interface LayoutProps extends basicProps {
  navigationsProps?: NavigationProps[];
  pageSection?: basicProps;
}
