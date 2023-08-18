import { createContext, ReactNode, useState } from "react";

export const Authcontext = createContext({
  modalOpen: false,
  modalHandler: () => {},
});

const AuthcontextProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalOpenHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const value = {
    modalOpen: isModalOpen,
    modalHandler: modalOpenHandler,
  };

  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
};

export default AuthcontextProvider;
