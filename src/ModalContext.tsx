import React, { createContext, useContext, useState, ReactNode } from 'react';
import Modal from './components/Modal';

type ModalData = {
  title: string;
  content: ReactNode;
} | null;

interface ModalContextType {
  openModal: (title: string, content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalData, setModalData] = useState<ModalData>(null);

  return (
    <ModalContext.Provider value={{ 
      openModal: (title, content) => setModalData({ title, content }), 
      closeModal: () => setModalData(null) 
    }}>
      {children}
      <Modal 
        isOpen={!!modalData} 
        onClose={() => setModalData(null)}
        title={modalData?.title || ''}
      >
        {modalData?.content}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};
