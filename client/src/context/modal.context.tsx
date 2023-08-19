import { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext({
  modalOpen: false,
  modalHandler: () => {},
});

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalOpenHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const value = {
    modalOpen: isModalOpen,
    modalHandler: modalOpenHandler,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;