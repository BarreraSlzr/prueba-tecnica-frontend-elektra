import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

interface IModalContext<T> {
  isOpen: boolean,
  data: T | undefined,
  openModal(data: T): void,
  closeModal(): void,
}

const ModalContext = createContext({} as IModalContext<any>);

export default function ModalProvider({ children }: PropsWithChildren) {

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any>();

  const openModal = (data: any) => {
    setData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const initialContextData = {
    isOpen,
    data,
    openModal,
    closeModal
  }

  return (
    <ModalContext.Provider value={initialContextData}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);