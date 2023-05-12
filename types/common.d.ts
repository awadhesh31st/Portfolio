import React from 'react';

export interface ReactJSXProps {
  children?: React.ReactNode;
}

export interface basicPageProps {
  key?: string | number | boolean;
  title?: string;
  description?: string;
}

export interface basicInputProps extends basicPageProps {
  inputPlaceholder?: string;
  buttonLabel?: string;
}

export interface NavigationProps extends basicPageProps {
  path?: string;
}

export interface FooterMenuProps extends basicPageProps {
  navItem?: string[];
}

export interface FooterProps extends basicPageProps {
  menu?: FooterMenuProps;
  moreMenu?: FooterMenuProps;
  form?: basicInputProps;
}

export interface LayoutProps extends basicPageProps {
  navigationsProps?: NavigationProps[];
  pageSection?: basicPageProps;
}
