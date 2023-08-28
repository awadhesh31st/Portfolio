'use client';

import React, { useState } from 'react';
import CardLayout from '@components/Card/CardLayout';
import Modal from '@components/Modal';
import { UseHooksMock } from '@mocks/useHooks-mock';
import { BasicProps } from '../../types/common';

const UseHooksComponent = () => {
  const data = UseHooksMock || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContent, setShowContent] = useState<BasicProps>({});

  const openModal = (content: BasicProps) => {
    setShowContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowContent({});
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-5 mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((hooks, key) => {
          return (
            <div key={key} onClick={() => openModal(hooks)}>
              <CardLayout className={'hover:drop-shadow-pink cursor-pointer'}>
                <div className="grid gap-3 px-8 py-6">
                  <h3 className="text-2xl font-extraBold text-biege group-hover:text-pink">
                    {hooks.title}
                  </h3>
                  <p className="group-hover:text-biege text-grayLight">
                    {hooks.shortDescription}
                  </p>
                </div>
              </CardLayout>
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <Modal>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-pink">
              {showContent?.title}
            </h1>
            <p>{showContent.description}</p>
            <div className="flex items-start justify-end">
              <button
                className="px-8 py-2 mt-8 font-bold rounded-xl bg-pink text-charcoal"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UseHooksComponent;
