import React from 'react';

export interface ReactJSXProps {
  children?: React.ReactNode;
}

export interface JsxWithClass extends ReactJSXProps {
  className?: string;
  url?: string;
}

export interface KeyValue {
  [key: string]: string;
}

export interface StyleHtmlProps {
  content?: string;
}

export interface BasicProps {
  key?: string | number | boolean;
  title?: string;
  shortDescription?: string;
  description?: string;
  date?: string;
  code?: string;
  uri?: string;
}

export interface basicInputProps extends BasicProps {
  inputPlaceholder?: string;
  buttonLabel?: string;
}

export interface NavigationProps extends BasicProps {
  path?: string;
}

export interface FooterMenuProps extends BasicProps {
  navItem?: string[];
}

export interface FooterProps extends BasicProps {
  menu?: FooterMenuProps;
  moreMenu?: FooterMenuProps;
  form?: basicInputProps;
}

export interface LayoutProps extends BasicProps {
  navigationsProps?: NavigationProps[];
  pageSection?: BasicProps;
}

export interface ModalProps extends ReactJSXProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export interface BlogProps {
  [key: string]: BlogDetailProps;
}

export interface BlogDetailProps {
  hookTitle?: string;
  hookDescription?: string;
  descriptionTitle?: string;
  description?: string;
  returnTitle?: string;
  returnDescription?: string;
}
