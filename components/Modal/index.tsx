import React from 'react';
import { ModalProps } from '../../types/common';

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mt-0 bg-opacity-25 bg-grayDark backdrop-blur-sm">
      <div className="relative flex h-auto max-w-full p-12 m-4 rounded-xl sm:max-w-3xl bg-charcoal">
        {children}
      </div>
    </div>
  );
};

export default Modal;
